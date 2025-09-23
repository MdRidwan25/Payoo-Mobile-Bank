
// Add money button functionality js code here
const validPin = 1234;

document.getElementById('btn-add-money').addEventListener('click', function(){

    

  const addMoneyBtn = document.getElementById('btn-add-money');


const bankSelect = document.getElementById('bank-select');

const accountNumber = document.getElementById('account-number').value


const addAmount = parseInt(document.getElementById('add-amount-input').value)

const pinNumber = parseInt(document.getElementById('pin-number').value)



const availableBalance = parseInt(document.getElementById('available-blance').innerText)



if(accountNumber.length < 11){

alert('Please provide valid account number')
return;
}

if(pinNumber !== validPin){

alert('Please provide valid pin number')
return;
}

if (isNaN(addAmount) || addAmount <= 0) {
    alert('সঠিক পরিমাণ টাকা লিখুন');
    return;
  }


if(addMoneyBtn){

alert('Money is added successfully')


}



const totalNewAvailableBalance = addAmount+availableBalance;

document.getElementById('available-blance').innerText = totalNewAvailableBalance;









})



// Cash Out Btn Js Code Here


document.getElementById('cashout-btn').addEventListener('click', function(){


const accountNumber = document.getElementById('account-number').value



const addMoneyPage = document.getElementById('add-money-main');

addMoneyPage.style.display = 'none';


const cashOutPage = document.getElementById('cash-out');

cashOutPage.style.display = 'block';



})


// addMoney visible Function


document.getElementById('add-money-defult').addEventListener('click', function(){

const cashOutPage = document.getElementById('cash-out');

cashOutPage.style.display = 'none';


const addMoneyVisible = document.getElementById('add-money-main');


addMoneyVisible.style.display = 'block';



})


// Btn Withdraw function



document.getElementById('btn-add-withdraw').addEventListener('click', function(){


const accountNumber = document.getElementById('account-number').value


const addAmount = parseInt(document.getElementById('add-amount').value)

const pinNumber = parseInt(document.getElementById('pin-number').value)


const availableBalance = parseInt(document.getElementById('available-blance').innerText)




const totalNewAvailableBalance =   availableBalance - addAmount;

document.getElementById('available-blance').innerText = totalNewAvailableBalance;





})