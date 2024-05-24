import {clamp,clampOperation,isInteger,resetInputNum} from "./common.mjs";

setInterval(()=>{
    resetInputNum(numProducts,1);
},100);

$('.range-minus').click(function(){
    if(!isInteger(numProducts.value))
    {
        resetInputNum(numProducts,1);
    }
    else{
        var num = parseInt(numProducts.value);
        numProducts.value = clampOperation(num,1,10,"-").toString();
        changerPrix();
    }
});
$('.range-plus').click(function(){
    if(!isInteger(numProducts.value))
    {
        resetInputNum(numProducts,1);
    }
    else{
        var num = parseInt(numProducts.value);
        numProducts.value = clampOperation(num,1,10,"+").toString();
        changerPrix();
    }
});

function changerPrix(){
        if(!isInteger(numProducts.value))
        {
            resetInputNum(numProducts,1);
        }
        else{
            var num = parseInt(numProducts.value);
            var prix = 10.00;
            $('#prix').html((10*num).toString()+",00 €");
        } 
}

$('#panierBtn').click(function(){
    if($('#panierBtn').html() === "Ajouter au panier"){
        $('#panierBtn').html("Retirer du panier");
    }
    else{
        $('#panierBtn').html("Ajouter au panier");
    }
})