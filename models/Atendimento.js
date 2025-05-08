class Atendimento{
    nome;
    cpf;
    data;
    hora;
    horaEntrada;
    horaSaida;

    constructor(){ //construtor da classe
        this.nome = "";
        this.cpf = "";
        this.data = "";
        this.horaEntrada = "";
        this.horaSaida = null; // aqui a pessoa ainda não saiu 
    }

    setNome(nome) { //setters para definir os atributos
        this.nome = nome;
    }

    setCpf(cpf) {
        this.cpf = cpf;
    }

    setData(data) {
        this.data = data;
    }

    setHora(hora) {
        this.hora = hora;

    }

    setHoraEntrada(horaEntrada){
        this.horaEntrada = horaEntrada;
    }

    setHoraSaida(horaSaida){
        this.horaSaida = horaSaida
    }

    getTempoFila() {
        if (this.horaSaida) { //se hora da saida for preenchida
            return calcularDiferencaHoras(this.horaEntrada, this.horaSaida); //calcular a diferença de horas
        } else { //se nao, é mostrado esperando...
            return "Esperando...";
        }
    }

    toString(){
        return this.nome + " | " + this.cpf + " | " + this.data + " | " + this.horaEntrada + " | " + (this.horaSaida || "Em espera");
    } //retorna os dados da pessoa cadastrada

}


    

