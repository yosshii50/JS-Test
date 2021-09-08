<?php

$buff = file_get_contents('php://input');
$json = json_decode($buff, true);

if( ! isset($json['data']) ){
	echo "E1";
	exit(1);
}

if( ! preg_match('/^data:image\/png;base64,/', $json['data']) ){
	echo "E2";
	exit(1);
}

$data = $json['data'];
$data = str_replace('data:image/png;base64,', '', $data);  // 先頭部分を削除
$data = str_replace(' ', '+', $data);  // [ ]を[+]に変換
$image = base64_decode($data);

$file = sprintf('%s.png', uniqid() );
$result = file_put_contents( 'upload\\' . $file , $image , LOCK_EX );

echo $file;

?>
