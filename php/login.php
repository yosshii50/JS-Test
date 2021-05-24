<?php






foreach( $_FILES as $value ) {
	
	//print_r( $value );
	//echo '<br>';

	$upload_temp = $value['tmp_name'];
	$upload_name = $value['name'];
	$uploadfile  = 'upload/' . $upload_name;

	echo $upload_name . " → ";

	if ( move_uploaded_file( $upload_temp , $uploadfile ) ){
		//echo "成功";
		if( @unlink( $uploadfile ) ){ // [@]を付けるとエラーメッセージが出力されない
		//if( @unlink( $uploadfile . "a" ) ){ // エラーテスト用
			echo "成功(アップロードしたファイルは削除しました)<br>";
		} else {
			echo "アップロードには成功しましたが、ファイル削除に失敗しました<br>";
		}
	} else {
		echo "アップロードに失敗<br>";
	}

 }

?>
