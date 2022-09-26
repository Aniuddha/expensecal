import Expenseform from './components/Form'
import Display from './components/Display';
import Chart from './components/Chart';
import Details from './components/Details';
import './App.css';
import { Line } from 'react-chartjs-2';

function edit() {
  var fund = prompt("Please enter preferred monthly fund", "1000");
  localStorage.setItem("fund",fund);
  window.location.reload();
}

function App() {
  return (
    <div className="App">
      <div class="row ">
  <div class="col-md-6 bg-primary">
    
    <div class="card m-1">
  <div class="card-body">
  <h5 class="card-title">Add Expense</h5>
  <Expenseform/>
    </div>
</div>

<div class="card m-1">
  <div class="card-body ">

    <h5 class="card-title"> All Expense</h5>
    
    <Display/>
   
  </div>
</div>
  </div>


  <div class="col-md-6 p-1 bg-primary">
  <div class="card mt-1 ">
  <div class="card-body ">
    <h5 class="card-title">Graphs and Informations</h5>
    <b>Graphs</b>
    <Chart/>
    <b>Informations</b> <i class="fa-solid fa-pen-to-square" onClick={edit}></i>
    <Details/>
  </div>
</div>


  </div>
</div>


    </div>
  );
}

export default App;
