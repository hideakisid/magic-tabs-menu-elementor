jQuery(document).ready(function(){
    // Inicializa o primeiro menu como visível
    jQuery('#menu1').css('display', 'block');

    jQuery(".link a").click(function(e){
        e.preventDefault(); // Impede o comportamento padrão de scroll

        var id = jQuery(this).attr("href");
        
        // Oculta todos os menus exceto o que foi clicado
        jQuery('.menu').css('display', 'none');
        
        // Exibe o menu correspondente sem animação
        jQuery(id).css('display', 'block');
    });
});
