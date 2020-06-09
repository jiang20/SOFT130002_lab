<?php
session_start();
require_once("config.php");?>
<?php
unset($_SESSION['Username']); // using sessions
header("Location: ".$_SERVER['HTTP_REFERER']);
?>