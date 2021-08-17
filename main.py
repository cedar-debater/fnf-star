import flask
app = flask.Flask('app')

@app.route('/')
def index():
    return flask.render_template('index.html')
@app.route('/engine.js')
def enginejs():
    return flask.render_template('engine.js')

app.run(host='0.0.0.0', port=8080)