
// Add money button functionality js code here
const validPin = 1234;

document.getElementById('btn-add-money').addEventListener('click', function(e){

    e.preventDefault()


const bankSelect = document.getElementById('bank-select');

const accountNumber = document.getElementById('account-number').value


const addAmount = parseInt(document.getElementById('add-amount').value)

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




const totalNewAvailableBalance = addAmount+availableBalance;

document.getElementById('available-blance').innerText = totalNewAvailableBalance;







})