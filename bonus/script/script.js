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

    //funzione per carousel automatico (loop infinito)
    setInterval(nextImg,2000);

    function nextImg() {
        var posizioneimg = $(".carousel_global img.active");
        

        posizioneimg.removeClass("active");

        // se siamo all'ultima img dello slider, ritorna ad essere attiva la prima
        if (posizioneimg.hasClass("last")) {
            $(".carousel_global img.first").addClass("active");
        } else {
            //altrimenti passa semplicemente l'active alla prossima
            posizioneimg.next("img").addClass("active");

        }
    }

    //TO DO : l'immagine cambia in base allo scroll


    //funzione per passare il background grigio da una colonna all'altra
    $(".col-4").mouseenter(function(){
        //salvo una variabile che indica il possessore della classe my_bg
        var posizioneBg = $(".col-4.my_bg");

        //rimuovo sull'azione (mouseenter) la classe my_bg
        posizioneBg.removeClass("my_bg")
        
        //pongo le condizioni , se i fratelli della mia selezione hanno la classe my_bg , allora la rimuovo
        if($(this).siblings(".col-4").hasClass("my_bg")){
            $(".col-4").removeClass("my_bg");
        }else{ //altrimenti la aggiungo
            $(this).addClass("my_bg") 
        }
    })



})