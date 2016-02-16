$('.signupnow')
	.on('click', function (){
 	alert("We are not currently taking sign ups");
 	$('a').text('No Sign Ups!');
    });

$('.read-more1').on('click',function (){
	$('.additionaltext1').slideDown();
	});

$('.read-more2').on('click',function (){
	$('.additionaltext2').slideDown();
	});

$('.learn-more').on('click',function (){
	$('.learn-more-text').slideDown();
	});
