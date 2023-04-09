function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    //newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    // newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}
function generateCV(){
   let nameField=document.getElementById('nameField').value;
   let nameT1=document.getElementById('nameT1');
   nameT1.innerHTML=nameField;
   document.getElementById('nameT2').innerHTML=nameField
   document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
   document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
   document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
   document.getElementById("linkT").innerHTML=document.getElementById("LinkedInField").value;

   document.getElementById("objectiveT").innerHTML=document.getElementById("objective").value;

   //we
   let wes=document.getElementsByClassName("weField");
   let str='';

   for(let e of wes){
    str=str+`<li>${e.value}</li>`;
   }
   document.getElementById("workExpT").innerHTML=str;

   //aq
   let wess=document.getElementsByClassName("aqField");
   let strr='';
   for(let r of wess){
    strr=strr+`<li>${r.value}</li>`;
   }
   document.getElementById("academicQualificationT").innerHTML=strr;
   document.getElementById('cv-form').style.display='none';
   document.getElementById('cv-template').style.display='block';

}
function printCV(){
    window.print();

}