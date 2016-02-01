<?php
	$name = $_POST[param1];
	$phone = $_POST[param2];
	$email = $_POST[param3];
	$text = $_POST[param4];
	$to = 'ip@bitek.ru';
	$title = 'Сообщение от пользователя!';
	$msgtext = "Имя: $name\nНомер телефона: $phone\nАдрес электронной почты: $email\nТекст сообщения: $text";

	if (empty($name) or empty($phone) or empty($email) or empty($text)) {
		echo "Заполните все поля!";
	}
	else {
		if (mail($to,$title,$msgtext)) {
			echo '1';
		}
		else echo '2';
	};
?>