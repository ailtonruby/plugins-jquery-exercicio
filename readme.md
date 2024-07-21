### Exercício Módulo 10 - Plugins jQuery

## Dicas

- O carousel slick utiliza a ID do campo para atribuir funções.
- A semântica de escrita do HTML e jQuery utilizam o idioma inglês.
- O jQuery plugin só executa depois que o jQuery carregar na página.

$(document).ready(function() {
$('#telefone').mask('(00) 0 00000-0000')
$('#cpf').mask('000.000.000-00')
$('#cep').mask('00000-000')

$('form').validate({
rules: {
nome: {
required: true
},
email: {
required: true,
email: true
},
telefone: {
required: true
},
cpf: {
required: true
},
endereco: {
required: true
},
cep: {
required: true
},
termos: {
required: true
}
},

     submitHandler: function(form) {
      let nome = $('#nome').val();
      let email = $('#email').val();
      let telefone = $('#telefone').val();
      let cpf = $('#cpf').val();
      let endereco = $('#endereco').val();
      let cep = $('#cep').val();

      localStorage.setItem('nome', nome);
      localStorage.setItem('email', email);
      localStorage.setItem('telefone', telefone);
      localStorage.setItem('cpf', cpf);
      localStorage.setItem('endereco', endereco);
      localStorage.setItem('cep', cep);

      form.submit();
    }

})
})
