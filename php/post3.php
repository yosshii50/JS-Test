<?php

$upload_temp = $_FILES['file1']['tmp_name'];
$upload_name = $_FILES['file1']['name'];
$uploadfile  = 'upload/' . $upload_name;

//$result = move_uploaded_file( $upload_temp , $uploadfile );
//if ( $result === true ) {
if ( move_uploaded_file( $upload_temp , $uploadfile ) ){
	//echo "成功";
	if( @unlink( $uploadfile ) ){ // [@]を付けるとエラーメッセージが出力されない
	//if( @unlink( $uploadfile . "a" ) ){ // エラーテスト用
		echo "成功(アップロードしたファイルは削除しました)";
	} else {
		echo "アップロードには成功しましたが\nファイル削除に失敗しました";
	}
} else {
	echo "失敗";
}

?>
