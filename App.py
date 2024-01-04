from quart import Quart, jsonify
from quart_cors import cors
import json
import serial
import logging

app = Quart(__name__)
app = cors(app, allow_origin="*")

json_data = {}

# Start the Quart app
@app.route('/')
async def get_json():
    with serial.Serial('/dev/pts/6', baudrate=115200) as ser:

        while True:
            data = ser.readline().decode('utf-8')
            try:
                json_data = json.loads(data)
                break
            except json.JSONDecodeError:
                logging.warning(data)
    return jsonify(json_data)

if __name__ == '__main__':
    app.run()
