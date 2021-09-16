from flask import Flask
from flask_cors import CORS
from flask_restplus import Api, Resource, reqparse

app = Flask(__name__)
CORS(app)
api = Api(app)
parser1 = reqparse.RequestParser()
parser1.add_argument("html_content", type=str)


from api.v1 import views
