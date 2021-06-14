let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let formValidation = function(){
    hideElement();
    let dateData = document.forms["AkanEntry"]["data"].value
    let genderData = document.forms["AkanEntry"]["gender"].value

    if(dateData == "" || genderData == ""){
        unhideElement();
      alert("Ensure all inputs are entered correctly to get your Akan name") 
      return false;  
    }else{
        
        getUserDetails();
    }
}

let getUserDetails = function(){
    let data = document.getElementById("data").value;
    let gender = document.getElementById("gender").value
    let genDate = new Date(data).getDay();
    
    getAkanName(genDate,gender)
}

let display = document.getElementById("display")

let getAkanName = function(day, gender){
    if(gender === "Male"){
        display.innerHTML = `<p>Your Akan name is <strong> ${maleAkanNames[day]}</strong>  becuase you are a ${gender} born on ${daysArray[day]}</p>`

    }else if(gender === "Female"){
        display.innerHTML = `<p>Your Akan name is <strong> ${femaleAkanNames[day]} </strong>  becuase you are a ${gender} born on ${daysArray[day]}</p>`
    }
}

let hideElement = function() {
    var x = document.getElementById("hiden-display");
    x.style.display = "block";
    
  }

  let unhideElement = function() {
    var x = document.getElementById("hiden-display");
    x.style.display = "none";
    
  }

let reset = function(){
    location.reload();
}