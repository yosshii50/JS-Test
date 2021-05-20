<?php
// cd /var/www/tcpdf
// sudo git clone https://github.com/tecnickcom/TCPDF.git
require_once( '/var/www/tcpdf/TCPDF/tcpdf.php' );

//$pdf = new TCPDF( "L", "mm", "A4" , true, "UTF-8" );
$pdf = new TCPDF( "L", "mm", array( 100,100) , true, "UTF-8" );

$pdf->AddPage();


// �������y�[�W�@�\��OFF
$bMargin = $pdf->getBreakMargin();
$auto_page_break = $pdf->getAutoPageBreak();
$pdf->SetAutoPageBreak(false, 0);

// �y�[�W�S�̂ɉ摜�𒣂�t��
$pdf->Image('/var/www/img.jpg', 0, 0, 50, 50, '', '', '', false, 300, '', false, false, 0);

// �y�[�W�ݒ�����ɖ߂�
$pdf->SetAutoPageBreak($auto_page_break, $bMargin);


$pdf->SetFont( "kozgopromedium", "", 12 );
$pdf->Text( 10, 10, "�e�X�gPDF�t�@�C��" );

$pdf->Output("test.pdf", "I");

?>
