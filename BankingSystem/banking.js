class BankAccount {
    constructor(lName, fName, balance) {
        this.lastName = lName;
        this.firstName = fName;
        this.balance = balance;
    }

    deposit(amount) {
            this.balance += amount
            return "Deposit of " + amount + " successful"
    }

    withdraw(amount) {
        if (this.balance >= amount){
            this.balance -= amount
            return "Withdrawal of " + amount + " successful"
        } else {
            return "Insufficient funds"
        }
    }

    // transfer(transferTo, amount) {
    //     if (this.balance >= amount){
    //         if (transferTo in )
    //     }
    // }
}

solex = new BankAccount("Solex", "John", 1000)
console.log(solex.deposit(500))
console.log(solex.withdraw(200))