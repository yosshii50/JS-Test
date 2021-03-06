<?php
// cd /var/www/tcpdf
// sudo git clone https://github.com/tecnickcom/TCPDF.git
require_once( '/var/www/tcpdf/TCPDF/tcpdf.php' );

//$pdf = new TCPDF( "L", "mm", "A4" , true, "UTF-8" );
$pdf = new TCPDF( "L", "mm", array( 100,100) , true, "UTF-8" );

$pdf->AddPage();

$pdf->SetFont( "kozgopromedium", "", 12 );
$pdf->Text( 10, 10, "納品書" );
$pdf->Text( 10, 20, "株式会社電産製作所" );

// 画像を張り付け
$pdf->Image('/var/www/html/pdf/seal_maru.png', 10, 10, 20, 20, '', '', '', false, 300, '', false, false, 0);
$pdf->Image('/var/www/html/pdf/seal_kaku.png', 10, 20, 20, 20, '', '', '', false, 300, '', false, false, 0);

$pdf->Output("test.pdf", "I");

?>
