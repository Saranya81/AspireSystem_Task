 
//  // title : Javascript functions
// //Author :Saranya
// //Created date:20-03-2024
// // last modified:27-04-2024

// Array of transactions
const transactions = [
    { amount: 100, accountNumber: "1234567890" },
    { amount: 200, accountNumber: "0987654321" },
    { amount: 50, accountNumber: "1357902468" }
];

function handleTransactions(transactions) {
    // Map function 
    const processedTransactions = transactions.map(transaction => {
        console.log(`Transaction of $${transaction.amount} initiated for account ${transaction.accountNumber}`);
    
    });

    // Array length
    console.log("Number of transactions:", transactions.length);

    // Find function
    const accountNumberToFind = "0987654321";
    const foundTransaction = transactions.find(transaction => transaction.accountNumber === accountNumberToFind);

    if (foundTransaction) {
        console.log("Transaction found ");
    } else {
        console.log("Transaction not found");
    }


    // Filter
    const highAmountTransactions = transactions.filter(transaction => transaction.amount > 100);
    console.log("Transactions with amount greater than $100:", highAmountTransactions);

    // Reversing  
    const reversedTransactions = transactions.slice().reverse();
    console.log("Reversed transactions:", reversedTransactions);
}

handleTransactions(transactions);


// Callback function 
function performBankTransaction(amount, callback) {
    const success = amount > 0;
    setTimeout(() => {
        callback(success ? "success" : "failure");
    }, 2000); 
}

function transactionCallback(result) {
    if (result === "success") {
        console.log("Transaction successful!");
    } else {
        console.log("Transaction failed. Please try again later.");
    }
}
performBankTransaction(100, transactionCallback);
