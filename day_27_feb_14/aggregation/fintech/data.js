db.users.insertMany([
  {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main Street"
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    address: "456 Main Street"
  },
  {
    name: "Mike Johnson",
    email: "mikejohnson@example.com",
    address: "789 Main Street"
  },
  {
    name: "Emily Davis",
    email: "emilydavis@example.com",
    address: "112 Main Street"
  },
  {
    name: "David Wilson",
    email: "davidwilson@example.com",
    address: "342 Main Street"
  }
])


db.transactions.insertMany([
  {
    userId: ObjectId("65f123abc111111111111111"),
    type: "debit",
    amount: 500,
    description: "Grocery Shopping"
  },
  {
    userId: ObjectId("65f123abc111111111111111"),
    type: "credit",
    amount: 1000,
    description: "Salary Deposit"
  },
  {
    userId: ObjectId("65f123abc222222222222222"),
    type: "debit",
    amount: 200,
    description: "Online Purchase"
  },
  {
    userId: ObjectId("65f123abc333333333333333"),
    type: "credit",
    amount: 300,
    description: "Refund"
  },
  {
    userId: ObjectId("65f123abc444444444444444"),
    type: "debit",
    amount: 50,
    description: "Coffee Shop"
  },
  {
    userId: ObjectId("65f123abc555555555555555"),
    type: "credit",
    amount: 1500,
    description: "Investment Dividend"
  },
  {
    userId: ObjectId("65f123abc111111111111111"),
    type: "debit",
    amount: 100,
    description: "Transportation"
  },
  {
    userId: ObjectId("65f123abc222222222222222"),
    type: "credit",
    amount: 500,
    description: "Bonus"
  },
  {
    userId: ObjectId("65f123abc333333333333333"),
    type: "debit",
    amount: 300,
    description: "Dinner at Restaurant"
  },
  {
    userId: ObjectId("65f123abc444444444444444"),
    type: "credit",
    amount: 2000,
    description: "Loan Repayment"
  }
])
