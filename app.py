import os
from flask import Flask, render_template, request, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_cors import CORS #comment this on deployment
from datetime import datetime
from helpers import new_weighing_dict


app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
CORS(app) #comment this on deployment
jwt = JWTManager(app)
db = SQLAlchemy(app)

from models import Person, Weighing

# Create DB tables ONLY the first time
# db.create_all()


@app.route('/api/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if not username or not password:
        return jsonify('Must provide username and password.'), 401
        
    person = Person.query.filter_by(name=username).one_or_none()
    if not person or not person.check_password(password):
        return jsonify('Invalid username and/or password.'), 401

    access_token = create_access_token(identity=person.id)
    return jsonify(access_token=access_token)


@app.route('/api/register', methods=['POST'])
def register():
    username = request.json.get('username')
    if not username:
        return jsonify('Must choose a username.'), 400
    if not Person.query.filter(Person.name == username).count() == 0:
        return jsonify('Username already exist.'), 409
    
    #TODO: Review user and pass validation (characters, max length -> db.add try catch?)
    password = request.json.get('password')
    confirmation = request.json.get('confirmation')
    if not password or not confirmation:
        return jsonify('Must choose and confirm password.'), 400
    if not password == confirmation:
        return jsonify('Passwords do not match.'), 400

    new_person = Person(username, password, None, None, None)
    db.session.add(new_person)
    db.session.commit()

    access_token = create_access_token(identity=new_person.id)
    return jsonify(access_token=access_token)


@app.route('/api/add_weighing', methods=['POST'])
@jwt_required()
def add_weighing():
    weight = request.json.get('weight')
    date = request.json.get('date')
    time = request.json.get('time')

    #TODO: Validate weight characters
    try:
        weight = float(weight)
    except:
        return jsonify('Invalid weight'), 400

    #TODO: Validate date and time
    now = datetime.now()
    date = now.strftime('%Y-%m-%d')
    time = now.strftime('%H:%M')

    user_id = get_jwt_identity()
    new_weight = Weighing(user_id, weight, date, time)
    db.session.add(new_weight)
    db.session.commit()

    return jsonify('Weighing added.'), 201


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/weighings')
@jwt_required()
def get_weighings():
    user_id = get_jwt_identity()
    db_weighings = Weighing.query.filter_by(person_id=user_id).all()
    weighings = []

    if db_weighings:
        for weighing in db_weighings:
            weighings.append(
                new_weighing_dict(
                    float(weighing.weight), 
                    weighing.date.isoformat(),
                    weighing.time.isoformat()
                )
            )

    return jsonify(weighings), 200


@app.route('/api/profile')
@jwt_required()
def get_profile():
    try:
        user_id = get_jwt_identity()
        person = Person.query.filter_by(id=user_id).one_or_none()
        return jsonify(
            name=person.name,
            height=person.height,
            goal=person.goal,
            email=person.email,
        ), 200
    except:
        return jsonify('Could not get profile data.'), 500



@app.route('/api/logout')
@jwt_required()
def logout():
    #session.pop('person_id', None)
    return jsonify('Logged out.'), 200
    

if __name__ == '__main__':
    app.run()