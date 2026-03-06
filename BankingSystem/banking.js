class BankAccount {
    constructor(lName, fName, balance) {
        this.lastName = lName;
        this.firstName = fName;
        this.balance = balance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            return "Deposit amount must be a positive number"
        } 
        else {
            this.balance += amount
            return "Deposit of " + amount + " " + "to" + " " + this.firstName + " " + this.lastName + " successful"
        }
    }

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            return "Withdrawal amount must be a positive number"
        }
        else if (this.balance >= amount){
            this.balance -= amount
            return "Withdrawal of " + amount + " " + "from " + this.firstName + " " + this.lastName + " successful"
        } 
        else {
            return "Insufficient funds"
        }
    }

    transfer(transferTo, amount) {
        if (typeof amount !== "number" || amount <= 0) {
            return "Transfer amount must be a positive number"
        }
        else if (this.balance >= amount){
            let verify = transferTo instanceof BankAccount;
            if(! verify){
                return transferTo + "is not a valid name"
            }
            this.withdraw(amount)
            this.deposit(amount)
            return "Transfer of " + amount + " " + "from " + this.firstName + " " + this.lastName + " to " + transferTo.firstName + " " + transferTo.lastName + " successful"
        } 
        else {
            return "Insufficient funds"
        }
    }

}

class SavingsAccount extends BankAccount {
    applyBonus() {
        let bonus = this.balance * 0.05;
        this.balance += bonus;
        return "Bonus of " + bonus + " applied to " + this.firstName + " " + this.lastName + "'s account";
    }
}

class CurrentAccount extends BankAccount {
    overdraft(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            return "Overdraft amount must be a positive number"
        } 
        else {
            this.balance -= amount;
            return "Overdraft of " + amount + " applied to " + this.firstName + " " + this.lastName + "'s account";
        }
    }
}

solex = new BankAccount("Solex", "Dev", 1000)
console.log(solex.deposit(500))
console.log(solex.withdraw(200))
console.log(solex.balance)

john = new BankAccount("Doe", "John", 500)
console.log(solex.transfer(ohn, '300'))
console.log(solex.balance)
console.log(john.balance)                                                 


savings = new SavingsAccount("Smith", "Jane", 2000)
console.log(savings.applyBonus())
console.log(savings.balance)

current = new CurrentAccount("Brown", "Charlie", 1500)
console.log(current.overdraft(500))
console.log(current.balance)
console.log(current.withdraw(1050))