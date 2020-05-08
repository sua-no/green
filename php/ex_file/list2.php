<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/ex_file/db.php";

    $query = "SELECT * FROM files order by num desc";
    $result = mysqli_query($dbConnect, $query);

    while($row = mysqli_fetch_array($result)){
        $data = "<li><img src='{$row['name']}></li>";
    }

?>
<style>
    img{
        width:100px;
    }
</style>
<ul>
    <!-- <li><img src=""></li> -->
    <?=$data?>
</ul>