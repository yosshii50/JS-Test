<?php

echo "PHP���s<br>";

$uploadfile = '/var/www/uploads/' . basename($_FILES['file_upload']['name']);

if (move_uploaded_file($_FILES['file_upload']['tmp_name'], $uploadfile)) {
	echo "�t�@�C���A�b�v���[�h����<br>";
} else {
	echo "�t�@�C���A�b�v���[�h���s<br>";
}

$filename = $_FILES['file_upload']['name'];

echo "�t�@�C���� : " . $filename;

?>
