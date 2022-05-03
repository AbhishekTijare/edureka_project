
function printName(){
    const name = document.getElementById("inputName").value;
    console.log(name);
     document.getElementById("displayName").innerText = name;

}
 function handleCountryChange(){
     const country = document.getElementById("ddlcountry");
     console.log(country);
     const labelValue = country.options[country.selectedIndex].text;
     document.getElementById("ddlcountrylabel").innerText = labelValue;
 }
  
 function handleGenderChange(){
     const genderElements = document.getElementsByName("gender");
     const isMale= genderElements[0].checked;
     const isFemale= genderElements[1].checked;
     document.getElementById("lblGenderField").innerText= isMale ? "Male" : "Female";
       

 }
 function handleButtonClick(){
      document.getElementById("signupForm").style.backgroundColor="lightgreen";
     alert("Form is submitted");
 }
  function handlePassChange(){
      //1.reset pass
      document.getElementById("passLable").innertext="";
      //2. read password
      const password = document.getElementById("inputpass").value;
      var error ="";
      const length = password.length ;
      if (length<6 || length>10){
          error="Password must contain a number";
      }
      else if(!/\d/.test(password)) {
          error="Password must contain a number";
      }
      console.log(error);
      document.getElementById("passLable").innerText=error;
  }