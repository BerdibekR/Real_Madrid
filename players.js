const players = [

    {
        number: 1,
        name: "COURTOIS",
        position: "Goalkeeper",
        short: "GK",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 13,
        name: "LUNIN",
        position: "Goalkeeper",
        short: "GK",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 2,
        name: "ASENCIO",
        position: "Defender",
        short: "DF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 3,
        name: "E. MILITAO",
        position: "Defender",
        short: "DF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 4,
        name: "HUIJSEN",
        position: "Defender",
        short: "DF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 12,
        name: "TRENT",
        position: "Defender",
        short: "DF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 16,
        name: "KONATE",
        position: "Defender",
        short: "DF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 17,
        name: "CUCURELLA",
        position: "Defender",
        short: "DF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 18,
        name: "A. CARRERAS",
        position: "Defender",
        short: "DF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 22,
        name: "RUDIGER",
        position: "Defender",
        short: "DF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 23,
        name: "F. MENDY",
        position: "Defender",
        short: "DF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 24,
        name: "DUMFRIES",
        position: "Defender",
        short: "DF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 5,
        name: "BELLINGHAM",
        position: "Midfielder",
        short: "MF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 6,
        name: "CAMAVINGA",
        position: "Midfielder",
        short: "MF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 8,
        name: "VALVERDE",
        position: "Midfielder",
        short: "MF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 14,
        name: "TCHOUAMENI",
        position: "Midfielder",
        short: "MF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 15,
        name: "ARDA GULER",
        position: "Midfielder",
        short: "MF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 20,
        name: "BERNARDO",
        position: "Midfielder",
        short: "MF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 27,
        name: "THIAGO",
        position: "Midfielder",
        short: "MF",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 7,
        name: "VINI JR.",
        position: "Forward",
        short: "FW",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 9,
        name: "ENDRICK",
        position: "Forward",
        short: "FW",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 10,
        name: "MBAPPE",
        position: "Forward",
        short: "FW",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 11,
        name: "RODRYGO",
        position: "Forward",
        short: "FW",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 19,
        name: "C. ESPI",
        position: "Forward",
        short: "FW",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 21,
        name: "BRAHIM",
        position: "Forward",
        short: "FW",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    },

    {
        number: 25,
        name: "YAN DIOMANDE",
        position: "Forward",
        short: "FW",
        matches: 0,
        goals: 0,
        assists: 0,
        value: "€0M"
    }

];

const playersContainer =
    document.getElementById(
        "players-container"
    );

const groups = [

    {
        title: "Goalkeepers",
        label: "GOALKEEPERS",
        number: "01",
        position: "Goalkeeper"
    },

    {
        title: "Defenders",
        label: "DEFENCE",
        number: "02",
        position: "Defender"
    },

    {
        title: "Midfielders",
        label: "MIDFIELD",
        number: "03",
        position: "Midfielder"
    },

    {
        title: "Forwards",
        label: "ATTACK",
        number: "04",
        position: "Forward"
    }

];

groups.forEach(group => {

    const sectionPlayers =
        players.filter(
            player =>
                player.position ===
                group.position
        );

    const heading =
        document.createElement(
            "div"
        );

    heading.className =
        "position-heading";


    heading.innerHTML = `
        <span>
            ${group.number}
        </span>
        <div>
            <p>
                ${group.label}
            </p>
            <h2>
                ${group.title}
            </h2>
        </div>
    `;

    playersContainer.appendChild(
        heading
    );

    const grid =
        document.createElement(
            "div"
        );

    grid.className =
        "players-grid";

    sectionPlayers.forEach(
        player => {

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "player-card";

            card.innerHTML = `
                <div
                    class="player-card-inner">
                    <div
                        class="player-card-front">
                        <span
                            class="player-position">
                            ${player.short}
                        </span>
                        <span
                            class="player-rating">
                            ${player.number}
                        </span>
                        <div
                            class="player-number">
                            ${String(
                                player.number
                            ).padStart(
                                2,
                               "0"
                            )
                            }
                        </div>
                        <div
                            class="player-symbol">
                            ${player.short}
                        </div>
                        <div
                            class="player-info">
                            <h3>
                                ${player.name}
                            </h3>
                            <p>
                                ${player.position}
                            </p>
                        </div>
                    </div>
                    <div
                        class="player-card-back">
                        <span
                            class="back-number">
                            ${String(
                                player.number
                            ).padStart(
                                2,
                               "0"
                            )
                            }
                        </span>
                        <h3>
                            ${player.name}
                        </h3>
                        <p>
                            ${player.position}
                        </p>
                        <div class="player-stats">
                            <div>
                                <strong>${player.matches}</strong>
                                <span>MATCHES</span>
                            </div>
                            <div>
                                <strong>${player.goals}</strong>
                                <span>GOALS</span>
                            </div>
                            <div>
                                <strong>${player.assists}</strong>
                                <span>ASSISTS</span>
                            </div>
                            <div>
                                <strong>${player.value}</strong>
                                <span>VALUE</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            grid.appendChild(card);

        }
    );

    playersContainer.appendChild(
        grid
    );

});

const tableBody =
    document.getElementById(
        "players-table"
    );


players.forEach(player => {

    const row =
        document.createElement(
            "tr"
        );

    row.innerHTML = `
        <td>
            ${player.number}
        </td>
        <td>
            ${player.name}
        </td>
        <td>
            ${player.position}
        </td>
        <td>
            Real Madrid
        </td>
        <td>
            2026/27
        </td>
    `;

    tableBody.appendChild(
        row
    );

});
