<html>
<meta http-equiv="content-type" charset="utf-8">
        <head>
                <title>‚»‚Ì‚Ü‚Ü•\Ž¦</title>
                <link rel="icon" href="/favicon.ico">
        </head>
        <body>
        <pre><code><?php

$adr = $_REQUEST['a'];
//echo '<pre>';

$data = file_get_contents( $adr );
//$data = readfile( $adr );
$data = str_replace( '<' , '&lt;' , $data );
$data = str_replace( '>' , '&gt;' , $data );
echo $data;

?>
</code></pre>
        </body>
</html>
