/* DESCRIZIONE:
RI-Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
I dropdown però appaiono e scompaiono al click e non al rollover.
Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta.
BONUS:
gestione menù versioni mobile
gestione tutta parte responsive
sviluppo di altre sezioni della pagina;
NOTE:
quindi l’ex base ha: sia l’interazione dei dropdown (però sul click),
sia l’impaginazione e grafica uguali al sito;
prima di buttarvi su altri bonus, il primo bonus è: completare la navbar anche in ottica responsive con relativo hamburger menù.  */
$(document).ready(function () { 

$(".dropdown-global").click(function (){
    var isVisible = $(this).find("div").hasClass("my_visible");
    
    $(".dropdown-global > div").removeClass("my_visible");
    if (isVisible == false){
        $(this).find("div").toggleClass("my_visible");
    }
    
    
})





})