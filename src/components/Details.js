
import React  from "react";



const Details = () => {
var data = JSON.parse(localStorage.getItem("expense"));
var fund = JSON.parse(localStorage.getItem("fund"));
var sum=0;
if(data !=null){
   
    for(var i = 0; i < data.length; i++) {
        sum+= parseFloat(data[i].amount);
    }
    
}

var remain = fund-sum
var percentageExp = (sum/fund)*100
var percentremain = 100-percentageExp

const Form = () => (
<p>
<b>Total Fund(100%) : {fund}</b><br></br>
<b>Total Expense({percentageExp}%) : {sum}</b><br></br>
<b>Remaining({percentremain}%) : {remain}</b>
</p>
  )

  
  return (
    
    <div className="container">
        
{Form()}
           
        </div>
  );
};

export default Details;