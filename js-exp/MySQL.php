<?php

if( $Lnk = mysqli_connect( 'localhost' , 'php' , 'php' , 'php' ) ){
	echo 'OK<br>';
	
	if( $result = mysqli_query( $Lnk , "SELECT 'select ok' as msg FROM DUAL;" ) ){
	
		echo "SELECT文実行に成功<br>";

		foreach ($result as $row) {
			echo $row['msg'] . '<br>';
		}
		
		echo "SELECT済<br>";

	}

	mysqli_close( $Lnk );

} else {
	echo 'Err';
}

?>
