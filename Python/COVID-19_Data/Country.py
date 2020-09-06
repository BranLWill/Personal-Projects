class Country:
    
    def __init__(self):
        self._placement = 0
        self._name = ""
        self._totalCases = 0
        self._newCases = 0
        self._activeCases = 0
        self._totalDeaths = 0
        self._newDeaths = 0
        self._totalRecovered = 0
        self._seriousCritical = 0
        self._totalCasesPer1m = 0
        self._totalPopulation = 0

    @property
    def placement(self):
        return self._placement
    @placement.setter
    def placement(self, placement):
        self._placement = placement

    @property
    def name(self):
        return self._name
    @name.setter
    def name(self, name):
        self._name = name

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
    def activeCases(self):
        return self._activeCases
    @activeCases.setter
    def activeCases(self, aCases):
        self._activeCases = aCases

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
    def seriousCritical(self):
        return self._seriousCritical
    @seriousCritical.setter
    def seriousCritical(self, sCritical):
        self._seriousCritical = sCritical

    @property
    def totalCasesPer1m(self):
        return self._totalCasesPer1m
    @totalCasesPer1m.setter
    def totalCasesPer1m(self, tCasesPer1m):
        self._totalCasesPer1m = tCasesPer1m

    @property
    def totalPopulation(self):
        if self.totalCasesPer1m != 0:
            return int(self.totalCases / self.totalCasesPer1m * 1000000)
        else:
            return 0
    @totalPopulation.setter
    def totalPopulation(self, tPopulation):
        self._totalPopulation = tPopulation

    def displayEverything(self):
        print()
        print("# "                  + format(self.placement, ",d"))
        print("country_name: "      + self.name)
        print("total_cases: "       + format(self.totalCases, ",d"))
        print("new_cases: "         + format(self.newCases, ",d"))
        print("active_cases: "      + format(self.activeCases, ",d"))
        print("total_deaths: "      + format(self.totalDeaths, ",d"))
        print("new_deaths: "        + format(self.newDeaths, ",d"))
        print("total_recovered: "   + format(self.totalRecovered, ",d"))
        print("serious_critical: "  + format(self.seriousCritical, ",d"))
        print("total_cases_per1m: " + format(self.totalCasesPer1m, ",d"))
        print("total_population: "  + format(self.totalPopulation, ",d"))
        print()