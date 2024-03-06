//This is a short program called insurance that shows the user there car insurance and the cost.

let userName = prompt('Please insert your User Name');

let userInfo = {
      Name : 'Jesse Jordan',
      expiryDate:'05/11/2025',
      CarModel:'Tesla',
      LicenseNumber:'9882105',      
}

if(userName == 'sucess'){
  console.log(userInfo)
}
else{
  console.log('Please try again the username you entered is invalid');
}
