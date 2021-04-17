import os
from helpers import update_postgres_url


class Config(object):
    SQLALCHEMY_DATABASE_URI = update_postgres_url(os.environ['DATABASE_URL'])
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ['SECRET_KEY']
    SESSION_TYPE = 'sqlalchemy'


class ProdConfig(Config):
    TESTING = False


class DevConfig(Config):
    TESTING = False