//ITERATING OVER PARTICULAR PARTS OF AN OBJECT
const testingTeam = {
    lead: "Amanda",
    tester: "Bill",
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
}

//ITERATES THROUGH THE ENGINEERING TEAM
//THEN THROUGH THE TESTING TEAM
const engineeringTeam = {
    testingTeam,
    size: 3,
    department: "Engineering",
    lead: "Jill",
    manager: "Alex",
    engineer: "Dave",
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

const names = [];
for(let name of engineeringTeam) {
    names.push(name);
};
console.log(names);