
import React  from "react";
import "./display.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid ,PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';


const Chart = () => {

  var data = JSON.parse(localStorage.getItem("expense"));
  // var fund = JSON.parse(localStorage.getItem("fund"));
  // console.log(data)

  //Geting cateogry 
  var sum=[];
 if(data !=null){
    
     for(var i = 0; i < data.length; i++) {
         sum.push(data[i].category);
     }
     
 }
 function removeDuplicates(sum) {
  return sum.filter((item,
      index) => sum.indexOf(item) === index);
}

sum = removeDuplicates(sum);
// console.log(sum)

//display all category as options
let coloursList = Object.keys(sum).map((k) => {
  return (
    <option key={k} value={k}>{sum[k]}</option>
  )
}, this);

//getting sum of each options(category) 
var sumlist = []
for (var j=0;j<sum.length;j++){
  var add=0;
  for(var k=0;k<data.length;k++){
   if(sum[j]===data[k].category){
    add=add+parseFloat(data[k].amount);
   }
   sumlist[j]=add
  }
}
// console.log(sumlist)

//creating ramdom colors for charts from total options
var randomColor=[]
for(var i=0;i<coloursList.length;i++){
    randomColor.push("#"+Math.floor(Math.random()*16777215).toString(16));
}
// console.log(randomColor)


//create dataset for bat graph
var tempdataset=[]
for(var k=0;k<sum.length;k++){
  tempdataset.push({name:sum[k],amount:sumlist[k]})
}
const dataset = tempdataset;




  return (
    
    <div className="container">
          <select >
          <option>All</option>
          {coloursList}
          </select>
          
          <BarChart width={500} height={250} data={dataset}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="amount" fill="#8884d8" />
  </BarChart>

  <PieChart width={500} height={300}>
      <Pie
         data={dataset}
         color="#000000"
         dataKey="amount"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={100}
         fill="#8884d8"
         label={sumlist}
         
      >
       
      </Pie>

      <Legend />
      </PieChart>
      
           
        </div>
  );
};

export default Chart;