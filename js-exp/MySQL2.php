<?php

class MySQLConCls
{
	public $Lnk;
	public $Msg;

	function __construct() {
		global $Lnk;
		global $Msg;
		$Msg = '';

		// 手続き型
		//if( $Lnk = mysqli_connect( 'localhost' , 'php' , 'php' , 'php' ) ){

		// 呼び出し元クラス直下で定義して、コンストラクターにtry関数、クローズ関数に引数追加して、やり取りするとスマート

		// オブジェクト型
		if( $Lnk = new mysqli( 'localhost' , 'php' , 'php' , 'php' ) ){

			$Msg .= 'OK<br>';
		
			if( $result = mysqli_query( $Lnk , "SELECT 'select ok' as msg FROM DUAL;" ) ){
	
				$Msg .= "SELECT文実行に成功<br>";

				foreach ($result as $row) {
					$Msg .= $row['msg'] . '<br>';
				}
				
				$Msg .= "SELECT済<br>";

			}

//			mysqli_close( $Lnk );

		} else {
			$Msg .= 'Err';
		}

		return( $Lnk );
		//echo $Msg;
    }
	
	// 終了
	function DB_Close(){
		global $Lnk;
		mysqli_close( $Lnk );
    }

	// テーブルが存在しなければ作成
	function DB_Check_TableExi( $table_name , $CreateDDL){
		global $Lnk;
		global $Msg;
		$Msg = '';
		
		//echo "SHOW TABLES LIKE '" . $table_name . "';";

		if( $result = mysqli_query( $Lnk , "SHOW TABLES LIKE '" . $table_name . "';" ) ){
			//$Msg .= "DB_Check_TableExi OK<br>";
			$Msg .= "DB_Check_TableExi<br>";
			
			$IsNoData = True;

			foreach ($result as $row) {
				//$Msg .= $row[1] . '<br>';
				foreach ($row as $aaa) {
					if( strtoupper($aaa) != strtoupper($table_name) ){
						$Msg .= $aaa . '<br>';
						$Msg .= $table_name . '<br>';
						$Msg .= $CreateDDL . '<br>';
					}
				}
			}

		} else {
			$Msg .= "DB_Check_TableExi NG<br>";
		}

		echo $Msg;
	}


	function aaa(){
		global $Msg;
		$Msg .= "b";
		echo $Msg;
	}

}

$obj = new MySQLConCls();

//$obj->DB_Check_TableExi( 'test' , '' );
$TABLENM = "MEMBERS";
$CSQL = "";
$CSQL .= "CREATE TABLE " . $TABLENM;
$CSQL .= "(id   varchar(256)";
$CSQL .= ",name varchar(256)";
$CSQL .= ")";
//$CSQL .= "ALTER TABLE " . $TABLENM;
//$CSQL .= "ADD CONSTRAINT PK_" . $TABLENM . " PRIMARY KEY ( id )";
$CSQL .= ";";
$obj->DB_Check_TableExi( $TABLENM , $CSQL );

//$obj->aaa();
//$obj->Msg .= "--------------";
//$obj->aaa();

//echo $obj->Msg;


$obj->DB_Close();


?>
