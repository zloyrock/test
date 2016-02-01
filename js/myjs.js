	$(document).ready(function(){
	$("#formm").submit(function(event) { event.preventDefault() })
	});
	$(document).ready(function() {
		$("#formm").validate({
			messages: {
				name: {required: 'Представьтесь'},
				phone: {required: 'Укажите контактный телефон'},
				email: {required: 'Укажите адрес электронной почты'},
				text: {required: 'Введите текст сообщения'}
			}
		});
	});
	jQuery(function($){
   $("#phone").mask("+7 (999) 999-99-99?");
});
	var result;
	function onSuccess(data) {
		if (data == 1) {
			$('#modal-content').replaceWith('<div class="modal-content" id="success"><button class="btn btn-default" id="btn-default" type="button" data-dismiss="modal"><img id="close" src="images/close.jpg"></button><div align="center"><img id="imgsuccess" src="images/success.jpg"><h3>ВАША ЗАЯВКА ОТПРАВЛЕНА</h3><h6>СОВСЕМ СКОРО С ВАМИ СВЯЖЕТСЯ НАШ МЕНЕДЖЕР</h6></div></div>');
		}
	};
	function go() {
		$.post("programm.php",{param1: $("#name").val(), param2: $("#phone").val(), param3: $("#e-mail").val(), param4: $("#text").val()}, onSuccess)
	};