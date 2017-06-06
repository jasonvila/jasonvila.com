
from flask import Flask

def create_app():
	app = Flask(__name__)
	
	app.debug = True
	app.testing = True

	# from app.api import create_api_endpoints
	# create_api_endpoints(app)

	from app.views import frontend
	app.register_blueprint(frontend)

	return app

application = create_app()

if __name__ == "__main__":
	application.run()