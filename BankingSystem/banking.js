class BankAccount {
    alltransactions = []
    constructor(lName, fName, balance) {
        this.lastName = lName;
        this.firstName = fName;
        this.balance = balance;
        this.overdraftlimit = this.balance * 0.5;
        this.bonus = this.balance * 0.05;
    }

    // overdraftlimit = this.balance * 0.5;
    // bonus = this.balance * 0.05;

    // deposit(amount) {
    //     if (typeof amount !== "number" || amount <= 0) {
    //         return "Deposit amount must be a positive number"
    //     } 
    //     else {
    //         this.balance += amount
    //         this.alltransactions.push({ type: "deposit", amount: amount })
    //         return "Deposit of " + amount + " " + "to" + " " + this.firstName + " " + this.lastName + " successful"

    //     }
    // }

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            return "Withdrawal amount must be a positive number"
        }
        else if (amount > this.balance && this instanceof SavingsAccount && this.bonusconfirm == true) {
            this.balance += this.bonus;
            if (amount > this.balance) {
                return "Insufficient funds even with bonus"
            }
        }
        else if (amount > this.balance && this instanceof SavingsAccount && this.bonusconfirm == true) {
                this.balance += this.bonus;
                if (this.balance + this.bonus < amount) {
                    this.balance -= amount;
                    this.alltransactions.push({ type: "withdrawal", amount: amount })
                    return "Withdrawal of " + amount + " from " + this.firstName + " " + this.lastName + " successful with bonus"
                }
        }
    }

    // transfer(transferTo, amount) {
    //     if (typeof amount !== "number" || amount <= 0) {
    //         return "Transfer amount must be a positive number"
    //     }
    //     else if (this.balance >= amount){
    //         let verify = transferTo instanceof BankAccount;
    //         if(! (verify)){
    //             return transferTo + "is not a valid name"
    //         }
    //         this.withdraw(amount)
    //         this.deposit(amount)
    //         this.alltransactions.push({ type: "transfer", amount: amount, to: transferTo.firstName + " " + transferTo.lastName })
    //         return "Transfer of " + amount + " " + "from " + this.firstName + " " + this.lastName + " to " + transferTo.firstName + " " + transferTo.lastName + " successful"
    //     } 
    //     else {
    //         return "Insufficient funds"
    //     }
    // }

    transactionHistory() {
        return this.alltransactions;
    }

}

class SavingsAccount extends BankAccount {
    constructor(lName, fName, balance, bonusconfirm) {
        super(lName, fName, balance);
        this.bonusconfirm = bonusconfirm;
    }

}


saving = new SavingsAccount("Doe", "John", 1000, true);
console.log(saving.withdraw(1050));