from flask import redirect, url_for, session
from functools import wraps


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get('person_id') is None:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function


def update_postgres_url(url):
    return url.replace('postgres://', 'postgresql://', 1)