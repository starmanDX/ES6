const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

//ES5
// function isEngineer(profile) {
//     var title = profile.title;
//     var department = profile.department;
//     return title === 'Engineer' && department === 'Engineering';
// }
// console.log(isEngineer(profile))

//ES6 REFACTOR
function isEngineer({title, department}) {
    return title === "Engineer" && department === "Engineering";
};
console.log(isEngineer(profile));