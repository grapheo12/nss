"""
Definition of the Flask app.
"""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from app.config import Config
from app.controllers.cdnController import cdn
from app.controllers.userController import user
from app.models import db
from app.services.authService import login_manager
from app.services.authService import bcrypt

app = Flask(__name__)
app.config.from_object(Config)
login_manager.init_app(app)
bcrypt.init_app(app)
db.init_app(app)

app.register_blueprint(cdn, url_prefix="/cdn")
app.register_blueprint(user, url_prefix="/user")