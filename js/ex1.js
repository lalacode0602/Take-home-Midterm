

const promptN1 = () => {
  num1 = prompt("Enter the starting number");
 return num1}

const promptN2 = () => {
  num2 = prompt("Enter the ending number");
  return num2
}


const AveNotDivBy2Or5 = (start, end) =>{
  let total = 0;
  let count = 0;
  for(let i = start; i <= end; i++){
    if(i % 2 !== 0 && i % 5!== 0){
      total += i;
      count += 1;
    }} 
    ave = Math.round((total / count) * 100)/100;
  
  const tblElement = document.createElement("table");

  for(let i = 0; i <= ( end- start + 2); i++){
    const rowElement = document.createElement("tr");
    if (i === 0){
      const tdRow = document.createElement("td");
      tdRow.innerHTML = "Row";
      tdRow.classList.add("bgGray");
      rowElement.appendChild(tdRow);

      const tdNumber = document.createElement("td");
      tdNumber.innerHTML = "Number";
      tdNumber.classList.add("bgGray");
      rowElement.appendChild(tdNumber);

    }else if( i === (end - start + 2)){

      const tdAve = document.createElement("td");
      tdAve.innerHTML = "Avereage"
      tdAve.classList.add("bgGray");
      rowElement.appendChild(tdAve);

      const tdAns = document.createElement("td");
      tdAns.innerHTML = ave;
      tdAns.classList.add("bgGray");
      rowElement.appendChild(tdAns);

    }else{
      for(let n = 0; n <= 1; n++){
      const tdElement = document.createElement("td");
      num = start + i - 1;
      if(n === 0){
        tdElement.innerHTML = i;}else{
        tdElement.innerHTML = num;}
      if(num % 2 !== 0 && num % 5 !== 0){
        tdElement.classList.add("bgBlue");
      }
      rowElement.appendChild(tdElement);
      }
    }
  tblElement.appendChild(rowElement);
  }
  document.getElementById("output").appendChild(tblElement);
}

const validation = (num1, num2) => {
  n1 = Number(num1);
  n2 = Number(num2);
  pElement = document.createElement("p");
  if (n1 > 0 && n2 > 0 && n1 < n2){
    pElement.innerHTML = ""
    pElement.innerHTML = `The average of numbers not divisible by 2 or 5 <br> starting at ${n1} and ending with ${n2} displayed in the table below`;
    pElement.style.textAlign = "center";
    document.getElementById("message").appendChild(pElement);
    AveNotDivBy2Or5(n1, n2);
  }else{ 
    pElement.innerHTML = `You entered ${num1} and ${num2}`;
    if( n1 <= 0 ){
      pElement.innerHTML += "<br> The start number should be postive integer";}
    if (n2 <= 0){
      pElement.innerHTML += "<br> The end number should be postive integer";} 
    if (n1 >= n2){
      pElement.innerHTML += "<br> The end number should be bigger than the start number";}
    if(isNaN(n1)||isNaN(n2)){
      pElement.innerHTML += "<br> Input needs to be numeric."}
    pElement.innerHTML += "<br>   Please reflesh the page to restart."
    pElement.style.color = "red";
    document.getElementById("message").appendChild(pElement);
  }
}


num1 = promptN1();
num2 = promptN2();
validation(num1, num2); 
