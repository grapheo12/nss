from flask import Blueprint
from flask import abort

from app.services.contentService import genContent

cdn = Blueprint("cdn", __name__)

@cdn.route("/<fname>")
def deliver_cdn(fname=''):
    if fname == '':
        fname = "Home"
    fname = fname.capitalize()
    
    try:
        return genContent(fname), 200
    except:
        abort(404)


