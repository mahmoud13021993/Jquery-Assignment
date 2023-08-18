$('.nav-link').click(function(){
    let selected = $(this).attr('href');
    console.log(selected);
    let sectionTop = $(selected).offset().top
    console.log(sectionTop)
    $('body,html').animate({scrollTop:sectionTop},1500)
})


$('#openBtn').click(function(){
    $('.nav-bar').css({left:`0px`,transition:'all 1s'});
})
$('#closeBtn').click(function(){
    let boxWidth = $('.nav-bar').outerWidth();
    $('.nav-bar').css({left:`-${boxWidth}px`,transition:'all 1s'});
})


$('.singer  .singer-item h2').click(function(){
    $('.singer  .singer-item p').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

function getTime(futureDate) {
let  dateFuture = new Date(futureDate);
let  dateNow = new Date();

let  seconds = Math.floor((dateFuture - (dateNow))/1000);
let  minutes = Math.floor(seconds/60);
let  hours = Math.floor(minutes/60);
let  days = Math.floor(hours/24);
hours = hours-(days*24);
minutes = minutes-(days*24*60)-(hours*60);
seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
$('.days').html(`${days} D`);
$('.hours').html(`${hours} H`);
$('.minutes').html(`${minutes} M`);
$('.seconds').html(`${seconds} S`);
}

setInterval(function() { 
     getTime("10 october 2023 9:56:00") 
    }, 1000);




   let maxLength = 100;
    $('textarea').keyup(function() {
      let length = $(this).val().length;
     let remening = maxLength-length;
      if(remening<=0)
                {
                     $("#chars").text("your available character finished");
                    
                }
            else{
            
            $("#chars").text(remening);
            }
    });
    
    
