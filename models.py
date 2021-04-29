from app import db
from sqlalchemy import ForeignKey
from werkzeug.security import check_password_hash, generate_password_hash


class Person(db.Model):
    __tablename__ = 'person'

    id = db.Column(db.BigInteger, primary_key=True)
    name = db.Column(db.String(12), unique=True, nullable=False)
    hash = db.Column(db.String(), nullable=False)
    height = db.Column(db.Numeric(3, 0))
    target = db.Column(db.Numeric(5, 2))
    email = db.Column(db.String(100), unique=True)

    def __init__(self, name, password, height, target, email):
        self.name = name
        self.hash = generate_password_hash(password)
        self.height = height
        self.target = target
        self.email = email

    def check_password(self, password):
        return check_password_hash(self.hash, password)


class Weighing(db.Model):
    __tablename__ = 'weighing'

    id = db.Column(db.BigInteger, primary_key=True)
    person_id = db.Column(db.BigInteger, ForeignKey('person.id'), nullable=False)
    weight = db.Column(db.Numeric(5, 2), nullable=False)
    datetime = db.Column(db.DateTime, nullable=False)

    def __init__(self, person_id, weight, datetime):
        self.person_id = person_id
        self.weight = weight
        self.datetime = datetime