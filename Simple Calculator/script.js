const session = sessionStorage.getItem("user");

// Redirect to login if session is null 
if (!session) {
    window.location.href = "login.html"; // Redirecting to login page.
}
const calculator_screen = document.getElementById("calculator_screen");

let calculator_values = "";
let final_result ="";


function operator(value){
    console.log("clicked",value);
    console.log("done", calculator_screen);
    calculator_values += value;
    calculator_screen.innerHTML = calculator_values;
/*      calculator_values.push(value);
    console.log('calculator value',calculator_values); */
  //  calculator_values.toString(value);
    
}
function total_values(){
 let total_result = eval( calculator_values);
  final_result += calculator_values +"="+total_result;
 calculator_screen.innerHTML = final_result;
 create_history(final_result);
}

function clear_screen(){
    calculator_screen.innerHTML ="";
    calculator_values = "";
     final_result ="";
}

function create_history(result){

  //get the existing array from the db
  const existingHistory = get_history();

  console.log("ex",existingHistory) 
  existingHistory.push({result}) ;
  
  
  // string of object
  const historyItemString = JSON.stringify(existingHistory);

  localStorage.setItem('calculator_history',  historyItemString);
}

function set_history(){  
  document.getElementById("calculator_screen").innerHTML = localStorage.getItem('calculator_history');
}

function get_history(){  
  const data = localStorage.getItem('calculator_history');
  const convertedData = data? JSON.parse(data) :  [];
   return convertedData;
}

function load_history(){
   const allHistory = get_history();
  const y = allHistory.length

   let historyItem = "<ul>" 
    allHistory.forEach(element => {
         return historyItem +=`<li>${element.result}</li>`     
    });
    historyItem +="</ul>";     
    calculator_screen.innerHTML   = historyItem;
}



function logout() {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "login.html";
}
document.querySelector(".logout_button").addEventListener("click", logout);

