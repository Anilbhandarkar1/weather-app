function getOption() {
  var selectElement = document.getElementById("City");
  var output = selectElement.options[selectElement.selectedIndex].value;

    fetch('https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname='+output)
    .then(res => res.json())
    .then(json => {
    var discp = json.description
    var temp = json.temp_in_celsius
    var press = json.pressure_in_hPa
    var time =  json.date_and_time
 
     
const DivContainer = document.getElementById("div-container")
const newDiv = document.createElement('div')
console.log(newDiv)
newDiv.classList.add("div-shadow")
DivContainer.appendChild(newDiv)
const height = document.createElement('h2')
const btn = document.createElement('button')


const para = document.createElement('p')
const para1 = document.createElement('p')
const para2 = document.createElement('p')
const para3 = document.createElement('p')

newDiv.appendChild(btn).classList.add("btn")
newDiv.appendChild(height).classList.add("cityoutput")
newDiv.appendChild(para).classList.add("description")
newDiv.appendChild(para2).classList.add("temp")
newDiv.appendChild(para3).classList.add("pressure")
newDiv.appendChild(para1).classList.add("days")



     btn.innerHTML = "X"
     btn.setAttribute('onclick', 'remove(this)')
     height.innerHTML = output
     para.innerHTML =  `description:  <span contenteditable ="true">${discp}<span>`
     para2.innerHTML = `Temperature(°C): <span>${temp}<span>`
     para3.innerHTML = `Pressure(hpa): <span>${press}<span>`
     para1.innerHTML = `Data age(No. of days): <span>${time}<span>`
   })
 
 
}

function remove(event){
  let el = event;
   el.parentNode.lastElementChild.value;
    el.parentElement.remove();
 }

 function search(obj) {
  var selectElement = document.getElementById("City");
  var input = document.getElementById('cityinput').value;
  console.log(input);
  var output = selectElement.options[selectElement.selectedIndex].value;
  if (input == output) {
        var orig = obj.style.border;
        obj.style.border = '5px solid green';
        setTimeout(function(){
             obj.style.borderColor = orig;
        }, 3000)
 }
}














