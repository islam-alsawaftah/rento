/*global $*/
$(function() {
    'use strict';
    //adjust header background
    var h= $('window').height(),
    upperh=$('.upper-bar').innerHeight();
    $('.header ').height (h - upperh);
});
    //feat shuffle
    
    $('.feat ul li').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.shuffle .col-lg-3').css('opacity' , 1);
        }else{ $('.shuffle .col-lg-3').css('opacity' , '0.11');
             $($(this).data('class')).parent().css('opacity' , 1);}
    }); 
