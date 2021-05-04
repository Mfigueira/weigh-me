import re
from datetime import datetime


def update_postgres_url(url):
    return url.replace('postgres://', 'postgresql://', 1)


def is_username_valid(username):
    return bool(re.match(r'^[\S]{1,12}$', username))


def is_password_valid(password):
    return bool(re.match(r'^[\S]{1,20}$', password))


def is_weight_valid(weight):
    return bool(re.match(r'^[0-9]{1,3}([.]{1}[0-9]{0,2}){0,1}$', weight))


def is_datetime_valid(dt):
    try:
        valid = datetime.fromisoformat(dt)
        return bool(valid)
    except:
        return False


def new_weighing_dict(id, weight, datetime):
    return {
        'id': id,
        'weight': weight,
        'datetime': datetime
    }