<?php

// セッション開始
session_start();

// リロード判定用セッションデータが存在するか確認
if( isset($_SESSION['access_count_reload']) ){
        $IsReloaded = true; // セッションデータがある
} else {
        $IsReloaded = false; // セッションデータが無い
}

//print( $_SESSION['access_count_reload'] );
//print( $reloaded );

// リロード判定用セッションデータを作成
$_SESSION['access_count_reload'] = 0;

$cnt = (int) file_get_contents('count');

if( !$IsReloaded ){
        $cnt++;
        file_put_contents( 'count' ,  $cnt );
}

print( $cnt );

?>
