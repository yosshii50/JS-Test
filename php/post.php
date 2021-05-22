<?php
//	if(isset($_POST['fname'])) {
//		$fname = $_POST['fname'];
//		if(isset($_POST['data'])) {
//			$data = $_POST['data'];
//			define("TESTFILE","w/" . $fname);
//			file_put_contents(TESTFILE,$data);
//		}
//	}

$uploadfile = '/var/www/uploads/' . basename($_FILES['file_upload']['name']);

if (move_uploaded_file($_FILES['file_upload']['tmp_name'], $uploadfile)) {
    //echo "File is valid, and was successfully uploaded.\n";
} else {
    echo "Possible file upload attack!\n";
}


$filename = $_FILES['file_upload']['name'];

?>
