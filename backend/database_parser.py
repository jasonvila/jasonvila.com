import json
from models import database
from models import Blog
from application import create_app

create_app().app_context().push()

BLOGS_FILE = open('blogs.json')
BLOGS_JSON = json.loads(BLOGS_FILE.read())

print ("reading file")

def fill_blogs_table():
	counter = 0
	for key in BLOGS_JSON.keys():
		counter+= 1
		print (str(key))
		temp_blog = Blog(title=BLOGS_JSON[key]['title'],category=BLOGS_JSON[key]['category'],date=BLOGS_JSON[key]['date'],content=BLOGS_JSON[key]['content'])
		database.session.add(temp_blog)
	database.session.commit()

if __name__ == "__main__":
	database.drop_all()
	database.create_all()
	fill_blogs_table();
	BLOG_QUERY = Blog.query.all()
	print("success")
	for key in BLOG_QUERY:
		print(str(key))

