
from flask import Flask
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

def create_app():
	application = Flask(__name__)
	
	application.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///jvdb'
	application.config["CORS_HEADERS"] = 'Content-Type'
	cors = CORS(application, resources={r"/api/blog": {"origins": "*"}})

	application.debug = True
	application.testing = True

	from models import database
	database.init_app(application)

	from api import create_api_endpoints
	create_api_endpoints(application)

	from views import frontend
	application.register_blueprint(frontend)

	return application

application = create_app()

if __name__ == "__main__":
	application.run()