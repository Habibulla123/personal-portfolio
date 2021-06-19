// type js code
var typed = new Typed('.type',{
	strings: ['Web Designer','Web Developer','Graphics Designer','Programmer'],
	typeSpeed: 100,
	backSpeed: 70,
	loop: true,
});

// jquery code using for bar icon
$ (document).ready(function(){
	$('.menu-button').click(function(){
		$('.bar-line').toggleClass('active');
	});
	$('.menu-button').click(function(){
		$('#sidebar-nav').toggle();
	});
});