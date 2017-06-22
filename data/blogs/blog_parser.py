
import json
import os
from os import listdir
from os.path import isfile, join

p = os.path.dirname(os.path.abspath(__file__))
onlyfiles = [f for f in listdir(p) if isfile(join(p, f))]

print(onlyfiles)

l = {}

for filename in onlyfiles:
	
	if not (filename == "blog_parser.py" or filename == "blogs.json" or filename == "2014-3-3-Hello-World.txt"):
		
		with open(filename) as f:
			content = f.readlines()

		content = [x.strip() for x in content] 

		# print(content)
		
		date = filename.split("-")
		date = (date[0] + date[1] + date[2])
		
		print("date : " + date)
		
		y = {}

		title = content[2].split(":")[1].strip()

		y["title"] = title

		print ("title : " + title)

		category = content[4].split(':')[1].strip()

		print ("category : " + category)

		y['category'] = category
		y['date'] = date

		c = ""

		for x in range(len(content)): 
			if x > 6:
				c = c + content[x-1] + "<br/>"

		# print ("content : " + c)

		y['content'] = c

		l[y["title"]] = y


		# print (y)

dest = open("blogs.json", "w")
json.dump(l, dest)
dest.close()
