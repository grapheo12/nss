"""
Definition of the Flask app.
"""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from app.config import Config
from app.controllers.cdnController import cdn

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app=app)

app.register_blueprint(cdn, url_prefix="/cdn")