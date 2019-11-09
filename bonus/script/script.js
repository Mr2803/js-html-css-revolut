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
//@ts-check
// @ts-ignore
$(document).ready(function () { 

// @ts-ignore
$(".dropdown-global").click(function (){
    //salvo una variabile che TROVA il contenitore del dropdown e CONTROLLA se ha la classe active
    var isVisible = $(this).find(".dropdown-cont").hasClass("active");
    
    //rimuovo a prescindere a tutti la classe active per far si che non ci possa essere più di un dropdown per volta
    
    $(".dropdown-global > .dropdown-cont").removeClass("active");
    $(this).css("color", "#8b959e")
    $(this).find("span").text("▼");
    //effettuo un controllo , se è FALSO che la mia variabile ha classe active allora la aggiungo la classe (insieme ad altri effetti)
    if (isVisible == false){
        $(this).find(".dropdown-cont").toggleClass("active");
        $(this).css("color","black");
        $(this).find("span").text("▲");

 
    } 
    
})

    $(".fas.fa-bars").click(function(){
        $(".mobile_nav-cont").addClass("active");
    })

    $(".close").click(function(){
        $(".mobile_nav-cont").removeClass("active");
    })





})