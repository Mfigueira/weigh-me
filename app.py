import os
from flask import Flask, render_template, request, redirect, session, url_for, jsonify
from flask_session import Session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from helpers import login_required

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
db = SQLAlchemy(app)
app.config['SESSION_SQLALCHEMY'] = db
Session(app)

from models import Person, Weighing

# Create DB tables ONLY the first time
# db.create_all()


@app.route('/', methods=['GET', 'POST'])
@login_required
def index():
    if request.method == 'POST':
        weight = request.form.get('weight')
        try:
            weight = float(weight)
        except:
            return jsonify({400: 'invalid weight'})

        now = datetime.now()
        date = now.strftime('%Y-%m-%d')
        time = now.strftime('%H:%M')

        person_id = session['person_id']
        new_weight = Weighing(person_id, weight, date, time)
        db.session.add(new_weight)
        db.session.commit()

        return redirect(url_for('analytics'))

    return render_template('index.html')


@app.route('/analytics')
@login_required
def analytics():
    person_id = session['person_id']
    weighings = db.session.query(Weighing).filter_by(person_id = person_id).all()
    return render_template('analytics.html', weighings=weighings)


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        if not username:
            return jsonify({400: 'must choose a username'})
        if not db.session.query(Person).filter(Person.name == username).count() == 0:
            return jsonify({400: 'username already exist'})
        
        password = request.form.get('password')
        confirmation = request.form.get('confirmation')
        if not password or not confirmation:
            return jsonify({400: 'must choose and confirm password'})
        if not password == confirmation:
            return jsonify({400: 'passwords do not match'})
        
        height = request.form.get('height')
        date_of_birth = request.form.get('date_of_birth')
        email = request.form.get('email')

        new_person = Person(username, password, height, date_of_birth, email)
        db.session.add(new_person)
        db.session.commit()

        session['person_id'] = new_person.id
        return redirect(url_for('index'))

    return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    session.pop('person_id', None)

    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if not username or not password:
            return jsonify({403: 'must provide username and password'})
            
        person = db.session.query(Person).filter_by(name = username).first()
        if person is None or not person.check_password(password):
            return jsonify({403: 'invalid username and/or password'})

        session['person_id'] = person.id
        return redirect(url_for('index'))

    return render_template('login.html')


@app.route('/logout')
def logout():
    session.pop('person_id', None)
    return redirect(url_for('login'))
    

if __name__ == '__main__':
    app.run()