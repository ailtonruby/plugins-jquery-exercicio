$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    })
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })
})



$('form').validate({
    rules: {
        nome: {
            requerido: true
        },
        email: {
            requerido: true,
            email: true
        },
        telefone: {
            requerido: true,
            telefone: true
        },
        endereco: {
            requerido: true,
            endereco: true
        },
        cep: {
            requerido: true,
            cep: true
        },
        cpf: {
            requerido: true,
            cpf: true
        },
    },
    submitHandler: function (form) {
        console.log(form)
    },
    invalidHandler: function (evento, validator) {
        let camposIncorretos = validator.numberOfIvalids();
        if (camposIncorretos) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    }
})