
const validPin = 1234;


// Btn Withdraw function



document.getElementById('btn-add-withdraw').addEventListener('click', function(){


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

const totalNewAvailableBalance = addAmount - availableBalance;

document.getElementById('available-blance').innerText = totalNewAvailableBalance;


})