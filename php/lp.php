<?php

echo "<li> [PHP]";
// echo "aaaaaaaaa" . $a;
echo ' <a href="' . $a .'">' . $n . "</a>";
echo ' (<a href="php/code.php?a=../' . $a . '">Code</a>';

if( $p != '' ){
	echo '/<a href="php/code.php?a=../' . $p . '">PHP</a>';
}

echo ")";


// <a href="js-exp/Camera-Test.html">カメラ動作確認用</a>

echo "<br>\n";


?>
