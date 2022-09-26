
import React , {useState} from "react";



const Expenseform = () => {
  const current = Date.now();
  const [formData, setFormData] = useState({
    amount: "",
    payee: "",
    category:"",
    paymentmethod:"",
    date:"",
    uid:current,
    errormsg: false,
    successmsg: false,
    loading: false,
  });

  const {
    amount,
    payee,
    category,
    paymentmethod,
    date,
    uid,
    errormsg,
    successmsg,
    loading,
  } = formData;

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errormsg: "",
      successmsg: "",
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
   
    console.log(formData);
   var data = []
   var temp = JSON.parse(localStorage.getItem("expense"));
   console.log(temp);
   
   if(temp != null){
    for(var i =0;i<temp.length;i++){
        data.push(temp[i])
       }
   }
    
    
    data.push(formData)
    console.log(data);
    localStorage.setItem("expense", JSON.stringify(data));

    window.location.reload();
    
  }


  const Form = () => (
<div class="row">
  
  <div class="column2" >
  <form onSubmit={handleSubmit} >
  <p><i class="fa-solid fa-indian-rupee-sign"></i> Amount <br></br><input type="text" name="amount" value={amount} onChange={handleChange} required/></p>
  <p><i class="fa-solid fa-people-arrows"></i> Payee  <br></br><input type="text" name="payee" value={payee} onChange={handleChange} required/></p>
  
  <p><i class="fa-solid fa-list"></i> Category <br></br><input type="text" name="category" value={category} onChange={handleChange} list="category" required/>
<datalist id="category">
  <option value="Automobile">Automobile</option>
  <option value="Entertainment">Entertainment</option>
  <option value="Family">Family</option>
  <option value="Food">Food</option>
  <option value="Household">Household</option>
  <option value="Insurance">Insurance</option>
</datalist>
</p>
<p><i class="fa-sharp fa-solid fa-credit-card"></i> Payment Method <br></br><input type="text" name="paymentmethod" value={paymentmethod} onChange={handleChange} list="Method" required/>
<datalist id="Method" required>
  <option value="Cash">Cash</option>
  <option value="Cheque">Cheque</option>
  <option value="Card">Card</option>
  <option value="e-Transfer">e-Transfer</option>
</datalist>
</p>
<p> <i class="fa-solid fa-calendar-days"></i> Date <br></br><input type="date" id="date" name="date" value={date} onChange={handleChange}  required/></p>
<input type="submit" value="Add Expense"/>
    </form>
    
  </div>
 
</div>


  )

  
  return (
    
    <div className="containe">
  
           {Form()}
        </div>
  );
};

export default Expenseform;