// Set
const accountNumbers = new Set<string>();

function openAccount(accountNumber: string): void {
    if (!accountNumbers.has(accountNumber)) {
        accountNumbers.add(accountNumber);
        console.log(`New account opened: ${accountNumber}`);
    } else {
        console.log(`Account ${accountNumber} already exists.`);
    }
}

function hasAccount(accountNumber: string): boolean {
    return accountNumbers.has(accountNumber);
}


openAccount("1234567890");
openAccount("0987654321");
openAccount("1357902468");

// set size
console.log("Number of accounts:", accountNumbers.size);

// creation duplicate account|| Set does not allow duplicates
openAccount("1234567890");

// check if exist
console.log("Account '1234567890' exist?", hasAccount("1234567890"));

//clear method
accountNumbers.clear();
console.log("All accounts cleared.");
