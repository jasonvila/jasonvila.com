import json
from models import database
from models import Blog, App, Data, Misc
from application import create_app

create_app().app_context().push()

database.drop_all()
database.create_all()

BLOGS_FILE = open('blogs.json')
BLOGS_JSON = json.loads(BLOGS_FILE.read())
APPS_FILE = open('apps.json')
APPS_JSON = json.loads(APPS_FILE.read())
DATA_FILE = open('data.json')
DATA_JSON = json.loads(DATA_FILE.read())
MISCS_FILE = open('miscs.json')
MISCS_JSON = json.loads(MISCS_FILE.read())

print ("reading file")

def fill_blogs_table():
	counter = 0
	for key in BLOGS_JSON.keys():
		counter+= 1
		print (str(key))
		temp_blog = Blog(title=BLOGS_JSON[key]['title'],category=BLOGS_JSON[key]['category'],date=BLOGS_JSON[key]['date'],content=BLOGS_JSON[key]['content'])
		database.session.add(temp_blog)
	database.session.commit()

def fill_apps_table():
	counter = 0
	for key in APPS_JSON.keys():
		counter+= 1
		print (str(key))
		temp_app = App(title=APPS_JSON[key]['title'],link=APPS_JSON[key]['link'],date=APPS_JSON[key]['date'],content=APPS_JSON[key]['content'],image=APPS_JSON[key]['image'])
		database.session.add(temp_app)
	database.session.commit()

def fill_data_table():
    counter = 0
    for key in DATA_JSON.keys():
        counter+= 1
        print (str(key))
        temp_data = Data(title=DATA_JSON[key]['title'],category=DATA_JSON[key]['category'],date=DATA_JSON[key]['date'],content=DATA_JSON[key]['content'],image=DATA_JSON[key]['image'],size=DATA_JSON[key]['size'])
        database.session.add(temp_data)
    database.session.commit()


def fill_miscs_table():
    counter = 0
    for key in MISCS_JSON.keys():
        counter+= 1
        print (str(key))
        temp_misc = Misc(title=MISCS_JSON[key]['title'],link=MISCS_JSON[key]['link'],date=MISCS_JSON[key]['date'],content=MISCS_JSON[key]['content'],image=MISCS_JSON[key]['image'])
        database.session.add(temp_misc)
    database.session.commit()

if __name__ == "__main__":
	fill_blogs_table()
	fill_apps_table()
	fill_data_table()
	fill_miscs_table()

	BLOG_QUERY = Blog.query.all()

	for key in BLOG_QUERY:
		print(str(key))

	APP_QUERY = App.query.all()

	for key in APP_QUERY:
		print(str(key))

	DATA_QUERY = Data.query.all()

	for key in DATA_QUERY:
		print(str(key))

	MISC_QUERY = Misc.query.all()

	for key in MISC_QUERY:
		print(str(key))

	print("success")


