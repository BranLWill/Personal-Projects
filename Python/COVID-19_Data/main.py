import requests
import simplejson
import pandas as pd

from matplotlib import pyplot as plt
from Country import *
from World import *

listOfContries = list()
listOfWorldStats = list()

apiFile = ""

def getWorldStats(url, headers):
    global apiFile
    
    apiFile = "/worldstat.php"
    url += apiFile
    return getInfoByApi(url, headers)

def getCasesByCountry(url, headers, keyword=""):
    global apiFile

    if keyword != "":
        querystring = {"country":keyword}
        apiFile = "/latest_stat_by_country.php"
        url += apiFile
        return getInfoByApi(url, headers, querystring)
    else:
        apiFile = "/cases_by_country.php"
        url += apiFile
        return getInfoByApi(url, headers)

def getInfoByApi(url, headers, querystring=""):
    if querystring != "":
        return requests.request("GET", url, headers=headers, params=querystring)
    else:
        return requests.request("GET", url, headers=headers)

def checkIfList(item):
    if isinstance(item, list):
        return True
    else:
        return False

def checkIfDict(item):
    if isinstance(item, dict):
        return True
    else:
        return False

def checkIfNone(item):
    if item is None:
        return True
    else:
        return False

def read_data_from_web(dataType="", searchWord=""):
    baseUrl = "https://coronavirus-monitor.p.rapidapi.com/coronavirus"

    headers = {
        'x-rapidapi-host': "coronavirus-monitor.p.rapidapi.com",
        'x-rapidapi-key': "c5e6c3e48bmsh38f1b230ce2f5a4p1010dcjsn727300b7296a"
        }

    if dataType == "world":
        data = simplejson.loads(getWorldStats(baseUrl, headers).text)
    elif dataType == "country":
        data = simplejson.loads(getCasesByCountry(baseUrl, headers, searchWord).text)

    return data

def getCountryObj(data, placeNum):
    global apiFile
    country = Country()

    if apiFile == "/latest_stat_by_country.php":
        country.placement = placeNum
        country.name = data["country_name"]
        country.totalCases = int(data["total_cases"].replace(',', ''))
        country.newCases = int(data["new_cases"].replace(',', ''))
        country.activeCases = int(data["active_cases"].replace(',', ''))
        country.totalDeaths = int(data["total_deaths"].replace(',', ''))
        country.newDeaths = int(data["new_deaths"].replace(',', ''))
        country.totalRecovered = int(data["total_recovered"].replace(',', ''))
        country.seriousCritical = int(data["serious_critical"].replace(',', ''))
        country.totalCasesPer1m = int(float(data["total_cases_per1m"].replace(',', '')))
    elif apiFile == "/cases_by_country.php":
        country.placement = placeNum
        country.name = data["country_name"]
        country.totalCases = int(data["cases"].replace(',', ''))
        country.newCases = int(data["new_cases"].replace(',', ''))
        country.activeCases = int(data["active_cases"].replace(',', ''))
        country.totalDeaths = int(data["deaths"].replace(',', ''))
        country.newDeaths = int(data["new_deaths"].replace(',', ''))
        country.totalRecovered = int(data["total_recovered"].replace(',', ''))
        country.seriousCritical = int(data["serious_critical"].replace(',', ''))
        country.totalCasesPer1m = int(float(data["total_cases_per_1m_population"].replace(',', '')))

    return country

def getWorldObj(data):
    world = World()

    world.totalCases = int(data["total_cases"].replace(',', ''))
    world.newCases = int(data["new_cases"].replace(',', ''))
    world.totalDeaths = int(data["total_deaths"].replace(',', ''))
    world.newDeaths = int(data["new_deaths"].replace(',', ''))
    world.totalRecovered = int(data["total_recovered"].replace(',', ''))
    world.updateTime = data["statistic_taken_at"]
    world.totalPopulation = 7774201000

    return world

def getListOfObjs(data, func, numOfItems = 0, searchWord = ""):
    list = []
    listOfVals = []

    for value in data.values():
        if checkIfList(value):
            if numOfItems == 0 or len(value) == 1:
                numOfItems = len(value)
                listOfVals = value
            else:
                listOfVals = value

    if numOfItems == 0:
        for value in data.values():
            if checkIfList(value):
                numOfItems = len(value)
                listOfVals = value

    for i in range(numOfItems):
        obj = func(listOfVals[i], i+1)
        list.append(obj)

    if not list and numOfItems == 0:
        if checkIfDict(data):
            obj = func(data)
            list.append(obj)

    return list

def printEverythingFromList(objs):
    for item in objs:
        item.displayEverything()

def main():
    data = getListOfObjs(read_data_from_web("world"), getWorldObj)
    printEverythingFromList(data)

    # listOfContries = getListOfObjs(read_data_from_web("country"), getCountryObj, 10)
    # printEverythingFromList(listOfContries)

if __name__ == "__main__":
    main()