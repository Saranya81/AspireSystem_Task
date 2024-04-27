var accountBalances = new Map();
// add account
function addAccount(accountId, initialBalance) {
    if (!accountBalances.has(accountId)) {
        accountBalances.set(accountId, initialBalance);
        console.log("Account added");
    }
    else {
        console.log("Account ".concat(accountId, " already exists."));
    }
}
//  account exists or not 
function hasAccount1(accountId) {
    return accountBalances.has(accountId);
}
// delete an account
function deleteAccount(accountId) {
    if (accountBalances.has(accountId)) {
        accountBalances.delete(accountId);
        console.log("Account ".concat(accountId, " deleted."));
    }
    else {
        console.log("Account ".concat(accountId, " does not exist."));
    }
}
// Deposit money to an account
function deposit(accountId, amount) {
    if (accountBalances.has(accountId)) {
        var currentBalance = accountBalances.get(accountId) || 0; ///default=>0
        var newBalance = currentBalance + amount;
        accountBalances.set(accountId, newBalance);
        console.log("Deposited $".concat(amount, " into account ").concat(accountId, ". New balance: $").concat(newBalance));
    }
    else {
        console.log("Account ".concat(accountId, " does not exist."));
    }
}
addAccount("1234567890", 1000);
addAccount("0987654321", 500);
console.log("Account '1234567890' exist?", hasAccount1("1234567890"));
deleteAccount("1234567890");
deposit("0987654321", 300);
