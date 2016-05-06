<?
$url = $_SERVER['REQUEST_URI'];
echo $url;

echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
?>