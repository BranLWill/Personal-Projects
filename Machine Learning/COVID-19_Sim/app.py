import requests
import simplejson

baseUrl = "https://coronavirus-monitor.p.rapidapi.com/coronavirus"

headers = {
    'x-rapidapi-host': "coronavirus-monitor.p.rapidapi.com",
    'x-rapidapi-key': "c5e6c3e48bmsh38f1b230ce2f5a4p1010dcjsn727300b7296a"
    }

def getWorldStats(url, headers):
    url += "/worldstat.php"
    return getInfoByApi(url, headers)

def getCasesByCountry(url, headers, keyword=""):
    if keyword != "":
        querystring = {"country":keyword}
        url += "/latest_stat_by_country.php"
        return getInfoByApi(url, headers, querystring)
    else:
        url += "/cases_by_country.php"
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

def printAllDataInDict(data, searchType="", keyword=""):
    if checkIfDict(data):
        for key, value in data.items():
            if checkIfList(value):
                for item in value:
                    if checkIfDict(item):
                        if searchType != "" and keyword != "":
                            if item[searchType] == keyword:
                                printAllDataInDict(item, searchType, keyword)
                        else:
                            printAllDataInDict(item)
                    else:
                        break
            elif data.get(searchType) and keyword == "":
                print(searchType + ": " + data.get(searchType))
                break
            else:
                if not checkIfNone(value):
                    print(key + ": " + value)

        print()
    else:
        print("Error: Data passed in is not in a Dictionary form!")

worldStats = simplejson.loads(getWorldStats(baseUrl, headers).text)
casesByCountry = simplejson.loads(getCasesByCountry(baseUrl, headers, "USA").text)

print()
printAllDataInDict(worldStats)
# printAllDataInDict(casesByCountry, "USA")