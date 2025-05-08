const minhaFila = new FilaCircular(5);

//testando o atendimento 
const testeAtendimento = new Atendimento("Melzinha", "11122233344", obterDataAtual(), obterHoraAtual());
console.log(testeAtendimento.toString());

// aqui adiciona um novo elemento na fila
function addElemento(){  //editado
   const nome = 
      document.getElementById("txtnovoNome").value;
   const cpf = 
      document.getElementById("txtnovoCPF").value;
    
    if(!minhaFila.isFull()){
       const novoAtendimento = new Atendimento(); //criando o objeto atendimento
       
      //setando os valores no objeto
       novoAtendimento.setNome(nome); 
       novoAtendimento.setCpf(cpf);
       novoAtendimento.setData(obterDataAtual());
       novoAtendimento.setHoraEntrada(obterHoraAtual());

       minhaFila.enqueue(novoAtendimento); //aqui insere na fila 
       mostrarFila();


      document.getElementById("txtnovoNome").value = ""; //limpando os campos e focando em seus nomes
      document.getElementById("txtnovoCPF").value = "";
      document.getElementById("txtnovoNome").focus(); 
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
function atenderFila(){ //editado
   if(!minhaFila.isEmpty()){
      const atendido = minhaFila.dequeue(); /*verifica se esta vazia,
      /                                    e para atender usa-se o dequeue*/
                                            
      atendido.setHoraSaida(obterHoraAtual()); //aqui registra a hora de saida

      alert("Pessoa atendida: " + atendido.nome + 
         "\nHora de entrada: " + atendido.horaEntrada +
         "\nHora de saída: " + atendido.horaSaida +
         "\nTempo na fila: " + atendido.getTempoFila());
      

      mostrarFila();
      //salvar no banco texto do navegador
   }
   else
      alert("Fila vazia!");
}
//---------------------------------------

function buscarAtendimento() { //editado 
   const nomeBusca = document.getElementById("txtnovoNome").value;
   let encontrado = false;

   for (let item of minhaFila) {     
       if (item.nome === nomeBusca) {
           alert("O atendimento foi encontrado: " + item.toString());
           encontrado = true;
           break; /*para a variavel item, se for 
           igual o nome da busca = atendimento encontrado*/
       }
   }

   if (!encontrado) { //caso contrario não encontrado
       alert("O atendimento não foi encontrado.");
   }

   
   document.getElementById("txtnovoNome").value = "";
}
//---------------------------

function buscarPorCpf() {
   const cpfBusca = prompt("Digite o CPF para iniciar a busca:");
   let encontrado = false;
   let posicao = 1; //coomeça por 1

   
   for (let item of minhaFila) {
       if (item.cpf === cpfBusca) { //item tem que ser igual o nome da busca
           alert("Pessoa encontrada na posição: " + posicao);
           encontrado = true;
           break;
       }
       posicao++;
   }

   if (!encontrado) {
       alert("CPF não encontrado na fila.");
   }
}
//------------------------- 
