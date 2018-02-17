$(function() {
    
    $('.submenu').hide();
    $('.button-white').hide();

    
    $('.menu-item').hover( function(){
        $(this).find('ul').slideDown();  
    }, function(){
        $(this).find('ul').slideUp('fast');
    });
    
    $('.category-item').hover(function(){
        $(this).find('.button-white').fadeIn('fast');
    }, function(){
        $(this).find('.button-white').fadeOut('fast');
    });
    
});
