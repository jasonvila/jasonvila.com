# jasonvila.com

Database
user = postgres
database = jvdb
database type : postgresql

sudo -i -u postgres
to switch to postgres user

psql
to interact with postgresql

\list
to list all databases

\dt
to list all tables in current database

\connect jvdb
to connect to jvdb database

postgresql:///jvdb
jvdb is database
/// is local - so we don't have to supply password
postgresql is trype

psycog - needed

use sqlalchemy to connect to postgresql

backend - python/flask_sqlalchemy application
frontend - nodejs/angular2 application

python3 - for ubuntu
python - for windows

backend apis
------------

blogs: localhost:5000/api/blog
apps: localhost:5000/api/app
data: localhost:5000/api/data
misc: localhost:5000/api/misc


to fix npm and nodejs versions - just made new droplet and reinstall everything


fix issue with npm install -- 
use 'ln -s /usr/bin/nodejs /usr/bin/node'
issue was that it was running node instead of nodejs

backend
--------
sudo apt-get install python3-pip
pip3 install flask
pip3 install flask_sqlalchemy
pip3 install flask_cors
pip3 install sortedcontainers
sudo apt-get install postgresql
su postgres
psql
create database jvdb;
\q
su root
pip3 install flask_restless


To let it continue running:
nohup npm start &
nohup python3 application.py &

to kill python3 process:
ps -fA | grep python
second number is process number.
kill numb
you'll want to kill the one that isn't process numb=1

Files on server are in /home/jasonvila.com
This is because you can't access root folder with any other user
postgres user can't access root folder, thus can't run backend in root folder, have to run in home folder.

To change ports or what can be served, change bs-config.json file.

To run frontend:
npm install
nohup npm start &

To run backend:
nohup python3 application.py &
python3 database_parser.py --> this is for inserting data in database.

postgresql is already running in background. - user is postgres.


primeng is renderer for tables, want to edit this to make your own custom

need to update blog.json - wrong data for 2016116 - needs to be 20161106

fixed whole issue with css by add ViewEncapsulation.None in @Component

changed dynamic load with just using document.getElementById and changing the innerHTML.

Need to update database.

Check why \n not showing.

using sortedcontainers.SortedDict for sorting the results.