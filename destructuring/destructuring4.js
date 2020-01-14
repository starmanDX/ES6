// function signup(username, password, email, dob, city) {
    //create new user
// };
// signup('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York');

//ES6 REFACTOR
//ARGS NO LONGER NEED TO BE IN A SPECIFIC ORDER
//IN RELATION TO THE USER OBJECT
function signup({username, password, email, dob, city}) {

};
const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@example.com',
    dob: "1/1/1990",
    city: "New York"
};
signup(user)