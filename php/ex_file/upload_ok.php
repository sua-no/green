<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/ex_file/db.php";


    $file = $_FILES['upload'];

    echo "<pre>";
    var_dump($file);
    echo $file['name'];
    echo $file['size'];
    echo $file['tmp_name'];

    $fileName = $file['name'];
    $tmp = $file['tmp_name'];
    $uploadUrl = './'.$file['name'];

    if(move_uploaded_file($tmp,$uploadUrl)){
        echo "업로드 성공";
    }else{
        echo "업로드 실패";
    }

    $query = "INSERT INTO files (name) values ('$fileName');";
    mysqli_query($dbConnect,$query);
?>

<img src="?=<$fileName?>">