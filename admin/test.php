<?php





$dsn = 'mysql:dbname=php;host=localhost';
$user = 'php';
$password = 'php';

    $dbh = new PDO($dsn, $user, $password);

    $sql = 'select * from users';
    foreach ($dbh->query($sql) as $row) {
        print($row['num'].',');
        print($row['login_name']);
        print('<br>');
    }


$dbh = null;

print( 'iaaa' );

?>
