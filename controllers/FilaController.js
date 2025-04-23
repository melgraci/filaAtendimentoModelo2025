const minhaFila = new Fila(5);

function addElemento(){
    const novoElemento = 
       document.getElementById("txtnovoNome");
    if(!minhaFila.isFull()){
       minhaFila.enqueue(novoElemento.value);
       minhaFila.toString();
    } 
    else
        alert("Fila cheia!");     
}