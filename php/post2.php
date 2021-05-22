<?php

// 一時アップロード先ファイルパス
$file_tmp  = $_FILES["file1"]["tmp_name"];

// 正式保存先ファイルパス
$file_save = "/var/www/uploads/" . $_FILES["file1"]["name"];

// ファイル移動
$result = @move_uploaded_file($file_tmp, $file_save);
if ( $result === true ) {
	echo "成功";
} else {
	echo "失敗";
}

?>
