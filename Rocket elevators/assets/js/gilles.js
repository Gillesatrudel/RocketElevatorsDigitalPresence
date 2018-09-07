function quotation() {
 //Obtenir les valeurs saisis
 //calculer
 //reafficher le résultat
 //const standard=  7565;
 //const premium=  12345;
// const excelium= 15400; 
 

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
// var nombre_suggere_type_obj = document.getElementById("Nombre_suggere");
 //var nombre_suggere = nombre_suggere_type_obj.option[nombre_suggere_type_obj.selectedIndex].value;


 
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
     cageRequise = number_elevator
    } else {
        " "
    }

    
    
 }     
                                
    document.getElementById("nombre_suggere").innerHTML = cageRequise
 
 
 var projectCost = 0;

 var select_gamme = document.querySelector('input[name="select_gamme"]:checked').value;
   if (select_gamme=="standard") { 
    projectCost = Math.round(((7565*cageRequise)*1.1)*100)/100;
    }  
   if (select_gamme=="premium") {
    projectCost = Math.round(((12345*cageRequise)*1.13)*100)/100;  
    }  
   if (select_gamme=="excellium")  {
    projectCost = Math.ceil(15400*cageRequise)*1.16;
    
    










    
   }

// var  = document.getElementById("totalPrice");

document.getElementById("total_price").innerHTML = projectCost + "$";
event.preventDefault();     
}


//function display_relevant_fields(selected_value){
//    var building_type = selected_value.value;
//    console.log("selected_value", selected_value.value);
 
  //  if (building_type=="") {

    function display_relevant_fields(selected_value){
        var building_type = selected_value.value;
       // console.log("selected_value", selected_value.value);
      
         var building_type = (selected_value.value || selected_value.options[selected.value.selectedIndex].value);
         if (selected_value.value == "residential") {
              document.getElementById("total_price").style.display = 'block';
              document.getElementById("box_nb_apartment").style.display = 'block';
              document.getElementById("box_nb_floor").style.display = 'block';
              document.getElementById("box_nb_floorbasement").style.display = 'block';
              document.getElementById("box_nb_store").style.display = 'none';
              document.getElementById("box_nb_parking").style.display = 'none';
              document.getElementById("box_nb_elevator").style.display = 'none';
              document.getElementById("box_nb_office").style.display = 'none';
              document.getElementById("box_nb_person/floor").style.display = 'none';
              document.getElementById("box_nb_businesshour").style.display = 'none';
      
      
         }  else if (selected_value.value == "commercial"){
             document.getElementById("box_nb_businesshour").style.display = 'none';
             document.getElementById("box_nb_person/floor").style.display = 'none';
             document.getElementById("box_nb_office").style.display = 'none';
             document.getElementById("box_nb_apartment").style.display = 'none';
             document.getElementById("box_nb_elevator").style.display = 'block';
             document.getElementById("box_nb_floor").style.display = 'block';
             document.getElementById("box_nb_floorbasement").style.display = 'block';
             document.getElementById("box_nb_parking").style.display = 'block';
             document.getElementById("box_nb_store").style.display = 'block';
      
          } else  if (selected_value.value == "corporate"){
             document.getElementById("box_nb_businesshour").style.display = 'none';
             document.getElementById("box_nb_person/floor").style.display = 'block';
             document.getElementById("box_nb_office").style.display = 'block';
             document.getElementById("box_nb_apartment").style.display = 'none';
             document.getElementById("box_nb_elevator").style.display = 'none';
             document.getElementById("box_nb_floor").style.display = 'block';
             document.getElementById("box_nb_floorbasement").style.display = 'block';
             document.getElementById("box_nb_parking").style.display = 'block';
             document.getElementById("box_nb_store").style.display = 'none';
      
          } else if (selected_value.value == "hybrid"){
             document.getElementById("box_nb_businesshour").style.display = 'block';
             document.getElementById("box_nb_person/floor").style.display = 'block';
             document.getElementById("box_nb_office").style.display = 'none';
             document.getElementById("box_nb_apartment").style.display = 'none';
             document.getElementById("box_nb_elevator").style.display = 'none';
             document.getElementById("box_nb_floor").style.display = 'block';
             document.getElementById("box_nb_floorbasement").style.display = 'block';
             document.getElementById("box_nb_parking").style.display = 'block';
             document.getElementById("box_nb_store").style.display = 'block';
          }
   

        }


//COST installation standard= 10%
//COST installation premium=  13%
//COST installation excelium= 16%





