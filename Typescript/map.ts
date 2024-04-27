
const accountBalances = new Map<string, number>();

// add account
function addAccount(accountId: string, initialBalance: number): void {
    if (!accountBalances.has(accountId)) {
        accountBalances.set(accountId, initialBalance);
        console.log("Account added");
    } else {
        console.log(`Account ${accountId} already exists.`);
    }
}

//  account exists or not 
function hasAccount1(accountId: string): boolean {
    return accountBalances.has(accountId);
}

// delete an account
function deleteAccount(accountId: string): void {
    if (accountBalances.has(accountId)) {
        accountBalances.delete(accountId);
        console.log(`Account ${accountId} deleted.`);
    } else {
        console.log(`Account ${accountId} does not exist.`);
    }
}

// Deposit money to an account
function deposit(accountId: string, amount: number): void {
    if (accountBalances.has(accountId)) {
        const currentBalance = accountBalances.get(accountId) || 0;  ///default=>0
        const newBalance = currentBalance + amount; 
        accountBalances.set(accountId, newBalance); 
        console.log(`Deposited $${amount} into account ${accountId}. New balance: $${newBalance}`);
    } else {
        console.log(`Account ${accountId} does not exist.`);
    }
}
addAccount("1234567890", 1000);
addAccount("0987654321", 500);
console.log("Account '1234567890' exist?", hasAccount1("1234567890"));
deleteAccount("1234567890")
deposit("0987654321", 300);

