from flask import Flask, render_template, url_for, jsonify
from flask_socketio import SocketIO
import geojson
import json
import pandas as pd

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/curloc')
def get_cur_loc():
    data = {}
    try:
        df = pd.read_csv('https://s3.amazonaws.com/halfmarathon/current_loc', delimiter='|', names=['lat', 'lon', 'time'])
        lat = df.lat.tolist()[0]
        lon = df.lon.tolist()[0]
        point = geojson.Point((lon, lat))
        data = json.loads(str(point))
        data = {"geometry": data, "type": "Feature", "properties": {}}
    except Exception as e:
        pass
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

