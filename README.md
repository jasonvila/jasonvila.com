# jasonvila.com

Database
-----------
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


To run without hangup
--------------------------
nohup npm start &
nohup python3 application.py &

to kill python3 process
------------------------
ps -fA | grep python3
second number is process number.
kill numb
you'll want to kill the one that isn't process numb=1

Files
-------
Files on server are in /home/jasonvila.com
This is because you can't access root folder with any other user
postgres user can't access root folder, thus can't run backend in root folder, have to run in home folder.

Changing Ports - frontend
--------------------------
To change ports or what can be served, change bs-config.json file.

To run frontend
---------------
npm install
nohup npm start &

To run backend
---------------
nohup python3 application.py &
python3 database_parser.py --> this is for inserting data in database.

Misc
------------
postgresql is already running in background. - user is postgres.

primeng is renderer for tables, want to edit this to make your own custom

fixed whole issue with css by add ViewEncapsulation.None in @Component

changed dynamic load with just using document.getElementById and changing the innerHTML.

Need to update database.

\n doesn't show up in html as new lines - just use br tag

using sortedcontainers.SortedDict for sorting the results.

to make flask public, just change application.run() to application.run(host='0.0.0.0') -- this fixes the cors issue. - also flask_cors - the cross origin can be fixed so that any website can request it.

To make Public
---------------
change bs-config.json to port 80
change application.py to run applicaiton on host='0.0.0.0'
change frontend/app/services/allServices.service.ts to from localhost urls to jasonvila.com urls.

To update database
------------------
update apps.json, data.json, miscs.json, blogs.json
run database_parser.py

To update database models
--------------------------
update models.py model classes
update database_parser.py

To add new Components
------------------------
Add new folder in components folder (named after your new component).
Create 3 files in new component folder.
new_component.component.ts file
new_component.html file
new_component.css file

Copy html, css, and ts file content from other component folders into these files
Update services/allServices.service.ts file if there are any new apis the new component needs
update app.module.ts to import, route (RouterModule), and declare (declarations) the component.

update app.js by running npm run build

To customize webpack
------------------------
entry - entry file that needs to be crawled for imports and combined into one js file.
output - the one js file being outputted to
module - the extension and the loader for that extension
resolve - the extensions to resolve with the following loaders.

To rebuild webpack
-----------------------
npm run build

To shutdown droplet
----------------------
sudo shutdown -h now