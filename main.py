import flask
app = flask.Flask('app')

star1 = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<script>"""
with open('templates/engine.js') as engine_file:
    star2 = engine_file.read()
star3 = """</script>
<script>
document.documentElement.addEventListener('onload',engine.init);
</script>
</body>
</html>"""

@app.route('/')
def index():
    return flask.render_template('index.html')
@app.route('/engine.js')
def enginejs():
    return star2
@app.route('/favicon.ico')
def favicon():
    return flask.redirect('/static/favicon.ico')
@app.route('/download')
def download1():
    return '<a href="/star.html" download>Click this link to download FNF vs Star mod to your device</a>',200
@app.route('/star.html')
def download2():
    return ''.join([star1,star2,star3])

print(download2())

app.run(host='0.0.0.0', port=8080)