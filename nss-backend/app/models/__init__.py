def create_db():
    from app import db
    from app.models.users import User

    db.create_all()
