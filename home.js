
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



document.getElementById('cashout-btn').classList.add('bg-[#0874f20d]');
  document.getElementById('transfer-money').classList.remove('bg-[#0874f20d]');
  document.getElementById('add-money-defult').classList.remove('bg-[#0874f20d]');
document.getElementById('get-bonus-main').classList.remove('bg-[#0874f20d]');


document.getElementById('pay-bill').classList.remove('bg-[#0874f20d]');
document.getElementById('transactions-click').classList.remove('bg-[#0874f20d]')


const cashoutBtn = document.getElementById('btn-add-withdraw');







const accountNumber = document.getElementById('account-number').value



const addMoneyPage = document.getElementById('add-money-main');

addMoneyPage.style.display = 'none';




const cashOutPage = document.getElementById('cash-out');

cashOutPage.style.display = 'block';


const transactionsVisible = document.getElementById('transctions-form');

transactionsVisible.style.display = 'none';



const getBonusVisible = document.getElementById('get-bonus')


getBonusVisible.style.display = 'none';

const PayBillVisible = document.getElementById('pay-bill-main');

PayBillVisible.style.display = 'none';




})


// addMoney visible Function


document.getElementById('add-money-defult').addEventListener('click', function(){



  document.getElementById('add-money-defult').classList.add('bg-[#0874f20d]');

  document.getElementById('transfer-money').classList.remove('bg-[#0874f20d]');
document.getElementById('cashout-btn').classList.remove('bg-[#0874f20d]');

document.getElementById('get-bonus-main').classList.remove('bg-[#0874f20d]');

document.getElementById('pay-bill').classList.remove('bg-[#0874f20d]');
document.getElementById('transactions-click').classList.remove('bg-[#0874f20d]')



const addMoneyVisible = document.getElementById('add-money-main');




addMoneyVisible.style.display = 'block';

const cashOutPage = document.getElementById('cash-out');

cashOutPage.style.display = 'none';

const transferMoneyHide = document.getElementById('transfer-main');

transferMoneyHide.style.display = 'none';



const getBonusVisible = document.getElementById('get-bonus')


getBonusVisible.style.display = 'none';


const transactionsVisible = document.getElementById('transctions-form');

transactionsVisible.style.display = 'none';

const PayBillVisible = document.getElementById('pay-bill-main');

PayBillVisible.style.display = 'none';


})


// Btn Withdraw function



document.getElementById('btn-add-withdraw').addEventListener('click', function(){


const cashoutAlert = document.getElementById('btn-add-withdraw');


const accountNumber = document.getElementById('account-number').value


const addAmount = parseInt(document.getElementById('add-amount').value)

const pinNumber = parseInt(document.getElementById('pin-number').value)


const availableBalance = parseInt(document.getElementById('available-blance').innerText)




const totalNewAvailableBalance =   availableBalance - addAmount;

document.getElementById('available-blance').innerText = totalNewAvailableBalance;




if(cashoutAlert){

  alert('Cash Out Is Succcessful')


}




})




// Transfer Money JS Here

document.getElementById('transfer-money').addEventListener('click', function(){


document.getElementById('add-money-defult').classList.remove('bg-[#0874f20d]');

  document.getElementById('transfer-money').classList.add('bg-[#0874f20d]');
document.getElementById('cashout-btn').classList.remove('bg-[#0874f20d]');

document.getElementById('get-bonus-main').classList.remove('bg-[#0874f20d]');

document.getElementById('pay-bill').classList.remove('bg-[#0874f20d]');

document.getElementById('transactions-click').classList.remove('bg-[#0874f20d]')

  const transferMoneyVisible = document.getElementById('transfer-main');

  transferMoneyVisible.style.display = 'block';

const addMoneyInvisible = document.getElementById('add-money-main');


addMoneyInvisible.style.display = 'none';

const cashoutInvisible = document.getElementById('cash-out');

cashoutInvisible.style.display = 'none';



const transactionsVisible = document.getElementById('transctions-form');

transactionsVisible.style.display = 'none';

const getBonusVisible = document.getElementById('get-bonus')


getBonusVisible.style.display = 'none';
  
const PayBillVisible = document.getElementById('pay-bill-main');

PayBillVisible.style.display = 'none';

})



// Get Bonus Function Here



document.getElementById('get-bonus-main').addEventListener('click', function(){



document.getElementById('add-money-defult').classList.remove('bg-[#0874f20d]');

  document.getElementById('transfer-money').classList.remove('bg-[#0874f20d]');

document.getElementById('cashout-btn').classList.remove('bg-[#0874f20d]');

document.getElementById('get-bonus-main').classList.add('bg-[#0874f20d]');


document.getElementById('pay-bill').classList.remove('bg-[#0874f20d]');
document.getElementById('transactions-click').classList.remove('bg-[#0874f20d]')

const getBonusVisible = document.getElementById('get-bonus')


getBonusVisible.style.display = 'block';


const transferMoneyVisible = document.getElementById('transfer-main');

  transferMoneyVisible.style.display = 'none';

const addMoneyInvisible = document.getElementById('add-money-main');


addMoneyInvisible.style.display = 'none';

const cashoutInvisible = document.getElementById('cash-out');

cashoutInvisible.style.display = 'none';


  
const transactionsVisible = document.getElementById('transctions-form');

transactionsVisible.style.display = 'none';


const PayBillVisible = document.getElementById('pay-bill-main');

PayBillVisible.style.display = 'none';



})



// Pay Bill Function Here



document.getElementById('pay-bill').addEventListener('click', function(){


document.getElementById('add-money-defult').classList.remove('bg-[#0874f20d]');

  document.getElementById('transfer-money').classList.remove('bg-[#0874f20d]');

document.getElementById('cashout-btn').classList.remove('bg-[#0874f20d]');

document.getElementById('get-bonus-main').classList.remove('bg-[#0874f20d]');

document.getElementById('pay-bill').classList.add('bg-[#0874f20d]');

document.getElementById('transactions-click').classList.remove('bg-[#0874f20d]')




const PayBillVisible = document.getElementById('pay-bill-main');

PayBillVisible.style.display = 'block';



const getBonusVisible = document.getElementById('get-bonus')


getBonusVisible.style.display = 'none';


const transferMoneyVisible = document.getElementById('transfer-main');

  transferMoneyVisible.style.display = 'none';

const addMoneyInvisible = document.getElementById('add-money-main');


addMoneyInvisible.style.display = 'none';

const cashoutInvisible = document.getElementById('cash-out');

cashoutInvisible.style.display = 'none';


const transactionsVisible = document.getElementById('transctions-form');

transactionsVisible.style.display = 'none';



})


// Transactions function here

document.getElementById('transactions-click').addEventListener('click', function(){


document.getElementById('add-money-defult').classList.remove('bg-[#0874f20d]');

  document.getElementById('transfer-money').classList.remove('bg-[#0874f20d]');

document.getElementById('cashout-btn').classList.remove('bg-[#0874f20d]');

document.getElementById('get-bonus-main').classList.remove('bg-[#0874f20d]');

document.getElementById('pay-bill').classList.remove('bg-[#0874f20d]');

document.getElementById('transactions-click').classList.add('bg-[#0874f20d]')


const transactionsVisible = document.getElementById('transctions-form');

transactionsVisible.style.display = 'block';



const PayBillVisible = document.getElementById('pay-bill-main');

PayBillVisible.style.display = 'none';



const getBonusVisible = document.getElementById('get-bonus')


getBonusVisible.style.display = 'none';


const transferMoneyVisible = document.getElementById('transfer-main');

  transferMoneyVisible.style.display = 'none';

const addMoneyInvisible = document.getElementById('add-money-main');


addMoneyInvisible.style.display = 'none';

const cashoutInvisible = document.getElementById('cash-out');

cashoutInvisible.style.display = 'none';






})
