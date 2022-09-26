
import React  from "react";
import "./display.css"


const Display = () => {

    var data = JSON.parse(localStorage.getItem("expense"));
    var fund = JSON.parse(localStorage.getItem("fund"));
    //  console.log(data)
     var sum=0;
    if(data !=null){
       
        for(var i = 0; i < data.length; i++) {
            sum+= parseFloat(data[i].amount);
        }
        
    }
    // console.log(sum)

    const erase = (pro) =>{
      console.log("deleted")
      var data = JSON.parse(localStorage.getItem("expense"));
      var edited=[]
      
      for(var i = 0; i < data.length; i++) {
        if(data[i].uid!==pro.uid){
          edited.push(data[i])
        }
    }
    console.log(edited)
    localStorage.setItem("expense", JSON.stringify(edited));
    window.location.reload();
    }



   
  const Form = () => (

<div class="scrolling-wrapper">
{data != null ? (
          
        data.map((pro) => {
          return (
            <div class="card m-1 p-2 bg-muted">
              
              <button className="btn ms-auto p-0 m-0" onClick={()=>erase(pro)}>
              <i class="fa-solid fa-trash"></i>
                  
                    </button>
                <p class="m-0 p-0"> 
                  
                <i class="fa-solid fa-indian-rupee-sign"></i> <b>Amount :</b> {pro.amount}<br></br>
                <i class="fa-solid fa-people-arrows"></i> <b>Payee :</b> {pro.payee}<br></br>
                <i class="fa-solid fa-list"></i> <b>Category :</b> {pro.category}<br></br>
                <i class="fa-sharp fa-solid fa-credit-card"></i> <b>Payment Method :</b> {pro.paymentmethod}<br></br>
                <i class="fa-solid fa-calendar-days"></i> <b>Date :</b> {pro.date}<br></br>
                </p>
                </div>

          );
        })
      ) : (
        <p>No Expense available</p>
      )} 
  
</div>

  )

  
  return (
    
    <div className="container">
        
      
           <b class="bg-warning ">Total Expense : {sum}</b>

           {Form()}
        </div>
  );
};

export default Display;