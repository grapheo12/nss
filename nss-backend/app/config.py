"""
All Configs go here.
Sensitive information must be stored in Environment Vars.
"""
from os import getenv

class Config:
    SQLALCHEMY_DATABASE_URI = getenv("DB_URI")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = getenv("SECRET")