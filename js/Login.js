$(document).ready(function(){
 
    $('.menu_btn>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            right:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 50 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });

});
function Login(){
    let id = $('#id');
		let pw = $('#pw');
		let btn = $('#btn');
		
		$(btn).on('click', function() {
			if($(id).val() == "") {
				$(id).next('label').addClass('warning');
				setTimeout(function() {
					$('label').removeClass('warning');
				},1500);
			}
			else if($(pw).val() == "") {
				$(pw).next('label').addClass('warning');
				setTimeout(function() {
					$('label').removeClass('warning');
				},1500);
			}
			}
		);   
}