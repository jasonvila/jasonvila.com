""" API routes for individual model access """
# https://flask-restless.readthedocs.io/en/stable/customizing.html
from flask_restless import APIManager
# pylint: disable=import-error
import models as models


def create_api_endpoints(app):
    """ Create API endpoints available at /api/<tablename> by default """
    manager = APIManager(app, flask_sqlalchemy_db=models.database)
    manager.create_api(models.Blog, results_per_page=0)