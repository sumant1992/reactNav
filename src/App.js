
import './App.css';

function App() {


  function link1(){
    alert("you click link1")
}

function link2(){
    alert("you click link2")
}

function link3(){
    alert("you click link3")
}
function link4(){
    alert("you click link4")
}

function Bring(){
    alert("you click bring");
}

function Deliver(){
    alert("you click delivaer");
}

function Package(){
    alert("you click package");
}

function Express(){
    alert("you click express");
}



return (
    <div>
  <div class="navbar">
  <a href="#home">Home</a>
  <div class="subnav">
    <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#company">Company</a>
      <a href="#team">Team</a>
      <a href="#careers">Careers</a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a onClick={Bring}>Bring</a>
      <a onClick={Deliver}>Deliver</a>
      <a onClick={Package}>Package</a>
      <a onClick={Express}>Express</a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a onClick={link1}>Link 1</a>
      <a onClick={link2}>Link 2</a>
      <a onClick={link3}>Link 3</a>
      <a onClick={link4}>Link 4</a>
    </div>
  </div>
  <a href="#contact">Contact</a>
</div>  
  
  </div> 
  );
}

export default App;
