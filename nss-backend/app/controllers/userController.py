from flask import Blueprint
from flask import abort
from flask import request
from flask import current_app
from flask_login import login_required, login_user, logout_user, current_user
from app.services.authService import auth_user, register_user
user = Blueprint("user", __name__)

@user.route("/register", methods=['POST'])
def reg_user():
    print(request.json)
    if current_app._get_current_object().config['REG_KEY'] == request.json['data']['entry']:
        if register_user(request.json['data']['username'], 
                    request.json['data']['password'],
                    request.json['data']['level']) is not None:
                    return "User registered", 201
        else:
            abort(403)
    else:
        abort(403)

@user.route("/login")
def loginUser():
    username = request.args.get('username')
    pwd = request.args.get('pwd')

    user = auth_user(username, pwd)

    if user is not None:
        login_user(user)
        return "Logged In", 201
    else:
        abort(403)