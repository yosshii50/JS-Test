<?php

echo "<li>";

if ( isset($l) ) {
    echo $l;
    unset($l);
}

echo '<a href="' . $a .'">' . $n . "</a>";
echo ' (<a href="php/code.php?a=../' . $a . '">Code</a>';

if ( isset($p) ) {
	echo '/<a href="php/code.php?a=../' . $p . '">PHP</a>';
    unset($p);
}

echo ')';

echo "<br>\n";

?>
