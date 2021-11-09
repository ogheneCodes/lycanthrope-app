//Authour: Oghenemaga Maxwell
// Journal of daily events over a 90 day period and this 
//data was retrieved from https://eloquentjavascript.net/code/journal.js

var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"werewolf":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"werewolf":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"werewolf":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"werewolf":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"werewolf":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"werewolf":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"werewolf":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"werewolf":false},
    {"events":["cauliflower","brushed teeth","work"],"werewolf":false},
    {"events":["pizza","brushed teeth","cycling","work"],"werewolf":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"werewolf":false},
    {"events":["brushed teeth","weekend","touched tree"],"werewolf":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"werewolf":false},
    {"events":["spaghetti","brushed teeth","work"],"werewolf":false},
    {"events":["brushed teeth","computer","work"],"werewolf":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"werewolf":false},
    {"events":["carrot","brushed teeth","running","work"],"werewolf":false},
    {"events":["brushed teeth","work"],"werewolf":false},
    {"events":["cauliflower","reading","weekend"],"werewolf":false},
    {"events":["bread","brushed teeth","weekend"],"werewolf":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"werewolf":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"werewolf":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"werewolf":false},
    {"events":["spaghetti","nachos","work"],"werewolf":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"werewolf":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"werewolf":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"werewolf":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"werewolf":false},
    {"events":["peanuts","brushed teeth","running","work"],"werewolf":false},
    {"events":["potatoes","exercise","work"],"werewolf":false},
    {"events":["pizza","ice cream","computer","work"],"werewolf":false},
    {"events":["lasagna","ice cream","work"],"werewolf":false},
    {"events":["cauliflower","candy","reading","weekend"],"werewolf":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"werewolf":false},
    {"events":["potatoes","brushed teeth","work"],"werewolf":false},
    {"events":["carrot","work"],"werewolf":false},
    {"events":["pizza","beer","work","dentist"],"werewolf":false},
    {"events":["lasagna","pudding","cycling","work"],"werewolf":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"werewolf":false},
    {"events":["spaghetti","pudding","television","weekend"],"werewolf":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"werewolf":false},
    {"events":["lasagna","peanuts","work"],"werewolf":true},
    {"events":["pizza","work"],"werewolf":false},
    {"events":["potatoes","exercise","work"],"werewolf":false},
    {"events":["brushed teeth","exercise","work"],"werewolf":false},
    {"events":["spaghetti","brushed teeth","television","work"],"werewolf":false},
    {"events":["pizza","cycling","weekend"],"werewolf":false},
    {"events":["carrot","brushed teeth","weekend"],"werewolf":false},
    {"events":["carrot","beer","brushed teeth","work"],"werewolf":false},
    {"events":["pizza","peanuts","candy","work"],"werewolf":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"werewolf":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"werewolf":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"werewolf":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"werewolf":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"werewolf":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"werewolf":false},
    {"events":["lettuce","brushed teeth","television","work"],"werewolf":false},
    {"events":["potatoes","brushed teeth","computer","work"],"werewolf":false},
    {"events":["bread","candy","work"],"werewolf":false},
    {"events":["potatoes","nachos","work"],"werewolf":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"werewolf":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"werewolf":false},
    {"events":["brussel sprouts","running","work"],"werewolf":false},
    {"events":["brushed teeth","work"],"werewolf":false},
    {"events":["lettuce","brushed teeth","running","work"],"werewolf":false},
    {"events":["candy","brushed teeth","work"],"werewolf":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"werewolf":false},
    {"events":["bread","brushed teeth","weekend"],"werewolf":false},
    {"events":["cauliflower","brushed teeth","weekend"],"werewolf":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"werewolf":false},
    {"events":["carrot","pudding","brushed teeth","work"],"werewolf":false},
    {"events":["lettuce","brushed teeth","work"],"werewolf":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"werewolf":false},
    {"events":["pizza","brushed teeth","work"],"werewolf":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"werewolf":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"werewolf":false},
    {"events":["brushed teeth","running","work"],"werewolf":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"werewolf":false},
    {"events":["lasagna","brushed teeth","television","work"],"werewolf":false},
    {"events":["cauliflower","brushed teeth","running","work"],"werewolf":false},
    {"events":["carrot","brushed teeth","running","work"],"werewolf":false},
    {"events":["carrot","reading","weekend"],"werewolf":false},
    {"events":["carrot","peanuts","reading","weekend"],"werewolf":true},
    {"events":["potatoes","brushed teeth","running","work"],"werewolf":false},
    {"events":["lasagna","ice cream","work","touched tree"],"werewolf":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"werewolf":false},
    {"events":["pizza","brushed teeth","running","work"],"werewolf":false},
    {"events":["lettuce","brushed teeth","work"],"werewolf":false},
    {"events":["bread","brushed teeth","television","weekend"],"werewolf":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"werewolf":false}
];


// function to calculate correlation of events to a positive for transformation, phi as stated in eloquent js book chapter 4
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
}


// function to extract values from JOURNAL to calculate correlation between events computed
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.werewolf) index += 2;
        table[index] += 1;
    }
    return table;
}


// function to create an array of events from JOURNAL
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}


// Printing out correlation values for each of maxwell events
for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

console.log("");


// filtering event correlation values above and below a certain number, to identify events with the highest and lowest correlation values
for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}

console.log("");

// Adding a my new event to each entry that satisfies the most correlating events: eating peanuts and not brushing my teeth
for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}



// calculating the correlation value for times those two events occured in the same day
let value = (phi(tableFor("peanut teeth", JOURNAL)));


// Logging the correlation value
console.log(value + "\n");


// Logging the interpretation of the results
if (value === 1) {
  console.log("A correlation value of 1 means that Maxwell turn into a werewolf on the days when he eats peanut and don't brush his teeth.");
}