import json
from models import Blog, App, Data, Misc
from sortedcontainers import SortedDict

def getBlogs():
	blog_list = list()
	blogs = Blog.query.all()
	for blog in blogs:
		temp = dict()
		for key, value in blog.__dict__.items():
			if not "_sa_instance_state" in key:
				print ("key: " + str(key))
				print ("value: " + str(value))
				temp[key] = value
		blog_list.append(temp)
	ret = dict()
	ret["num_results"] = len(blog_list)
	ret["objects"] = sortBlogs(blog_list)
	ret["page"] = 1
	ret["total_pages"] = 1
	return json.dumps(ret)

def getBlog(id):
	blog_list = list()
	blogs = Blog.query.filter(Blog.id == id).all()
	for blog in blogs:
		temp = dict()
		for key, value in blog.__dict__.items():
			if not "_sa_instance_state" in key:
				print ("key: " + str(key))
				print ("value: " + str(value))
				temp[key] = value
		blog_list.append(temp)
	ret = dict()
	ret["num_results"] = len(blog_list)
	ret["objects"] = blog_list
	ret["page"] = 1
	ret["total_pages"] = 1
	return json.dumps(ret)

def sortBlogs(l):
	nl = list()
	temp = SortedDict()
	for e in l:
		temp[e['date']] = e
	for key in temp:
		nl.append(temp[key])
	return nl