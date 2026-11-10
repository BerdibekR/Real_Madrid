document.addEventListener("DOMContentLoaded", function () {

    const players = [
        {
            name: "THIBAUT COURTOIS",
            shortName: "COURTOIS",
            number: 1,
            position: "Goalkeeper",
            country: "BELGIUM",
            image: "courtois.jpg",
            stats: { matches: "347", goals: "0", assists: "2", extra: "119" },
            extraLabel: "CLEAN SHEETS"
        },
        {
            name: "ANDRIY LUNIN",
            shortName: "LUNIN",
            number: 13,
            position: "Goalkeeper",
            country: "UKRAINE",
            image: "lunin.jpg",
            stats: { matches: "76", goals: "0", assists: "0", extra: "23" },
            extraLabel: "CLEAN SHEETS"
        },
        {
            name: "RAÚL ASENCIO",
            shortName: "ASENCIO",
            number: 2,
            position: "Defender",
            country: "SPAIN",
            image: "asencio.jpg",
            stats: { matches: "74", goals: "2", assists: "0", extra: "1" },
            extraLabel: "TROPHIES"
        },
        {
            name: "ÉDER MILITÃO",
            shortName: "MILITÃO",
            number: 3,
            position: "Defender",
            country: "BRAZIL",
            image: "militao.jpg",
            stats: { matches: "190", goals: "14", assists: "4", extra: "11" },
            extraLabel: "TROPHIES"
        },
        {
            name: "DEAN HUIJSEN",
            shortName: "HUIJSEN",
            number: 4,
            position: "Defender",
            country: "SPAIN",
            image: "huijsen.jpg",
            stats: { matches: "52", goals: "2", assists: "2", extra: "0" },
            extraLabel: "TROPHIES"
        },
        {
            name: "TRENT ALEXANDER-ARNOLD",
            shortName: "TRENT",
            number: 12,
            position: "Defender",
            country: "ENGLAND",
            image: "trent.jpg",
            stats: { matches: "42", goals: "0", assists: "5", extra: "0" },
            extraLabel: "TROPHIES"
        },
        {
            name: "IBRAHIMA KONATÉ",
            shortName: "KONATÉ",
            number: 16,
            position: "Defender",
            country: "FRANCE",
            image: "konate.jpg",
            stats: { matches: "11", goals: "0", assists: "0", extra: "0" },
            extraLabel: "TROPHIES"
        },
        {
            name: "MARC CUCURELLA",
            shortName: "CUCURELLA",
            number: 17,
            position: "Defender",
            country: "SPAIN",
            image: "cucurella.jpg",
            stats: { matches: "15", goals: "0", assists: "0", extra: "0" },
            extraLabel: "TROPHIES"
        },
        {
            name: "ÁLVARO CARRERAS",
            shortName: "CARRERAS",
            number: 18,
            position: "Defender",
            country: "SPAIN",
            image: "carreras.jpg",
            stats: { matches: "44", goals: "3", assists: "3", extra: "0" },
            extraLabel: "TROPHIES"
        },
        {
            name: "ANTONIO RÜDIGER",
            shortName: "RÜDIGER",
            number: 22,
            position: "Defender",
            country: "GERMANY",
            image: "rudiger.jpg",
            stats: { matches: "179", goals: "8", assists: "0", extra: "8" },
            extraLabel: "TROPHIES"
        },
        {
            name: "FERLAND MENDY",
            shortName: "MENDY",
            number: 23,
            position: "Defender",
            country: "FRANCE",
            image: "mendy.jpg",
            stats: { matches: "202", goals: "6", assists: "5", extra: "11" },
            extraLabel: "TROPHIES"
        },
        {
            name: "DENZEL DUMFRIES",
            shortName: "DUMFRIES",
            number: 24,
            position: "Defender",
            country: "NETHERLANDS",
            image: "dumfries.jpg",
            stats: { matches: "8", goals: "0", assists: "0", extra: "0" },
            extraLabel: "TROPHIES"
        },
        {
            name: "JUDE BELLINGHAM",
            shortName: "BELLINGHAM",
            number: 5,
            position: "Midfielder",
            country: "ENGLAND",
            image: "bellingham.jpg",
            stats: { matches: "146", goals: "49", assists: "21", extra: "5" },
            extraLabel: "TROPHIES"
        },
        {
            name: "EDUARDO CAMAVINGA",
            shortName: "CAMAVINGA",
            number: 6,
            position: "Midfielder",
            country: "FRANCE",
            image: "camavinga.jpg",
            stats: { matches: "222", goals: "6", assists: "4", extra: "11" },
            extraLabel: "TROPHIES"
        },
        {
            name: "FEDERICO VALVERDE",
            shortName: "VALVERDE",
            number: 8,
            position: "Midfielder",
            country: "URUGUAY",
            image: "valverde.jpg",
            stats: { matches: "387", goals: "44", assists: "26", extra: "14" },
            extraLabel: "TROPHIES"
        },
        {
            name: "AURÉLIEN TCHOUAMÉNI",
            shortName: "TCHOUAMÉNI",
            number: 14,
            position: "Midfielder",
            country: "FRANCE",
            image: "tchouameni.jpg",
            stats: { matches: "197", goals: "7", assists: "4", extra: "8" },
            extraLabel: "TROPHIES"
        },
        {
            name: "ARDA GÜLER",
            shortName: "ARDA GÜLER",
            number: 15,
            position: "Midfielder",
            country: "TURKEY",
            image: "arda-guler.jpg",
            stats: { matches: "126", goals: "22", assists: "16", extra: "5" },
            extraLabel: "TROPHIES"
        },
        {
            name: "BERNARDO SILVA",
            shortName: "BERNARDO",
            number: 20,
            position: "Midfielder",
            country: "PORTUGAL",
            image: "bernardo-silva.jpg",
            stats: { matches: "10", goals: "0", assists: "1", extra: "0" },
            extraLabel: "TROPHIES"
        },
        {
            name: "THIAGO PITARCH",
            shortName: "THIAGO",
            number: 27,
            position: "Midfielder",
            country: "SPAIN",
            image: "thiago.jpg",
            stats: { matches: "11", goals: "0", assists: "2", extra: "0" },
            extraLabel: "TROPHIES"
        },
        {
            name: "VINÍCIUS JÚNIOR",
            shortName: "VINI JR.",
            number: 7,
            position: "Forward",
            country: "BRAZIL",
            image: "vini-jr.jpg",
            stats: { matches: "387", goals: "129", assists: "46", extra: "14" },
            extraLabel: "TROPHIES"
        },
        {
            name: "ENDRICK",
            shortName: "ENDRICK",
            number: 9,
            position: "Forward",
            country: "BRAZIL",
            image: "endrick.jpg",
            stats: { matches: "42", goals: "8", assists: "0", extra: "2" },
            extraLabel: "TROPHIES"
        },
        {
            name: "KYLIAN MBAPPÉ",
            shortName: "MBAPPÉ",
            number: 10,
            position: "Forward",
            country: "FRANCE",
            image: "mbappe.jpg",
            stats: { matches: "119", goals: "103", assists: "10", extra: "2" },
            extraLabel: "TROPHIES"
        },
        {
            name: "RODRYGO",
            shortName: "RODRYGO",
            number: 11,
            position: "Forward",
            country: "BRAZIL",
            image: "rodrygo.jpg",
            stats: { matches: "293", goals: "71", assists: "31", extra: "13" },
            extraLabel: "TROPHIES"
        },
        {
            name: "CARLOS ESPÍ",
            shortName: "C. ESPÍ",
            number: 19,
            position: "Forward",
            country: "SPAIN",
            image: "carlos-espi.jpg",
            stats: { matches: "7", goals: "2", assists: "0", extra: "0" },
            extraLabel: "TROPHIES"
        },
        {
            name: "BRAHIM DÍAZ",
            shortName: "BRAHIM",
            number: 21,
            position: "Forward",
            country: "MOROCCO",
            image: "brahim.jpg",
            stats: { matches: "163", goals: "22", assists: "15", extra: "6" },
            extraLabel: "TROPHIES"
        },
        {
            name: "YAN DIOMANDÉ",
            shortName: "DIOMANDÉ",
            number: 25,
            position: "Forward",
            country: "IVORY COAST",
            image: "diomande.jpg",
            stats: { matches: "12", goals: "3", assists: "2", extra: "0" },
            extraLabel: "TROPHIES"
        }
    ];

    const legends = [

        {
            name: "ALFREDO DI STÉFANO",
            image: "di-stefano.jpg",
            period: "1953–1964",
            era: "1950s",
            position: "FORWARD",
            apps: "396",
            goals: "308",
            bio: "The central figure of Real Madrid's first great European dynasty. Di Stéfano combined leadership, technique and an extraordinary ability to influence every part of the game.",
            achievement: "Five consecutive European Cups from 1956 to 1960. Two Ballon d'Or awards."
        },
        {
            name: "FERENC PUSKÁS",
            image: "puskas.jpg",
            period: "1958–1966",
            era: "1950s",
            position: "FORWARD",
            apps: "262",
            goals: "242",
            bio: "One of football's most remarkable goalscorers. His powerful left foot and exceptional finishing made him a defining figure of Madrid's historic European teams.",
            achievement: "Three European Cups and four Pichichi awards with Real Madrid."
        },
        {
            name: "RAÚL GONZÁLEZ",
            image: "raul.jpg",
            period: "1994–2010",
            era: "1980s",
            position: "FORWARD",
            apps: "741",
            goals: "323",
            bio: "A symbol of loyalty and leadership. Raúl captained Real Madrid through an important era and became one of the club's most recognisable figures.",
            achievement: "Three Champions League titles and six Spanish league titles."
        },
        {
            name: "IKER CASILLAS",
            image: "casillas.jpg",
            period: "1999–2015",
            era: "1980s",
            position: "GOALKEEPER",
            apps: "725",
            goals: "0",
            bio: "A legendary goalkeeper whose reflexes and leadership helped Real Madrid achieve success in Spain and Europe.",
            achievement: "Three Champions League titles and five Spanish league titles."
        },
        {
            name: "ZINEDINE ZIDANE",
            image: "zidane.jpg",
            period: "2001–2006",
            era: "2000s",
            position: "MIDFIELDER",
            apps: "155",
            goals: "49",
            bio: "A master of technique, vision and elegance. Zidane became one of the defining players of the Galácticos generation.",
            achievement: "Scored the famous winning volley in the 2002 Champions League final."
        },
        {
            name: "ROBERTO CARLOS",
            image: "roberto-carlos.jpg",
            period: "1996–2007",
            era: "1980s",
            position: "DEFENDER",
            apps: "370",
            goals: "47",
            bio: "An attacking left-back famous for explosive speed, powerful free kicks and remarkable attacking contributions.",
            achievement: "Three Champions League titles and four Spanish league titles."
        },
        {
            name: "DAVID BECKHAM",
            image: "beckham.jpg",
            period: "2003–2007",
            era: "2000s",
            position: "MIDFIELDER",
            apps: "116",
            goals: "13",
            bio: "A technically gifted midfielder known for extraordinary passing, crossing and free kicks. An important member of the Galácticos era.",
            achievement: "Won La Liga with Real Madrid in the 2006/07 season."
        },
        {
            name: "CRISTIANO RONALDO",
            image: "cristiano-ronaldo.jpg",
            period: "2009–2018",
            era: "2010s",
            position: "FORWARD",
            apps: "438",
            goals: "450",
            bio: "The greatest goalscorer in Real Madrid history. Ronaldo combined extraordinary athleticism, finishing and consistency during one of the most successful periods of the club.",
            achievement: "Four Champions League titles with Real Madrid and four Ballon d'Or awards during his Madrid career."
        },
        {
            name: "SERGIO RAMOS",
            image: "sergio-ramos.jpg",
            period: "2005–2021",
            era: "2010s",
            position: "DEFENDER",
            apps: "671",
            goals: "101",
            bio: "A legendary captain and defender known for leadership, determination and important goals in decisive matches.",
            achievement: "Four Champions League titles. Scored the famous equaliser in the 2014 final."
        },
        {
            name: "KARIM BENZEMA",
            image: "benzema.jpg",
            period: "2009–2023",
            era: "2010s",
            position: "FORWARD",
            apps: "648",
            goals: "354",
            bio: "An intelligent striker whose technical quality, creativity and finishing made him one of the most important players in modern Real Madrid history.",
            achievement: "Five Champions League titles and the 2022 Ballon d'Or."
        },
        {
            name: "MARCELO",
            image: "marcelo.jpg",
            period: "2007–2022",
            era: "2010s",
            position: "DEFENDER",
            apps: "546",
            goals: "38",
            bio: "A creative and technically gifted left-back. Marcelo became famous for his attacking runs, dribbling and contribution to the team's play.",
            achievement: "Five Champions League titles with Real Madrid."
        },
        {
            name: "LUKA MODRIĆ",
            image: "modric.jpg",
            period: "2012–2025",
            era: "2010s",
            position: "MIDFIELDER",
            apps: "597",
            goals: "43",
            bio: "A midfield maestro whose vision, passing and control of the game made him one of the most influential players of his generation.",
            achievement: "Six Champions League titles and the 2018 Ballon d'Or."
        }
    ];

    const playersGrid = document.getElementById("playersGrid");
    const legendsGrid = document.getElementById("legendsGrid");
    const searchInput = document.getElementById("playerSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const legendFilters = document.querySelectorAll(".legend-filter");
    const sortSelect = document.getElementById("playerSort");
    const playersCount = document.getElementById("playersCount");
    const noPlayersMessage = document.getElementById("noPlayersMessage");
    const modal = document.getElementById("legendModal");
    const modalBody = document.getElementById("modalBody");

    let selectedPosition = "All";
    let selectedEra = "All";
    let lastFocusedElement = null;

    function createPlayerCard(player) {

        const card = document.createElement("article");

        card.className = "player-card";

        const stats = player.stats;

        card.innerHTML = `
            <div class="player-card-inner">
                <div class="player-card-front">
                    <div class="card-top">
                        <span class="card-position">
                            ${player.position === "Goalkeeper" ? "GK" :
                player.position === "Defender" ? "DF" :
                    player.position === "Midfielder" ? "MF" : "FW"}
                        </span>

                        <span class="card-number">
                            ${player.number}
                        </span>
                    </div>

                    <div class="player-image-container">

                        <img
                            src="images/players/current/${player.image}"
                            alt="${player.name} in Real Madrid kit"
                            class="player-image"
                            loading="lazy"
                        >

                        <div class="player-image-fallback">
                            ${player.number}
                        </div>
                    </div>

                    <div class="player-card-info">
                        <h3>${player.shortName}</h3>
                        <p>${player.position.toUpperCase()}</p>
                    </div>
                </div>

                <div class="player-card-back">
                    <div class="back-number">
                        ${player.number}
                    </div>

                    <h3>${player.shortName}</h3>

                    <p class="back-position">
                        ${player.position.toUpperCase()}
                    </p>

                    <div class="player-stats">
                        <div class="player-stat">
                            <strong>${stats.matches}</strong>
                            <span>Matches</span>
                        </div>

                        <div class="player-stat">
                            <strong>${stats.goals}</strong>
                            <span>Goals</span>
                        </div>

                        <div class="player-stat">
                            <strong>${stats.assists}</strong>
                            <span>Assists</span>
                        </div>

                        <div class="player-stat">
                            <strong>${stats.extra}</strong>
                            <span>${player.extraLabel}</span>
                        </div>
                    </div>

                    <p class="player-nationality">
                        ${player.country}
                    </p>

                </div>
            </div>
        `;

        const image = card.querySelector(".player-image");

        image.addEventListener("error", function () {
            card.querySelector(".player-card-front")
                .classList.add("image-missing");
        });

        card.setAttribute(
            "aria-label",
            player.name + ", " + player.position +
            ". Hover or focus to see player statistics."
        );

        return card;

    }

    function renderPlayers() {

        let filteredPlayers = players.filter(function (player) {

            const matchesPosition =
                selectedPosition === "All" ||
                player.position === selectedPosition;

            const matchesSearch =
                player.name.toLowerCase().includes(
                    searchInput.value.toLowerCase()
                );

            return matchesPosition && matchesSearch;
        });

        const sortValue = sortSelect.value;

        if (sortValue === "number") {

            filteredPlayers.sort(function (a, b) {
                return a.number - b.number;
            });

        } else if (sortValue === "name") {

            filteredPlayers.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });

        } else if (sortValue === "position") {

            filteredPlayers.sort(function (a, b) {
                return a.position.localeCompare(b.position);
            });

        }

        playersGrid.innerHTML = "";

        filteredPlayers.forEach(function (player) {
            playersGrid.appendChild(createPlayerCard(player));
        });

        playersCount.textContent = filteredPlayers.length;

        noPlayersMessage.hidden = filteredPlayers.length !== 0;

        if (window.jQuery) {
            $("#playersGrid").hide().fadeIn(350);
        }
    }

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

            selectedPosition = this.dataset.position;

            renderPlayers();
        });
    });

    searchInput.addEventListener("input", renderPlayers);

    sortSelect.addEventListener("change", renderPlayers);

    function createLegendCard(legend, index) {

        const card = document.createElement("article");

        card.className = "legend-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute(
            "aria-label",
            "Read more about " + legend.name
        );

        const initials = legend.name
            .split(" ")
            .map(function (word) {
                return word[0];
            })
            .slice(0, 2)
            .join("");

        card.innerHTML = `
            <div class="legend-image-wrapper">

                <span class="legend-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <img
                    src="images/players/legends/${legend.image}"
                    alt="${legend.name} Real Madrid legend"
                    class="legend-image"
                    loading="lazy"
                >

                <div class="legend-image-fallback">
                    ${initials}
                </div>
            </div>

            <div class="legend-info">

                <span class="legend-era">
                    ${legend.period}
                </span>

                <h3>${legend.name}</h3>

                <p class="legend-position">
                    ${legend.position}
                </p>

                <p class="legend-bio">
                    ${legend.bio}
                </p>

                <div class="legend-achievement">
                    ${legend.achievement}
                </div>

                <span class="legend-more">
                    DISCOVER LEGEND →
                </span>
            </div>
        `;

        const image = card.querySelector(".legend-image");

        image.addEventListener("error", function () {
            card.classList.add("image-missing");
        });

        card.addEventListener("click", function () {
            openLegendModal(legend);
        });

        card.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLegendModal(legend);
            }
        });

        return card;
    }

    function renderLegends() {

        const filteredLegends = legends.filter(function (legend) {

            return selectedEra === "All" ||
                legend.era === selectedEra;
        });

        legendsGrid.innerHTML = "";

        filteredLegends.forEach(function (legend) {

            const originalIndex = legends.indexOf(legend);

            legendsGrid.appendChild(
                createLegendCard(legend, originalIndex)
            );
        });

        if (window.jQuery) {
            $("#legendsGrid").hide().fadeIn(400);
        }
    }

    legendFilters.forEach(function (button) {

        button.addEventListener("click", function () {

            legendFilters.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

            selectedEra = this.dataset.era;

            renderLegends();

        });
    });

    function openLegendModal(legend) {

        lastFocusedElement = document.activeElement;

        modalBody.innerHTML = `
            <div class="modal-layout">
                <div>
                    <img
                        src="images/players/legends/${legend.image}"
                        alt="${legend.name}"
                    >
                </div>

                <div>

                    <span class="modal-label">
                        REAL MADRID LEGEND · ${legend.period}
                    </span>

                    <h2 id="modalName">${legend.name}</h2>

                    <p class="modal-label">
                        ${legend.position}
                    </p>

                    <div class="player-stats">
                        <div class="player-stat">
                            <strong>${legend.apps}</strong>
                            <span>Matches</span>
                        </div>

                        <div class="player-stat">
                            <strong>${legend.goals}</strong>
                            <span>Goals</span>
                        </div>
                    </div>

                    <p class="modal-description">
                        ${legend.bio}
                    </p>

                    <div class="modal-achievement">
                        ${legend.achievement}
                    </div>
                </div>
            </div>
        `;

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        modal.querySelector(".modal-close").focus();

    }

    function closeLegendModal() {

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    modal.querySelectorAll("[data-close-modal]").forEach(function (button) {

        button.addEventListener("click", closeLegendModal);
    });

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && modal.classList.contains("open")) {
            closeLegendModal();
        }
    });

    renderPlayers();
    renderLegends();

    if (window.jQuery) {

        $(".players-hero-content").hide().fadeIn(1000);

        $(".player-card").on("mouseenter", function () {
            $(this).find(".player-card-inner").css(
                "transition-duration",
                "0.8s"
            );
        });
    }
});
