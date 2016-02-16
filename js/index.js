$('.signupnow')
	.on('click', function (){
 	alert("We are not currently taking sign ups");
 	$('.signupnow').text('No Sign Ups!');
    });

$('.read-more1').on('click',function (){
	$('.additionaltext1').slideDown();
	$('.read-less1').show();
	$('.read-more1').hide();
	});

$('.read-less1').on('click',function (){
	$('.additionaltext1').slideUp();
	$('.read-more1').show();
	$('.read-less1').hide();
	});

$('.read-more2').on('click',function (){
	$('.additionaltext2').slideDown();
	$('.read-less2').show();
	$('.read-more2').hide();
	});

$('.read-less2').on('click',function (){
	$('.additionaltext2').slideUp();
	$('.read-more2').show();
	$('.read-less2').hide();
	});

$('.learn-more').on('click',function (){
	$('.learn-more-text').slideDown();
	$('.learn-more').hide();
	});
