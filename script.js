// login button functionality


document.getElementById('btn-login').addEventListener('click', function(){

const mobileNumber = 1312915214;

const fourDigitCode = 1234;

const mobileNumberValue = document.getElementById('mobile-number').value

const mobileNumberValueConverted = parseInt(mobileNumberValue);

const pinNumberValue = document.getElementById('four-digit-code').value


const pinNumberValueConverted = parseInt(pinNumberValue);




if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === fourDigitCode){


window.location.href= './home.html'





}else{

alert('invalid credentials')


}



})