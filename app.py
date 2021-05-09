import os
from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
# from flask_cors import CORS #comment this on deployment
from datetime import datetime
from helpers import new_weighing_dict, is_username_valid, is_password_valid, is_weight_valid, is_datetime_valid


app = Flask(__name__, static_url_path='', static_folder='frontend/build')
app.config.from_object(os.environ['APP_SETTINGS'])
# CORS(app) #comment this on deployment
jwt = JWTManager(app)
db = SQLAlchemy(app)

from models import Person, Weighing

# Create DB tables ONLY the first time
# db.create_all()


@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')


@app.errorhandler(404)
def not_found_redirect(error):
    return send_from_directory(app.static_folder,'index.html')


@app.route('/api/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if not is_username_valid(username) or not is_password_valid(password):
        return jsonify(msg='Invalid format.'), 400
        
    person = Person.query.filter_by(name=username).one_or_none()
    if not person or not person.check_password(password):
        return jsonify(msg='Invalid user credentials.'), 401

    access_token = create_access_token(identity=person.id)
    return jsonify(access_token=access_token)


@app.route('/api/register', methods=['POST'])
def register():
    username = request.json.get('username')
    if not is_username_valid(username):
        return jsonify(msg='Must choose a valid username.'), 400
    if not Person.query.filter(Person.name == username).count() == 0:
        return jsonify(msg='Username already exist.'), 409
    
    password = request.json.get('password')
    confirmation = request.json.get('confirmation')
    if not password == confirmation or not is_password_valid(password):
        return jsonify(msg='Must choose and confirm valid password.'), 400

    try:
        new_person = Person(username, password, None, None, None)
        db.session.add(new_person)
        db.session.commit()
    except:
        return jsonify(msg='Could not register user.'), 500

    access_token = create_access_token(identity=new_person.id)
    return jsonify(access_token=access_token)


@app.route('/api/add_weighing', methods=['POST'])
@jwt_required()
def add_weighing():
    weight = request.json.get('weight')
    if not is_weight_valid(weight):
        return jsonify(msg='Invalid weight.'), 400

    dt = request.json.get('datetime')
    if not is_datetime_valid(dt):
        return jsonify(msg='Invalid datetime.'), 400

    try:
        user_id = get_jwt_identity()
        new_weight = Weighing(user_id, float(weight), dt)
        db.session.add(new_weight)
        db.session.commit()
    except:
        return jsonify(msg='Could not add weighing.'), 500

    return jsonify(
        id=new_weight.id,
        msg='Weighing added.'
    ), 201


@app.route('/api/update_weighing', methods=['POST'])
@jwt_required()
def update_weighing():
    wId = request.json.get('id')
    if not wId:
        return jsonify(msg='ID missing.'), 400

    weight = request.json.get('weight')
    if not is_weight_valid(weight):
        return jsonify(msg='Invalid weight.'), 400

    dt = request.json.get('datetime')
    if not is_datetime_valid(dt):
        return jsonify(msg='Invalid datetime.'), 400

    try:
        user_id = get_jwt_identity()
        weighing = Weighing.query.filter_by(id=wId, person_id=user_id).one_or_none()
        weighing.weight = weight
        weighing.datetime = dt
        db.session.commit()
    except:
        return jsonify(msg='Could not update weighing.'), 500

    return jsonify(msg='Weighing updated.'), 200


@app.route('/api/delete_weighing', methods=['POST'])
@jwt_required()
def delete_weighing():
    wId = request.json.get('id')
    if not wId:
        return jsonify(msg='ID missing.'), 400

    try:
        user_id = get_jwt_identity()
        weighing = Weighing.query.filter_by(id=wId, person_id=user_id).one_or_none()
        db.session.delete(weighing)
        db.session.commit()
    except:
        return jsonify(msg='Could not delete weighing.'), 500

    return jsonify(msg='Weighing deleted.'), 200


@app.route('/api/weighings')
@jwt_required()
def get_weighings():
    try:
        user_id = get_jwt_identity()
        db_weighings = Weighing.query.filter_by(person_id=user_id).all()
        weighings = []
        if db_weighings:
            for weighing in db_weighings:
                weighings.append(
                    new_weighing_dict(
                        weighing.id,
                        float(weighing.weight), 
                        weighing.datetime.isoformat()
                    )
                )
        return jsonify(weighings), 200
    except:
        return jsonify(msg='Could not get weighings.'), 500


@app.route('/api/profile')
@jwt_required()
def get_profile():
    try:
        user_id = get_jwt_identity()
        person = Person.query.filter_by(id=user_id).one_or_none()
        return jsonify(
            name=person.name,
            height=person.height,
            target=person.target,
            email=person.email,
        ), 200
    except:
        return jsonify(msg='Could not get profile data.'), 500
    

if __name__ == '__main__':
    app.run()