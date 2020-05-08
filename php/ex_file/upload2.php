<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/ex_file/db.php";
?>

<form method="post" action="upload_ok2.php" enctype="multipart/form-data">
    <input type="file" name="upload[]">
    <input type="file" name="upload[]">

    <input type="submit" value="upload">
</form>