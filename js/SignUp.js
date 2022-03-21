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
//Id 관련 함수
function id(){
    var ID = document.getElementById('user_ID').value;
    var ID_check = document.getElementById('user_ID').value;
    if(ID != ID_check){
        alert("아이디가 중복되었습니다");
    }
}
//PassWord 관련 함수
function PWD_Check(){
    var PWD = document.getElementById('user_PW1').value; //패스워드 변수
    var PWD_check = document.getElementById('user_PW2').value; //패스워드 체크 변수
            if(PWD != PWD_check){
                alert("비밀번호가 일치하지 않습니다");
                return false;
            }
            else{
                alert("비밀번호가 일치합니다");
                return true;
            }
}
/*
function email_option(){
    if(!document.getElementById("Domain_Option").value){
        document.Email_Option.value("");
    }
    else if(document.getElementById("Domain_Option").value="naver"){
        document.Email_Option.value("naver.com");
    }
    else if(document.getElementById("Domain_Option").value=="daum"){
        document.getElementById("Email_Option").value==("hanmail.net");
    }
    else if(document..value=="google"){
        document.getElementById("Email_Option").value("gmail.com");
    }
    else if(document.getElementById("Domain_Option").value=="SelfPush"){
        document.getElementById("Email_Option").focus();
    }
}*/