<?php

echo "PHP実行<br>";

$uploadfile = '/var/www/uploads/' . basename($_FILES['file_upload']['name']);

if (move_uploaded_file($_FILES['file_upload']['tmp_name'], $uploadfile)) {
	echo "ファイルアップロード成功<br>";
} else {
	echo "ファイルアップロード失敗<br>";
}

$filename = $_FILES['file_upload']['name'];

echo "ファイル名 : " . $filename;

?>
