from flask_bcrypt import Bcrypt
from flask_login import LoginManager

bcrypt = Bcrypt()
login_manager = LoginManager()

@login_manager.user_loader
def get_user_by_id(user_id):
    return User.query.filter_by(id=user_id).first()

def auth_user(username, pwd):
    try:
        user = User.query.filter_by(username=username).first()
        assert bcrypt.check_password_hash(user.password, pwd)
        return user
    except:
        return None

def register_user(username, pwd, level):
    try:
        from app.models.users import User
        u = User(username, pwd, level)
        return u
    except:
        return None

