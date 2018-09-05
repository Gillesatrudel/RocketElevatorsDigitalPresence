function quotation() {
 //Obtenir les valeurs saisis
 //calculer
 //reafficher le résultat
 const standard=  7565;
 const premium=  12345;
 const excelium= 15400; 
 

 var number_apartment = parseInt(document.getElementById("number_apartment").value);
 var number_floor = parseInt(document.getElementById("number_floor").value);
 var number_floor_basement = parseInt(document.getElementById("number_floor_basement").value);
 var number_store = parseInt(document.getElementById("number_store").value);
 var number_parking = parseInt(document.getElementById("number_parking").value);
 var number_elevator = parseInt(document.getElementById("number_elevator").value);
 var number_office = parseInt(document.getElementById("number_office").value);
 var number_person_floor = parseInt(document.getElementById("number_person_floor").value);
 var number_business_hour = parseInt(document.getElementById("number_business_hour").value);
 //var standard = parseInt(document.getElementById(standard).value);
 //var premium = parseInt(document.getElementById(premium).value);
 //var excellium = parseInt(document.getElementById(excellium).value);
 var building_type_obj = document.getElementById("building_type");
 var building_type = building_type_obj.options[building_type_obj.selectedIndex].value;

 //document.querySelector('input[name="select_gamme"]:checked').value;
 //if (select_gamme=="standard") { 
 //   7565*1.1


 var e = document.getElementById("building_type");
 // returned_value["building_type"] = e[e.selectedindex].value;
 //RESIDENTIAL

 var cageRequise = 0; 
 if (building_type=="residential") {
    if (number_floor<20) {
       cageRequise = Math.ceil(( number_apartment/number_floor/6));
 } else {
     var multiplicateur = Math.ceil (number_floor/20);
     cageRequise =Math.ceil((number_apartment/number_floor/6))*multiplicateur;
 }     
  
 
 }  else if ( building_type=="corporate" || building_type=="hybrid") {
    var multiplicateur = Math.ceil((number_floor + number_floor_basement)/20);
     cageRequise = Math.ceil(Math.ceil( number_person_floor*(number_floor + number_floor_basement))/1000/ multiplicateur)*multiplicateur;


 } else {
    if (building_type=="commercial") {
    document.getElementById("nombre_suggere").innerHTML = number_elevator
    } else {
        " "
    }
 }     



                                       
 document.getElementById("nombre_suggere").innerHTML = cageRequise
  
 }
 


 
  
//COST installation standard= 10%
//COST installation premium=  13%
//COST installation excelium= 16%





