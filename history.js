document.addEventListener("DOMContentLoaded", () => {

    const slider = document.getElementById("historyYearSlider");

    if (!slider) {
        console.error("History slider not found!");
        return;
    }

    const trophies = {
        championsLeague: [
            1956, 1957, 1958, 1959, 1960,
            1966, 1998, 2000, 2002, 2014,
            2016, 2017, 2018, 2022, 2024
        ],

        leagues: [
            1932, 1933, 1954, 1955, 1957, 1958,
            1961, 1962, 1963, 1964, 1965, 1967,
            1968, 1969, 1972, 1975, 1976, 1978,
            1979, 1980, 1986, 1987, 1988, 1989,
            1990, 1995, 1997, 2001, 2003, 2007,
            2008, 2012, 2017, 2020, 2022, 2024
        ],

        spanishCups: [
            1905, 1906, 1907, 1908, 1917,
            1934, 1936, 1946, 1947, 1962,
            1970, 1974, 1975, 1980, 1982,
            1989, 1993, 2011, 2014, 2023
        ],

        worldTitles: [
            1960, 1998, 2002, 2014, 2016,
            2017, 2018, 2023, 2024
        ],

        spanishSuperCups: [
            1988, 1989, 1990, 1993, 1997,
            2001, 2003, 2008, 2012, 2017,
            2020, 2022, 2024
        ],

        europeanSuperCups: [
            2002, 2014, 2016, 2017, 2022, 2024
        ],

        uefaCups: [
            1985, 1986
        ]
    };


    function countTrophies(year, competition) {
        return competition.filter(date => date <= year).length;
    }


    function updateNumber(id, value) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value;
        } else {
            console.error("Element not found:", id);
        }
    }


    function updateProgress(id, count, maximum) {
        const element = document.getElementById(id);

        if (element) {
            const percentage = (count / maximum) * 100;
            element.style.width = percentage + "%";
        } else {
            console.error("Progress bar not found:", id);
        }
    }


    function updateHistory(year) {

        const champions = countTrophies(year, trophies.championsLeague);
        const leagues = countTrophies(year, trophies.leagues);
        const spanishCups = countTrophies(year, trophies.spanishCups);
        const world = countTrophies(year, trophies.worldTitles);
        const spanishSuper = countTrophies(year, trophies.spanishSuperCups);
        const europeanSuper = countTrophies(year, trophies.europeanSuperCups);
        const uefa = countTrophies(year, trophies.uefaCups);

        updateNumber("selectedYear", year);

        updateNumber("uclCount", champions);
        updateNumber("leagueCount", leagues);
        updateNumber("spanishCupCount", spanishCups);
        updateNumber("worldCount", world);
        updateNumber("spanishSuperCount", spanishSuper);
        updateNumber("europeanSuperCount", europeanSuper);
        updateNumber("uefaCount", uefa);

        updateProgress("uclProgress", champions, 15);
        updateProgress("leagueProgress", leagues, 36);
        updateProgress("spanishCupProgress", spanishCups, 20);
        updateProgress("worldProgress", world, 9);
        updateProgress("spanishSuperProgress", spanishSuper, 13);
        updateProgress("europeanSuperProgress", europeanSuper, 6);
        updateProgress("uefaProgress", uefa, 2);

        const min = Number(slider.min);
        const max = Number(slider.max);

        const percentage =
            ((year - min) / (max - min)) * 100;

        slider.style.background =
            `linear-gradient(to right, #d4af37 ${percentage}%, #263651 ${percentage}%)`;

    }

    slider.min = 1902;
    slider.max = 2026;
    slider.value = 2024;

    slider.addEventListener("input", () => {
        updateHistory(Number(slider.value));
    });

    slider.addEventListener("change", () => {
        updateHistory(Number(slider.value));
    });

    updateHistory(Number(slider.value));

    console.log("Real Madrid Trophy Statistics initialized!");

});
