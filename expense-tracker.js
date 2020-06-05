const account = {
    name: 'Felipe Rojas',
    expenses: [],
    income: [],
    addIncome: function(description, amount) {
        this.income.push({description, amount});
    },
    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        this.expenses.forEach(expense => {
            totalExpenses += expense.amount;
        });

        let totalIncome = 0;
        this.income.forEach(income => {
            totalIncome += income.amount
        });
        const balance = totalIncome - totalExpenses;

        console.log(`${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses`);
    }
}

account.addIncome('Ing', 1000);
account.addIncome('Freelancer', 300);
account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);

account.getAccountSummary();