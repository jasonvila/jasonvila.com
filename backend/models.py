from flask_sqlalchemy import SQLAlchemy

database = SQLAlchemy()


class Blog(database.Model):
    """ Candidate Model class """
    __tablename__ = "blog"
    id = database.Column(database.Integer, primary_key=True)
    title = database.Column(database.String, unique=True)
    category = database.Column(database.String)
    date = database.Column(database.String)
    Content = database.Column(database.String)

    def __repr__(self):
        return '{"Blog" : {"title": %r, "category": %r, "date": %r, "content": %r, "contact":' \
               ' %r}}' %\
               (self.title, self.title, self.category, self.date,
                self.content)
