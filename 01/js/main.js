$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay:true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(__) _____-____'
    })

    $('#data').mask('00/00/0000',{
        placeholder:'__/__/____'
    })

    $('#placa').mask('SSS-0000',{
        placeholder:'ABC-1234(Apenas se tiver placa)'
    })

    $('#ano_modelo').mask('0000/0000',{
        placeholder:'2023/2024'
    })

    $('form').validate({
        rules:{
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
            mensagem:{
                required:true
            },
            veiculointeresse: {
                required:false
            },
            data:{
                required:true
            }

        },
        messages: {
                nome : 'Por favor insira o seu nome',
                email:'Por favor insira o seu email',
                telefone:'Por favor insira o seu telefone',
                mensagem:'Por favor insira a mensagem',
                data:'Por favor insira a data de hoje',
        },
        submitHandler: function(form){
            console.log(form)
            
        },
        invalidHandler: function(evente, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })        
      
    $('.lista_sem_placa button ').click(function(){
        const destino = $('#contato');

       const nomeVeiculo = $(this).parent().find('h3').text();

       $('#veiculo-interesse').val(nomeVeiculo);


        $('#placa').val('');


        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
        
        

    })

    $('.lista_placa button').click(function(){
        const destino_placa = $('#contato');
        // inserindo o nome do veiculo ao input//
        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeVeiculo); 
        
        //inserindo número da placa ao input//
        const numero_placa = $(this).parent().find('.placa_veiculo').text();
        $('#placa').val(numero_placa);

        $('html').animate({
            scrollTop: destino_placa.offset().top
        },1000)
    })


})