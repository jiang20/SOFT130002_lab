<?php require_once("config.php");?>
<?php
setcookie("Username", "", -1); // using cookies
header("Location: ".$_SERVER['HTTP_REFERER']);
?>