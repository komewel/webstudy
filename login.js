var idPass = false;
var pwPass = false;
$('#id').on('keyup', function(){
let idValue = $(this).val();
if(idValue.length == 0){
$('#msg_id').text('');
idPass = false;
}else if(idValue.length < 4){
$('#msg_id').text('아이디는 4자 이상입니다.').css('color', '#FF0000').css('font-size', '14px').css('margin-right', '310px');
idPass = false;
}else{
$('#msg_id').text('정상적인 아이디입니다.').css('color', '#0000FF').css('font-size', '14px');
idPass = true;
}
})
$('#frm_login').on('submit', function(event){
if(idPass == false){
alert('아이디를 확인하세요.');
event.preventDefault();
return;
}
if($('#pw').val() == ''){
alert('비밀번호를 확인하세요');
event.preventDefault();
return;
}            
    
})