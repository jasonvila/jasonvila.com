from flask_sqlalchemy import SQLAlchemy

database = SQLAlchemy()


class Blog(database.Model):
    """ Blog Model class """
    __tablename__ = "blog"
    id = database.Column(database.Integer, primary_key=True)
    title = database.Column(database.String, unique=True)
    category = database.Column(database.String)
    date = database.Column(database.String)
    content = database.Column(database.String)

    def __repr__(self):
        return '{"Blog" : {"title": %r, "category": %r, "date": %r, "content": %r}}' %\
               (self.title, self.category, self.date, self.content)

class App(database.Model):
    """ App Model class """
    __tablename__ = "app"
    id = database.Column(database.Integer, primary_key=True)
    title = database.Column(database.String, unique=True)
    category = database.Column(database.String)
    link = database.Column(database.String)
    date = database.Column(database.String)
    content = database.Column(database.String)
    image = database.Column(database.String)

    def __repr__(self):
        return '{"App" : {"title": %r, "category": %r, "link": %r, "date": %r, "content": %r, "image": %r}}' %\
               (self.title, self.category, self.link, self.date, self.content, self.image)

class Data(database.Model):
    """ data Model class """
    __tablename__ = "data"
    id = database.Column(database.Integer, primary_key=True)
    title = database.Column(database.String, unique=True)
    category = database.Column(database.String)
    date = database.Column(database.String)
    content = database.Column(database.String)
    image = database.Column(database.String)
    size = database.Column(database.Integer)

    def __repr__(self):
        return '{"Data" : {"title": %r, "category": %r, "date": %r, "content": %r, "image": %r, "size": %r}}' %\
               (self.title, self.category, self.date, self.content, self.image, self.size)

class Misc(database.Model):
    """ Misc Model class """
    __tablename__ = "misc"
    id = database.Column(database.Integer, primary_key=True)
    title = database.Column(database.String, unique=True)
    category = database.Column(database.String)
    link = database.Column(database.String)
    date = database.Column(database.String)
    content = database.Column(database.String)
    image = database.Column(database.String)

    def __repr__(self):
        return '{"Misc" : {"title": %r, "category": %r, "link": %r, "date": %r, "content": %r, "image": %r}}' %\
               (self.title, self.category, self.link, self.date, self.content, self.image)

