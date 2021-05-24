<?php

echo "PHP実行<br>";

$upload_temp = $_FILES['file_upload']['tmp_name'];
$upload_name = $_FILES['file_upload']['name'];
$uploadfile  = 'upload/' . $upload_name;

echo "<br>";
echo "\$_FILES['file_upload']['tmp_name'] : " . $upload_temp . "<br>";
echo "\$_FILES['file_upload']['name'] : "     . $upload_name . "<br>";
echo "保存先 : "                              . $uploadfile  . "<br>";
echo "<br>";

//$uploadfile = '/var/www/uploads/' . basename($_FILES['file_upload']['name']);
//$uploadfile = 'upload/' . basename($_FILES['file_upload']['name']);

if (move_uploaded_file( $upload_temp , $uploadfile)) {
//if (move_uploaded_file( $upload_temp . "a" , $uploadfile)) { // エラーテスト用
	echo "ファイルアップロード成功<br>";
} else {
	echo "ファイルアップロード失敗<br>";
	echo "アクセス権の確認<br>";
	echo "失敗した場合、" . $upload_temp . "からも削除される<br>";
}

//$filename = $_FILES['file_upload']['name'];
//echo "ファイル名 : " . $filename . "<br>";

echo "<br>";
if( unlink( $uploadfile ) ){
//if( unlink( $uploadfile . "a" ) ){ // エラーテスト用
	echo "アップロードしたファイルは削除しました<br>";
} else {
	echo "アップロードしたファイルの削除に失敗<br>";
}

?>
