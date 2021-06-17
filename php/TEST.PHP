<?php

class TestCls
{
	static $SMsg;
	public $Msg;

	function __construct() {
		global $Msg;
		global $SMsg;
		global $ss;
		$Msg = 'A';
		$SMsg = 'sA';
		$this::$SMsg .= "zxx";
    }

	function aaa(){
		global $Msg;
		global $SMsg;
		$Msg .= "B";
		$SMsg .= "sB";
		//echo $Msg;
	}

	function GetMsg(){
		global $Msg;
		return $Msg;
	}

}

$obj = new TestCls();

$obj->aaa();
//$obj->Msg .= "q--------------";
//$obj->Msg .= "w--------------";
echo TestCls::$SMsg;
echo $obj->GetMsg();
//$obj->aaa();


?>
