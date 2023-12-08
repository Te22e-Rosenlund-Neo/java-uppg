const Summa_ruta = document.querySelector("#Resultat");



function Addera(){
    let Tal_1 = parseInt(document.querySelector("#tal_1").value);
    let Tal_2 = parseInt(document.querySelector("#tal_2").value);
    
    Summa_ruta.value = Tal_1 + Tal_2;
}
function Subtrahera(){
    let Tal_1 = parseInt(document.querySelector("#tal_1").value);
    let Tal_2 = parseInt(document.querySelector("#tal_2").value);

    Summa_ruta.value = Tal_1 - Tal_2;
}
function Multiplicera(){
    let Tal_1 = parseInt(document.querySelector("#tal_1").value);
    let Tal_2 = parseInt(document.querySelector("#tal_2").value);

    Summa_ruta.value = Tal_1 * Tal_2;
}
function Dividera(){
    let Tal_1 = parseInt(document.querySelector("#tal_1").value);
    let Tal_2 = parseInt(document.querySelector("#tal_2").value);

    Summa_ruta.value = Tal_1 / Tal_2;
}