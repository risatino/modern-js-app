// Roster
var roster = [
    {
        name: "Doug",
        position: "Quarterback",
        madeTeam: true
    },
    {
        name: "Antonio",
        position: "Tight End",
        madeTeam: true
    },
    {
        name: "Nick",
        position: "Kicker",
        madeTeam: false
    },
    {
        name: "Ereck",
        position: "Offensive Live",
        madeTeam: false
    },
    {
        name: "AJ",
        position: "Line Backer",
        madeTeam: true
    }
];

// start of numofCuts
var numofCuts = 0;

// print team
console.log("Your team this week:");
console.log("--------------");

// loop through array
for (var i = 0; i < roster.length; i++) {
    var player = roster[i];

    // print name and position for players
    if (player.madeTeam) {
        console.log(player.position + ": " + player.name);
    }
    // Add to numofCuts counters for players not on team
    else {
        numofCuts++;
    }
}
console.log("--------------");

// Print number of players cut
console.log(numofCuts + " players got cut");


