class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount: amount });
      this.balance += amount;

      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }

    return `Deposit amount must be greater than zero.`;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: amount });
      this.balance -= amount;

      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }

    return "Insufficient balance or invalid amount.";
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let result = "Deposits: ";

    let deposits = this.transactions
      .filter((transaction) => transaction.type === "deposit")
      .map((transaction) => transaction.amount);

    return (result += deposits.join(","));
  }

  listAllWithdrawals() {
    let result = "Withdrawals: ";

    let withdrawals = this.transactions
      .filter((transaction) => transaction.type === "withdraw")
      .map((transaction) => transaction.amount);

    return (result += withdrawals.join(","));
  }
}

const myAccount = new BankAccount();

myAccount.deposit(1000);
myAccount.deposit(1200);
myAccount.deposit(1500);

myAccount.withdraw(500);
myAccount.withdraw(800);
myAccount.withdraw(300);
