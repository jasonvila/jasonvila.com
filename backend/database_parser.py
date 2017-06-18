import json
from models import database
from models import Blog
from application import create_app

create_app().app_context().push()

database.drop_all()
database.create_all()

BLOGS_FILE = open('blogs.json')
BLOGS_JSON = json.loads(BLOGS_FILE.read())

def fill_blogs_table():
	counter = 0
	for key in BLOGS_JSON.keys():
		counter+= 1
		# temp_blog = Blog()