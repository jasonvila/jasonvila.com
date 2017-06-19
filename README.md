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