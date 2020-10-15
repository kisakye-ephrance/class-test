const access_registration = () =>{
    const userID = document.registration.userid;
    const password = document.registration.passid;
    const userName = document.registration.name;
    const zipCode = document.registration.zip;
    const userEmail = document.registration.email;
    const userAddress = document.registration.address;

    const nameUser= /^[A-Za-z]+$/;
    if (userName.value.match(nameUser)){
        console.log(userName.value);
        alert("right input");
        userName.style.border = "2px solid green";
    } else {
        alert("wrong input");
        userName.style.border = "2px solid red";
    };

    const vaidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (userEmail.value.match(validEmail)){
    console.log(userEmail.value);
    alert("valid email");
    userEmail.style.border = "2px solid green";
  } else {
      alert("wrong email");
      userEmail.style.border = "2px solid red";
  };

  const ID = /^\w{5,7}$/;
  if (userID.value.match(ID)){
    console.log(userID.value);
    alert("valid id");
    userID.style.border = "2px solid green";
  } else {
      alert("wrong id");
      userID.style.border = "2px solid red";
  };

  const userPassword = /^\w{7,12}$/;
  if (password.value.match(userPassword)){
    console.log(password.value);
    alert("valid password");
    password.style.border = "2px solid green";
  } else {
      alert("wrong password");
      password.style.border = "2px solid red";
  };
  
  const code =  /^[o-9a-zA-Z]+$/;
  if (zipCode.value.match(code)){
    console.log(zipCode.value);
    alert("valid zipcode");
    zipCode.style.border = "2px solid green";
  } else {
      alert("wrong zipcode");
      zipCode.style.border = "2px solid red";
  };


  const add = /^[o-9a-zA-Z]+$/;
  if (userAddress.value.match(add)){
    console.log(userAddress.value);
    alert("valid address");
    address.style.border = "2px solid green";
  } else {
      alert("wrong address");
      address.style.border = "2px solid red";
  };

};