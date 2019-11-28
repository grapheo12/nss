from flask_login import UserMixin
from app.services.authService import bcrypt
from app.models import db

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    pwd_hash = db.Column(db.String(128), nullable=False)
    level = db.Column(db.Integer, nullable=False)

    def __init__(self, username, pwd, level):
        self.username = username
        self.pwd_hash = bcrypt.generate_password_hash(pwd)
        self.level = level

        db.session.add(self)
        db.session.commit()