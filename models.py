from app import db
from sqlalchemy import ForeignKey
from werkzeug.security import check_password_hash, generate_password_hash


class Person(db.Model):
    __tablename__ = 'person'

    id = db.Column(db.BigInteger, primary_key=True)
    name = db.Column(db.String(10), unique=True, nullable=False)
    hash = db.Column(db.String(255), nullable=False)
    height = db.Column(db.Numeric(3, 0))
    date_of_birth = db.Column(db.Date)
    email = db.Column(db.String(100), unique=True)

    def __init__(self, name, password, height, date_of_birth, email):
        self.name = name
        self.hash = generate_password_hash(password)
        self.height = height
        self.date_of_birth = date_of_birth
        self.email = email

    def check_password(self, password):
        return check_password_hash(self.hash, password)


class Weighing(db.Model):
    __tablename__ = 'weighing'

    id = db.Column(db.BigInteger, primary_key=True)
    person_id = db.Column(db.BigInteger, ForeignKey('person.id'), nullable=False)
    weight = db.Column(db.Numeric(5, 2), nullable=False)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.Time, nullable=False)

    def __init__(self, person_id, weight, date, time):
        self.person_id = person_id
        self.weight = weight
        self.date = date
        self.time = time