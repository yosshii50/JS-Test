<?php

// �ꎞ�A�b�v���[�h��t�@�C���p�X
$file_tmp  = $_FILES["file1"]["tmp_name"];

// �����ۑ���t�@�C���p�X
$file_save = "/var/www/uploads/" . $_FILES["file1"]["name"];

// �t�@�C���ړ�
$result = @move_uploaded_file($file_tmp, $file_save);
if ( $result === true ) {
	echo "����";
} else {
	echo "���s";
}

?>
