// Arxiu init.js + index.js
 
(function($){
  $(function(){
 
    $('.sidenav').sidenav();
    $('.tabs').tabs({ "swipeable": true });


 
  }); // end of document ready
})(jQuery); // end of jQuery name space
 
 
document.addEventListener('deviceready', onDeviceReady, false);

// Semaforos

var semaphoreMatriculation = document.getElementById("semaphoreMatriculation");
var semaphoreFrontDNI = document.getElementById("semaphoreFrontDNI");
var semaphoreBackDNI = document.getElementById("semaphoreBackDNI");

// Botones
var btnResetSemaphore = document.getElementById("btnResetSemaphore");
btnResetSemaphore.onclick = resetAllSemaphore;

var btnMatriculationPending = document.getElementById("btnMatriculationPending");
btnMatriculationPending.onclick = changeColorMatriculationPending;
var btnMatriculationAccepted = document.getElementById("btnMatriculationAccepted");
btnMatriculationAccepted.onclick = changeColorMatriculationAccepted;
var btnMatriculationDenied = document.getElementById("btnMatriculationDenied");
btnMatriculationDenied.onclick = changeColorMatriculationDenied;

var btnFrontDNIPending = document.getElementById("btnFrontDNIPending");
btnFrontDNIPending.oncick = changeColorFrontDNIPending;
var btnFrontDNIAccepted = document.getElementById("btnFrontDNIAccepted");
btnFrontDNIAccepted.oncick = changeColorFrontDNIAccepted;
var btnFrontDNIDenied = document.getElementById("btnFrontDNIDenied");
btnFrontDNIDenied.oncick = changeColorFrontDNIDenied;

var btnBackDNIPending = document.getElementById("btnBackDNIPending");
btnBackDNIPending.onclick = changeColorBackDNIPending;
var btnBackDNIAccepted = document.getElementById("btnBackDNIAccepted");
btnBackDNIAccepted.onclick = changeColorBackDNIAccepted;
var btnBackDNIDenied = document.getElementById("btnBackDNIDenied");
btnBackDNIDenied.onclick = changeColorBackDNIDenied;

// Funciones
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}

function changeColorMatriculationPending(){
	semaphoreMatriculation.className = "material-icons circle orange-text darken-3";
}

function changeColorMatriculationAccepted(){
	semaphoreMatriculation.className = "material-icons circle green-text darken-3";
}

function changeColorMatriculationDenied(){
	semaphoreMatriculation.className = "material-icons circle red-text darken-3";
}

function changeColorFrontDNIPending(){
	semaphoreFrontDNI.className = "material-icons circle orange-text darken-3";
}

function changeColorFrontDNIAccepted(){
	semaphoreFrontDNI.className = "material-icons circle green-text darken-3";
}

function changeColorFrontDNIDenied(){
	semaphoreFrontDNI.className = "material-icons circle red-text darken-3";
}

function changeColorBackDNIPending(){
	semaphoreBackDNI.className = "material-icons circle orange-text darken-3";
}

function changeColorBackDNIAccepted(){
	semaphoreBackDNI.className = "material-icons circle green-text darken-3";
}

function changeColorBackDNIDenied(){
	semaphoreBackDNI.className = "material-icons circle red-text darken-3";
}

function resetAllSemaphore(){
	semaphoreMatriculation.className = "material-icons circle grey-text darken-3";
	semaphoreFrontDNI.className = "material-icons circle grey-text darken-3";
	semaphoreBackDNI.className = "material-icons circle grey-text darken-3";
}
