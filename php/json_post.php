<?php

$buff = file_get_contents('php://input');
$json = json_decode($buff, true);

$d001 = $json['d001'];
$d002 = $json['d002'];

//echo "d001=[" . $d001 . "]";
//echo "d002=[" . $d002 . "]";

$arr = array(
	  'DATA1' => "d001=[" . $d001 . "]"
	, 'DATA2' => "d002=[" . $d002 . "]"
	, 'a' => 1
	, 'b' => 2
	, 'c' => 3
);

echo json_encode($arr);

?>
