const minhaFila = new FilaCircular(5);

function addElemento(){
    const novoElemento = 
       document.getElementById("txtnovoNome");
    if(!minhaFila.isFull()){
       //const novoAtendimento = new Atendimento();
       // setar valor do objeto atendimento e inserir na fila

       minhaFila.enqueue(novoElemento.value);
       mostrarFila();
       novoElemento.value = ""; // limpa
       novoElemento.focus(); // cursor no input
    } 
    else
        alert("Fila cheia!");     
}// fim addElemento
//-----------------------------------
function mostrarFila(){
   const listaFila = document.getElementById("listFila");
   //listaFila.textContent = minhaFila.toString();
   listaFila.innerHTML = ""; // limpa a lista
   for(let item of minhaFila){
      const listaElemento = document.createElement("li");
      listaElemento.textContent = item;
      listaFila.appendChild(listaElemento);
   }
}

//-----------------------------
function atenderFila(){
   if(!minhaFila.isEmpty()){
      const atendido = minhaFila.dequeue();
      alert("Pessoa atendida:"+atendido);
      mostrarFila();
      //salvar no banco texto do navegador
   }
   else
      alert("Fila vazia!");
}
//---------------------------------------