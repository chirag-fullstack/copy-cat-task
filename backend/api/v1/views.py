from flask_restplus import Resource
from api.html_proccessor import FindDuplicate
from . import app, parser1, api
from xml.etree.ElementTree import ParseError


@api.route("/copycat")
class CopyCat(Resource):
    @api.expect(parser1)
    def post(self):
        try:
            args = parser1.parse_args()
            html_data = args["html_content"]
            obj = FindDuplicate(html_data)
            return {"data": obj.find_duplicate()}, 200
        except ParseError:
            print("catastrophic failure")
