setInterval(function(){ 
    $('.banner p').eq(0).animate({
        marginTop:'-30px'
    },500,function(){
        $(this).appendTo('.banner').css({
            marginTop:'0px'
        })
    })
},2000) 

$('.slideInner').slick({
    autoplay : true,
    arrows : false,
    dots : true,
})


$('.product').slick({ 
    autoplay : true,
    arrows : true,
    slidesToShow:4,
    slidesToScroll:1,
    prevArrow:'<button class="prevArrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="nextArrow"><i class="fas fa-angle-right"></i></button>',

    responsive:[
        {
        breakpoint:993,
        settings:{
            slidesToShow:2,
        }
        },
        {breakpoint:639,        
        settings:{
            slidesToShow:1,
        }
    
    }]
    
    

})

