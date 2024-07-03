'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const mainWelcome = document.querySelector(".main-welcome")

const updateUI = function (currentAccount) {
  displayMovments(currentAccount.movements)
  calcdisplaybalance(currentAccount)
  calcdisplaysummery(currentAccount)
}

const displayMovments = function (movements) {
  containerMovements.innerHTML = ""
  
  movements.forEach(function (mov, index) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `
    containerMovements.insertAdjacentHTML("afterbegin", html);


  })
}

// event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and show welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
    mainWelcome.style.opacity = 0;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = "";
    inputLoginPin.value = "";

    // losing focus on pin field after login
    inputLoginPin.blur();
    
    updateUI(currentAccount)
  }
  
})

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = ""
  if (amount > 0 && receiverAcc && amount <= currentAccount.balance && receiverAcc.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount)
  }
})


btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value)
  const eligible = currentAccount.movements.some(value => value > 0 && value >= (amount * 0.1));
  if (eligible) {
    console.log("eligible");
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
})

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    accounts.splice(index, 1);
    mainWelcome.style.opacity = 100;
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ""
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const eurtousd = 1.1;
const newarr = movements.map(el => el * eurtousd)

// console.log(newarr);

const movementsdesc = movements.map((value, index, arr) => {
  const type = value > 0 ? "deposited" : "withdrew"
  return `Movement ${index+1}: You ${type} ${Math.abs(value)}`
})

// console.log(movementsdesc);

// function for creating users initials
// const inimaker = function (user) {
//   let username = "";
//   username += user.split(" ").map(el => el[0])
//   console.log(username.replaceAll(",", "").toUpperCase());
// }

// ********************************** deposites and withdrawals ***********************************************


const deposits = movements.filter(function (mov) {
  return mov > 0;
})
const withdrawals = movements.filter(mov => mov < 0);
// ************************************************************************************************************

const initials = []
const inimaker = function (users) {
  users.forEach(function (user) {
    user.username = (user.owner.toLowerCase().split(" ").map(el => el[0]).join(""));
  })
}
inimaker(accounts)

const calcdisplaybalance = function (acc) {
  acc.balance = acc.movements.reduce((sum, value) => sum + value, 0);
  labelBalance.textContent = `${acc.balance}€`;
}

const calcdisplaysummery = function (acc) {
  const incomes = acc.movements.filter(value => value > 0).reduce((acc, value) => acc + value, 0);
  const spends = Math.abs(acc.movements.filter(value => value < 0).reduce((acc, value) => acc + value, 0))
  labelSumIn.textContent = `${incomes} €`;
  labelSumOut.textContent = `${spends} €`;
  const totalinterest = deposits.map(value => (value * acc.interestRate) / 100 ).filter(value => value >= 1).reduce((acc, value) => acc + value, 0);
  labelSumInterest.textContent = totalinterest;
} 





// const balance = movements.reduce(function (acc, value) {
//   return acc + value
// }, 0)


// using reduce for max
const max = movements.reduce((acc, value) => {
  if (acc > value) return acc; 
  else return value
}, movements[0])
// console.log(max);

const totaldepusd = account2.movements.filter(value => value > 0).map(value => value * eurtousd).reduce((acc, value) => acc + value, 0);
// console.log(totaldepusd);

// const firstwithdrawal = movements.find(value => value < 0);
// console.log(movements);
// console.log(firstwithdrawal);

// const account = accounts.find(acc => acc.owner === "Sarah Smith");
// console.log(account);

// for (const i of accounts) {
//   if (i.owner === "Sarah Smith") {
//     console.log(i);
//   }
// }