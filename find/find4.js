var accounts = [{
        balance: -10
    },
    {
        balance: 12
    },
    {
        balance: 0
    }
];

//RETURNS THE FIRST ACCOUNT WHOSE BALANCE IS 12
var account = accounts.find(function (account) {
    return account.balance === 12;
});
console.log(account);