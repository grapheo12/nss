from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

def create_db():
    from app.models.users import User

    db.create_all()
