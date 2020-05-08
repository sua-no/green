<?php
    $root = $_SERVER["DOCUMENT_ROOT"];
    include_once $root."/ex_join/db.php";
    
    $num = $_GET["num"];
    $query = "delete from join_ where num='$num'";

    mysqli_query($dbConnect, $query);

    echo "<script>location.href='index.php';</script>"
?>