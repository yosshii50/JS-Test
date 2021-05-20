<?php
// cd /var/www/tcpdf
// sudo git clone https://github.com/tecnickcom/TCPDF.git
require_once( '/var/www/tcpdf/TCPDF/tcpdf.php' );

//$pdf = new TCPDF( "L", "mm", "A4" , true, "UTF-8" );
$pdf = new TCPDF( "L", "mm", array( 100,100) , true, "UTF-8" );

$pdf->AddPage();


// 自動改ページ機能をOFF
$bMargin = $pdf->getBreakMargin();
$auto_page_break = $pdf->getAutoPageBreak();
$pdf->SetAutoPageBreak(false, 0);

// ページ全体に画像を張り付け
$pdf->Image('/var/www/img.jpg', 0, 0, 50, 50, '', '', '', false, 300, '', false, false, 0);

// ページ設定を元に戻す
$pdf->SetAutoPageBreak($auto_page_break, $bMargin);


$pdf->SetFont( "kozgopromedium", "", 12 );
$pdf->Text( 10, 10, "テストPDFファイル" );

$pdf->Output("test.pdf", "I");

?>
