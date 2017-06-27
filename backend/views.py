import re
import sys
import json
from flask import Blueprint, send_from_directory, request
from flask_cors import CORS, cross_origin
import query

frontend = Blueprint('frontend', __name__)

# APIS
@frontend.route('/api/blog')
# @cross_origin('*', headers=['Content-Type','Authorization'])
def getBlogs(path=""):
	return query.getBlogs()

@frontend.route('/api/blog/<path:path>')
def getBlog(path=""):
	return query.getBlog(path)

@frontend.route('/api/app')
def getApps(path=""):
	return query.getApps()

@frontend.route('/api/app/<path:path>')
def getApp(path=""):
	return query.getApp(path)

@frontend.route('/api/misc')
def getMiscs(path=""):
	return query.getMiscs()

@frontend.route('/api/misc/<path:path>')
def getMisc(path=""):
	return query.getMisc(path)

@frontend.route('/api/data')
def getDatas(path=""):
	return query.getDatas()

@frontend.route('/api/data/<path:path>')
def getData(path=""):
	return query.getData(path)

@frontend.route('/api/recent')
def getRecent(path=""):
	return query.getRecent()
	