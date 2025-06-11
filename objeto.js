// 1 - Criando um objeto, que é um tipo de dado
let pessoa = {

    nome: 'Ana',
    cpf:'99966644420',
    genero: 'F',
    idade: 25,
    altura: 1.77,
    dataNascimento: '25/12/1998',
    // endereço: 'Rua dez, Casa 67, Boa vista, Maracanau, Ceará',
    endereço: {
        rua: 'Rua dez',
        numero: 67,
        bairro: 'Boa vista',
        cidade: 'Maracanau',
        estado: 'Ceará', 
        cep: '61900-000',
        localizacao: {
            latitude: 123456,
            longitude: 654321
        }
    },
    
    adicionar: function(){
        console.log('Adicionando...')
    },

    remover: function(){
        console.log('Removendo...')
    },

    // telefone: '(88) 99999-9999',
    // email: 'ana@ig.com.br',
    tamanhos: ['P', 'M', 'G', 'GG'],
    estrageiro: false,
    contato: {
        telefone: '(88) 99999-9999',
        email: 'ana@ig.com.br'

    }
}

// imprimindo no console
console.log(pessoa);

//2 - Acessando os atributos do objeto
console.log(pessoa.dataNascimento);
console.log(pessoa.endereço);
console.log(pessoa.contato.email);
console.log(pessoa.endereço.estado);
console.log(pessoa.contato);
// ao chamar uma propriedade que contem uma função, coloca-se parenteses.
console.log(pessoa.adicionar());
