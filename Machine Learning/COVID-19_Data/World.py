class World:
    
    def __init__(self):
        self._totalCases = 0
        self._newCases = 0
        self._totalDeaths = 0
        self._newDeaths = 0
        self._totalRecovered = 0
        self._totalCasesPer1m = 0
        self._totalPopulation = 0
        self._updateTime = ""

    @property
    def totalCases(self):
        return self._totalCases
    @totalCases.setter
    def totalCases(self, tCases):
        self._totalCases = tCases

    @property
    def newCases(self):
        return self._newCases
    @newCases.setter
    def newCases(self, nCases):
        self._newCases = nCases

    @property
    def totalDeaths(self):
        return self._totalDeaths
    @totalDeaths.setter
    def totalDeaths(self, tDeaths):
        self._totalDeaths = tDeaths

    @property
    def newDeaths(self):
        return self._newDeaths
    @newDeaths.setter
    def newDeaths(self, nDeaths):
        self._newDeaths = nDeaths

    @property
    def totalRecovered(self):
        return self._totalRecovered
    @totalRecovered.setter
    def totalRecovered(self, tRecovered):
        self._totalRecovered = tRecovered

    @property
    def totalCasesPer1m(self):
        return float(self.totalCases / (self.totalPopulation / 1000000))
    @totalCasesPer1m.setter
    def totalCasesPer1m(self, tCasesPer1m):
        self._totalCasesPer1m = tCasesPer1m

    @property
    def totalPopulation(self):
        return self._totalPopulation
    @totalPopulation.setter
    def totalPopulation(self, tPopulation):
        self._totalPopulation = tPopulation

    @property
    def updateTime(self):
        return self._updateTime
    @updateTime.setter
    def updateTime(self, uTime):
        self._updateTime = uTime

    def displayEverything(self):
        print()
        print("total_cases: "        + format(self.totalCases, ",d"))
        print("new_cases: "          + format(self.newCases, ",d"))
        print("total_deaths: "       + format(self.totalDeaths, ",d"))
        print("new_deaths: "         + format(self.newDeaths, ",d"))
        print("total_recovered: "    + format(self.totalRecovered, ",d"))
        print("total_cases_Per1m: "  + format(self.totalCasesPer1m, ",d"))
        print("total_population: "   + format(self.totalPopulation, ",d"))
        print("statistic_taken_at: " + self.updateTime)
        print()