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
	ret["objects"] = sortByDate(blog_list)
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

def sortByDate(l):
	nl = list()
	nnl = list()
	temp = SortedDict()
	for e in l:
		temp[e['date']] = e
	for key in temp:
		# nl.append(temp[key])
		nl = [temp[key]] + nl
	# for i in range(len(nl)-1, 0):
	# 	print(str(i))
		# nnl.append(nl[i])
	return nl

def getApps():
	app_list = list()
	apps = App.query.all()
	for app in apps:
		temp = dict()
		for key, value in app.__dict__.items():
			if not "_sa_instance_state" in key:
				print ("key: " + str(key))
				print ("value: " + str(value))
				temp[key] = value
		app_list.append(temp)
	ret = dict()
	ret["num_results"] = len(app_list)
	ret["objects"] = sortByDate(app_list)
	ret["page"] = 1
	ret["total_pages"] = 1
	return json.dumps(ret)

def getApp(id):
	app_list = list()
	apps = App.query.filter(App.id == id).all()
	for app in apps:
		temp = dict()
		for key, value in app.__dict__.items():
			if not "_sa_instance_state" in key:
				print ("key: " + str(key))
				print ("value: " + str(value))
				temp[key] = value
		app_list.append(temp)
	ret = dict()
	ret["num_results"] = len(app_list)
	ret["objects"] = app_list
	ret["page"] = 1
	ret["total_pages"] = 1
	return json.dumps(ret)



def getMiscs():
	misc_list = list()
	miscs = Misc.query.all()
	for misc in miscs:
		temp = dict()
		for key, value in misc.__dict__.items():
			if not "_sa_instance_state" in key:
				print ("key: " + str(key))
				print ("value: " + str(value))
				temp[key] = value
		misc_list.append(temp)
	ret = dict()
	ret["num_results"] = len(misc_list)
	ret["objects"] = sortByDate(misc_list)
	ret["page"] = 1
	ret["total_pages"] = 1
	return json.dumps(ret)

def getMisc(id):
	misc_list = list()
	miscs = Misc.query.filter(Misc.id == id).all()
	for misc in miscs:
		temp = dict()
		for key, value in misc.__dict__.items():
			if not "_sa_instance_state" in key:
				print ("key: " + str(key))
				print ("value: " + str(value))
				temp[key] = value
		misc_list.append(temp)
	ret = dict()
	ret["num_results"] = len(misc_list)
	ret["objects"] = misc_list
	ret["page"] = 1
	ret["total_pages"] = 1
	return json.dumps(ret)

def getDatas():
	data_list = list()
	datas = Data.query.all()
	for data in datas:
		temp = dict()
		for key, value in data.__dict__.items():
			if not "_sa_instance_state" in key:
				print ("key: " + str(key))
				print ("value: " + str(value))
				temp[key] = value
		data_list.append(temp)
	ret = dict()
	ret["num_results"] = len(data_list)
	ret["objects"] = sortByDate(data_list)
	ret["page"] = 1
	ret["total_pages"] = 1
	return json.dumps(ret)

def getData(id):
	data_list = list()
	datas = Data.query.filter(Data.id == id).all()
	for data in datas:
		temp = dict()
		for key, value in data.__dict__.items():
			if not "_sa_instance_state" in key:
				print ("key: " + str(key))
				print ("value: " + str(value))
				temp[key] = value
		data_list.append(temp)
	ret = dict()
	ret["num_results"] = len(data_list)
	ret["objects"] = data_list
	ret["page"] = 1
	ret["total_pages"] = 1
	return json.dumps(ret)

def getRecent():
	data = json.loads(getDatas())
	blog = json.loads(getBlogs())
	misc = json.loads(getMiscs())
	app = json.loads(getApps())

	data = data["objects"]
	blog = blog["objects"]
	misc = misc["objects"]
	app = app["objects"]

	l = list()
	if len(data) > 0:
		l.append(data[0])
	if len(blog) > 0:
		l.append(blog[0])
	if len(misc) > 0:
		l.append(misc[0])
	if len(app) > 0:
		l.append(app[0])

	ret = dict()
	ret["num_results"] = len(l)
	ret["objects"] = l
	ret["page"] = 1
	ret["total_pages"] = 1
	return json.dumps(ret)

