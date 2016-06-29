/*------------------------------------------------------------------- HEADER -----------------------------------------------------------------------------------------------*/
/*This function creates the menu in Administrator page when we open the page*/ 
     function onOpen(e) {
         FormApp.getUi()
        .createMenu('Zeitlimit')
        .addItem('Morgen öffnen','showAlert')
        .addItem('Schließen','showAlert2')
        .addItem('Nachmittag öffnen','showAlert3')
        .addToUi();
     }

/*Creating an object Date*/
var date = new Date();
/*Creating another object date and setting up plus one day at the current date*/
var anotherDate = new Date();
anotherDate.setDate(date.getDate() + 1);
   
/*This Array represents all months off the year in numbers, this way we can call the numbers to show on the screen*/
monName = new Array ("1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11","12");

/*Using variables to receive day, month and year from the objects Date that we've already created*/                 
var tomorrowDay = anotherDate.getDate();                        // day plus 1        
var tomorrowMonth = monName [anotherDate.getMonth()];          // current month plus 1 day
var tomorrowYear = anotherDate.getFullYear();                 // current year plus 1 day
var dayToday   = date.getDate();                             // current day
var monthToday = monName [date.getMonth()];                 // current month
var yearToday  = date.getFullYear();                       // current year


var dayOfWeek = date.getDay(); // Here we take the day of the week for do a comparation, because when is friday we need to settup our "next day" to monday
var fridayToMonday = date;
fridayToMonday.setDate(fridayToMonday.getDate() + 3);
var friMonDay = fridayToMonday.getDate();                        // day plus 3        
var friMonMonth = monName [fridayToMonday.getMonth()];          // month plus 3 days
var friMonYear = fridayToMonday.getFullYear();                 // year plus 3 days



/*------------------------------------------------------------------- OPEN AND CLOSE FUNCTIONS -----------------------------------------------------------------------------------------------*/


     /*This function turns the form on and set the current date*/  
     function openForm() {
       var form = FormApp.getActiveForm();
       form.setAcceptingResponses(true);
       var item = form.setTitle('Bestellung Mittagessen für: ' + dayToday + '/' + monthToday + '/' + yearToday);
     }

     /*This function turns the form on and set date from the next day*/
     function openForm2() {
       if(dayOfWeek == 5.0){
         var form = FormApp.getActiveForm();
         form.setAcceptingResponses(true);
         var item = form.setTitle('Bestellung Mittagessen für: ' + friMonDay + '/' + friMonMonth + '/' + friMonYear);
        }else {
         var form = FormApp.getActiveForm();
         form.setAcceptingResponses(true);
         var item = form.setTitle('Bestellung Mittagessen für: ' + tomorrowDay + '/' + tomorrowMonth + '/' + tomorrowYear);
        }
     } 

     /*This function turns the form off and show a message for the user on the screen*/     
     function closeForm() {  
       var form = FormApp.getActiveForm();
       form.setAcceptingResponses(false);
       var item = form.setTitle('Bestellung Mittagessen geschlossen');
       form.setCustomClosedFormMessage("Sehr geehrte Gäste, Essensbestellung sind nur bis 10:00 Uhr möglich. Vielen Dank für Ihr Verständnis");
     }
     

/*------------------------------------------------------------------- SHOW ALERT FUNCTIONS -----------------------------------------------------------------------------------------------*/


     //this function ask for the admnistrator if he or she really want to close the form
     function showAlert() {
       var ui = FormApp.getUi(); 
       var result = ui.alert(
         'Konfirmation',
         'Sind Sie sicher, dass Sie das Formular für heute öffnen wollen?',
         ui.ButtonSet.YES_NO);

       // Process the user's response.
       if (result == ui.Button.YES) {
         // User clicked "Yes".
         openForm();
         ui.alert('öffene Form für das heutige Datum.');
       } else {
         // User clicked "No" or X in the title bar.
         //Do nothing
         finished();
       }
     }



     //this function ask for the admnistrato if he or she really want to close the form
     function showAlert2() {
       var ui = FormApp.getUi(); // Same variations.

       var result = ui.alert(
         'Konfirmation',
         'Sind Sie sicher, dass Sie das Formular schließen wollen?',
         ui.ButtonSet.YES_NO);

       // Process the user's response.
       if (result == ui.Button.YES) {
         // User clicked "Yes".
         closeForm();
         ui.alert('Bestellung Mittagessen geschlossene.');
       } else {
         // User clicked "No" or X in the title bar.
         //Do nothingS
         finished();
       }
     }

     //this function ask for the admnistrato if he or she really want to close the form
     function showAlert3() {
       var ui = FormApp.getUi(); // Same variations.
       var result = ui.alert(
         'Konfirmation',
         'Sind Sie sicher, dass Sie das Formular für Morgen öffnen wollen?',
         ui.ButtonSet.YES_NO);

       // Process the user's response.
       if (result == ui.Button.YES) {
         // User clicked "Yes".
         openForm2();
         ui.alert('öffene Form für morgen.');
       } else {
         // User clicked "No" or X in the title bar.
         //Do nothingS
         finished();
        
       }
     }

     //This function is just to finish the script when the user clicked "No" in one alert box
     function finished(){
     Logger.log("Script finished");
     }
/*

███████▓█████▓▓╬╬╬╬╬╬╬╬▓███▓╬╬╬╬╬╬╬▓╬╬▓█ 
████▓▓▓▓╬╬▓█████╬╬╬╬╬╬███▓╬╬╬╬╬╬╬╬╬╬╬╬╬█ 
███▓▓▓▓╬╬╬╬╬╬▓██╬╬╬╬╬╬▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
████▓▓▓╬╬╬╬╬╬╬▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
███▓█▓███████▓▓███▓╬╬╬╬╬╬▓███████▓╬╬╬╬▓█ 
████████████████▓█▓╬╬╬╬╬▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬█ 
███▓▓▓▓▓▓▓╬╬▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
████▓▓▓╬╬╬╬▓▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
███▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
█████▓▓▓▓▓▓▓▓█▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
█████▓▓▓▓▓▓▓██▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
█████▓▓▓▓▓████▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
████▓█▓▓▓▓██▓▓▓▓██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
████▓▓███▓▓▓▓▓▓▓██▓╬╬╬╬╬╬╬╬╬╬╬╬█▓╬▓╬╬▓██ 
█████▓███▓▓▓▓▓▓▓▓████▓▓╬╬╬╬╬╬╬█▓╬╬╬╬╬▓██ 
█████▓▓█▓███▓▓▓████╬▓█▓▓╬╬╬▓▓█▓╬╬╬╬╬╬███ 
██████▓██▓███████▓╬╬╬▓▓╬▓▓██▓╬╬╬╬╬╬╬▓███ 
███████▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬████ 
███████▓▓██▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓████ 
████████▓▓▓█████▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█████ 
█████████▓▓▓█▓▓▓▓▓███▓╬╬╬╬╬╬╬╬╬╬╬▓██████ 
██████████▓▓▓█▓▓▓╬▓██╬╬╬╬╬╬╬╬╬╬╬▓███████ 
███████████▓▓█▓▓▓▓███▓╬╬╬╬╬╬╬╬╬▓████████ 
██████████████▓▓▓███▓▓╬╬╬╬╬╬╬╬██████████ 
███████████████▓▓▓██▓▓╬╬╬╬╬╬▓███████████           
Developed by Rian Tavares
rian.tavares@live.com
*/