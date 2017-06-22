import re
import sys
import json
from flask import Blueprint, send_from_directory, request
from flask_cors import CORS, cross_origin
import query

frontend = Blueprint('frontend', __name__)

# APIS
@frontend.route('/api/blog')
@cross_origin('*', headers=['Content-Type','Authorization'])
def getBlogs(path=""):
	# print(Blog.query.all())
	# return json.dumps(Blog.query.all())
	return query.getBlogs()

@frontend.route('/api/blog/<path:path>')
def getBlog(path=""):
	return query.getBlog(path)




# @frontend.route('/')
# def getIndexHTML(path=""):
# 	return send_from_directory('./', 'index.html')



# All files for specific extensions.

# @frontend.route('/<path:path>')
# def getResources(path=""):
# 	if ".css" in path or ".js" in path or ".html" in path or ".map" in path:
# 		return send_from_directory('./', path)

# All files

# @frontend.route('/<path:path>')
# def getResources(path=""):
# 	print("path: " + path, file=sys.stderr)
# 	if "about" == path:
# 		return send_from_directory('./','index.html')
# 	elif "blog" == path:
# 		return send_from_directory('./','index.html')
# 	elif "apps" == path:
# 		return send_from_directory('./','index.html')
# 	elif "data" == path:
# 		return send_from_directory('./','index.html')
# 	elif "misc" == path:
# 		return send_from_directory('./','index.html')
# 	else:
# 		return send_from_directory('./', path)

# @frontend.route('/about')
# def getAboutHTML(path=""):
# 	return send_from_directory('./app/components/about/','index.html')

# @frontend.route('/blog')
# def getBlogHTML(path=""):
# 	return send_from_directory('./app/components/blog/','index.html')

# @frontend.route('/apps')
# def getAppsHTML(path=""):
# 	return send_from_directory('./app/components/apps/','index.html')

# @frontend.route('/data')
# def getDataHTML(path=""):
# 	return send_from_directory('./app/components/data/','index.html')

# @frontend.route('/misc')
# def getMiscHTML(path=""):
# 	return send_from_directory('./app/components/misc/','index.html')

# @frontend.route('/app/main.js')
# def getMainJS(path=""):
# 	print("path: " + path, file=sys.stderr)
# 	return send_from_directory('./app/', 'main.js')

# @frontend.route('/app/<path:path>')
# def getDependencies(path=""):
# 	print("path: " + path, file=sys.stderr)
# 	if ".css" in path or ".js" in path or ".html" in path or ".map" in path:
# 		mylist = re.split('/', path)
# 		path = ""
# 		for s in mylist:
# 			if ".css" not in s and ".js" not in s and ".html" not in s and ".map" not in s:
# 				path = path + "/" + s
# 		print("directory: " + path, file=sys.stderr)
# 		if path:
# 			return send_from_directory('/app/' + path + '/',mylist[len(mylist)-1])
# 		return send_from_directory('/app/', mylist[len(mylist)-1])
# 	return send_from_directory('./','index.html')

# @frontend.route('/node_modules/<path:path>')
# def getNMDependencies(path=""):
# 	print("path: " + path, file=sys.stderr)
# 	return send_from_directory('./node_modules/', path);

# @frontend.route('/systemjs.config.js')
# def send_systemconfig():
#     """
#     Angular import mappings
#     """
#     return send_from_directory('.', 'systemjs.config.js')
