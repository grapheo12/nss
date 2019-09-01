from flask_login import UserMixin

from app import db

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    pwd_hash = db.Column(db.String(128), nullable=False)
    level = db.Column(db.Integer, nullable=False)