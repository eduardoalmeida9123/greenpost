
   

var geocoder;
   
// Read location from browser
function readLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}
}
   
// Get the latitude and the longtitude
function successFunction(position) {
var lat = position.coords.latitude;
var lng = position.coords.longitude;
codeLatLng(lat, lng)
}
   
function errorFunction(){ alert("Geocoder failed"); }
   
function codeLatLng(lat, lng) {
   
var latlng = new google.maps.LatLng(lat, lng);
geocoder.geocode({'latLng': latlng}, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) {
   
if (results[1]) {
interpretation(results, lat, lng);
} else {
alert("No results found");
}
} else {
alert("Geocoder failed due to: " + status);
}
});
   
}
//// Função que interpreta os dados capturados
function interpretation(results, lat, lng) {
   
   
//// Escrevendo os dados no HTML/Pagina
$(".endereco").append("<strong>"+results[0].address_components[2].short_name + " " + results[0].address_components[1].short_name + "/" + results[0].address_components[0].short_name+"</strong>");
$(".cidade").append("<strong>"+results[0].address_components[3].short_name+"</strong>");
   
$(".estado").append("<strong>"+results[0].address_components[5].short_name+"</strong>");
  
$(".cep").append("<strong>"+results[0].address_components[7].short_name+"</strong>");
   
$(".lat").append("<strong>"+lat+"</strong>");
   
$(".lng").append("<strong>"+lng+"</strong>");



localStorage.complete = results[0].address_components[2].short_name + " " + results[0].address_components[1].short_name + ", " + results[0].address_components[3].short_name + " - " + results[0].address_components[5].short_name;

}
   
//$('document').ready(function(event){
   
readLocation(); // read location only after clicking the button, not immediately after loading page (might be annoying)
geocoder = new google.maps.Geocoder();
   
//});
