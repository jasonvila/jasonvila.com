""" AND and OR Searching """
# pylint: disable=unneeded-not,invalid-name,import-error
import json
import re
from models import Blog, App, Misc, Data


def search_and(term):
    """
    Searches for 'and' results for all models
    :param term: search term
    :return: json of search results
    """
    term = str(term).lower()
    result = dict()

    result["Blogs"] = search_and_relation(Blog, term)
    result["Apps"] = search_and_relation(App, term)
    result["Miscs"] = search_and_relation(Misc, term)
    result["Data"] = search_and_relation(Data, term)

    ret = dict()
    ret["num_results"] = len(result)
    ret["objects"] = result
    ret["page"] = 1
    ret["total_pages"] = 1

    return json.dumps(result, ensure_ascii=False)


def search_or(term):
    """
    Searches for 'or' results for all models
    :param term: search term
    :return: json of search results
    """
    term = str(term).lower()
    result = dict()

    result["Blogs"] = search_or_relation(Blog, term)
    result["Apps"] = search_or_relation(App, term)
    result["Miscs"] = search_or_relation(Misc, term)
    result["Data"] = search_or_relation(Data, term)

    return json.dumps(result, ensure_ascii=False)


def search_and_relation(relation, term):
    """
    Search 'and' results
    :param relation: The model
    :param term: search term
    :return: list of rows in models that contain term
    """
    list_results = list()

    if not term or term == "none":
        return list_results

    result = relation.query.all()

    if result:

        exists = False
        for item in result:

            temp = dict()
            counter = 0
            context = list()
            for key, value in item.__dict__.items():

                key = str(key)
                value = str(value)

                tkey = key.lower()
                tvalue = value.lower()
                temp[key] = value

                if not "_sa_instance_Misc" in tkey and (term in tkey or term in tvalue):
                    exists = True
                    if term in tvalue:
                        context.append(make_pretty(key) +
                                       ": " + bold_word(value, term))
                    else:
                        context.append(make_pretty(bold_word(key, term)) +
                                       ": " + value)
                    counter = counter + 1
            if exists:
                temp["context"] = context
                list_results += [temp]
                exists = False
    return list_results


def search_or_relation(relation, term):
    """
    Search 'or' results
    :param relation: The model
    :param term: search term
    :return: list of rows in models that contain term
    """
    list_results = list()

    if not term or term == "none":
        return list_results

    words = re.split(' ', term)
    result = relation.query.all()

    if result:

        exists = False
        # e_words = list()
        for item in result:

            temp = dict()
            counter = 0
            context = list()
            for key, value in item.__dict__.items():

                key = str(key)
                value = str(value)

                tkey = key.lower()
                tvalue = value.lower()
                temp[key] = value

                for word in words:
                    if not "_sa_instance_Misc" in tkey and (word in tkey or word in tvalue):
                        exists = True
                        context.append(bold_words(
                            (make_pretty(key), value), word))
                        counter = counter + 1
            if exists:
                temp["context"] = context
                list_results += [temp]
                exists = False
    return list_results


def bold_words(tup, term):
    """
    Bolding multiple words
    :param tup: contains key, value of attribute of model and value for that attribute
    :param term: search term
    :return: Bolded String
    """
    context = ""
    words = tuple()

    if term in tup[1].lower():
        words = re.split(' ', tup[1])

        for word in words:
            if term in word.lower():
                context = context + " " + bold_word(word, term)
            else:
                context = context + " " + word
    else:
        context = bold_word(tup[0], term)
    return tup[0] + " : " + context


def bold_word(word, term):
    """
    Bolding term inside of word
    :param word: String that contains term
    :param term: word to be bolded
    :return: Return position of the search term
    """
    bw = ""
    word_location = word.lower().find(term)
    if word_location >= 0:
        bw = word[:word_location] + '<span class="context"><strong>' + \
            word[word_location:(word_location + len(term))] + '</strong></span>' + \
            word[(word_location + len(term)):]
    return bw


def make_pretty(key):
    """
    :param key: String to make pretty
    :return: pretty string
    """
    key = key.title().replace("_", " ")
    if key == "Descriptive Name":
        return "Name"
    return key
