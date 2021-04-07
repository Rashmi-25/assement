function viewPassword()
{
  var passwordInput = document.getElementById('password-field');
  var passStatus = document.getElementById('pass-status');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';
    passStatus.className='fa fa-eye';
    
  }
  else{
    passwordInput.type='password';
    passStatus.className='fa fa-eye-slash';
  }
}


function viewPassword1()
{
  var passwordInput1 = document.getElementById('password-field1');
  var passStatus1 = document.getElementById('pass-status1');
 
  if (passwordInput1.type == 'compassword'){
    passwordInput1.type='text1';
    passStatus1.className='fa fa-eye';
    
  }
  else{
    passwordInput1.type='compassword';
    passStatus1.className='fa fa-eye-slash';
  }
}