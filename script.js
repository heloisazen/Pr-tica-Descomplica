class Funcionario{

    constructor(nome, idade, cargo){

        this.nome = nome;

        this.idade = idade;

        this.cargo = cargo;

    }



    seApresentar(){

        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;



    }



    trabalhar(){

        return `${this.nome} está trabalhando.`;

    }

}



class Gerente extends Funcionario{

    constructor(nome,idade,departamento){

        super(nome,idade,'Gerente');

        this.departamento = departamento;

    }



    gerenciar(){

        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;



    }

}



class Desenvolvedor extends Funcionario{

    constructor(nome, idade, linguagem){

        super(nome,idade, 'Desenvolvedor');

        this.linguagem = linguagem;

    }



    programar(){

        return `${this.nome} está programando em ${this.linguagem}.`;

    }

}



function exibirErro(mensagem){

    const erroDiv = document.getElementById('erro');

    erroDiv.textContent = mensagem;

}



function criarFuncionario(){

    const nome = document.getElementById('nome').value;

    const idade = parseInt(document.getElementById('idade').value);

    const cargo = document.getElementById('cargo').value;

    const departamento = document.getElementById('departamento').value;

    const linguagem = document.getElementById('linguagem').value;



    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = '';

    document.getElementById('erro').textContent ='';



    try{

        if(!nome || isNaN(idade) || idade <= 0 || !cargo){

            throw new Error('Por favor, preencha todos os campos corretamente.');

        }



        let funcionario;



        if(cargo.toLowerCase() === 'gerente'){

            if(!departamento){

                throw new Error('O departamento é obrigatório para o gerente.');

            }

            funcionario = new Gerente(nome,idade,departamento);

            resultadoDiv.innerHTML += `<p>${funcionario.seApresentar()}</p>`;

            resultadoDiv.innerHTML += `<p>${funcionario.trabalhar()}</p>`;

            resultadoDiv.innerHTML += `<p>${funcionario.gerenciar()}</p>`;

        }else if(cargo.toLowerCase() === 'desenvolvedor'){

            if(!linguagem){

                throw new Error('A linguagem de programação é obrigatória para o desenvolvedor.');

            }

            funcionario = new Desenvolvedor(nome,idade,linguagem);

            resultadoDiv.innerHTML += `<p>${funcionario.seApresentar()}</p>`;

            resultadoDiv.innerHTML += `<p>${funcionario.trabalhar()}</p>`;

            resultadoDiv.innerHTML += `<p>${funcionario.programar()}</p>`;

        }else{

            throw new Error('Cargo inválido. Insira "Gerente ou Desenvolvedor".');

        }

    }catch (erro){

        exibirErro(erro.message);

    }

}
