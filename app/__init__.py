import json

from flask import Flask, jsonify
from flask_cors import CORS
from flask_gdrive import GDriveStatic

app = Flask(__name__)
cors = CORS(app)

gs = GDriveStatic(app, 'credentials.json', 'token.pickle', 'site_data')
app.route("/gstatic/<fpath>")(gs.fileHandler)

@app.route("/json/<fpath>")
def jsonServer(fpath):
    result = gs.fileHandler(fpath)[0].decode()
    js = json.loads(result)

    return jsonify(js), 200

if __name__ == "__main__":
    app.run(debug=True)
