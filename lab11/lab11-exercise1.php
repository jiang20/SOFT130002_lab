<html lang="en">
<head>

<!-- Latest compiled and minified Bootstrap Core CSS -->
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
   <title>Exercise 11-1 | Using Cookies</title>
</head>

<body>
<header>
</header>


<?php
function getLoginForm(){
   return "
<form action='' method='post' role='form'>
<div class ='form-group'>
  <label for='username'>Username</label>
  <input type='text' name='username' class='form-control'/>
</div>
<div class ='form-group'>
  <label for='pword'>Password</label>
  <input type='password' name='pword' class='form-control'/>
</div>
<input type='submit' value='Login' class='form-control' />

</form>";
}

function validLogin(){
    $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
    //very simple (and insecure) check of valid credentials.
    $sql = "SELECT * FROM Credentials WHERE Username=:user and Password=:pass";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(':user',$_POST['username']);
    $statement->bindValue(':pass',$_POST['pword']);
    $statement->execute();
    if($statement->rowCount()>0){
        return true;
    }
    return false;
}

function logout(){
    return"
    <a href='logout1.php'><button>logout</button></a>";
}
function get_current_url(){
    $current_url='http://';
    if(isset($_SERVER['HTTPS'])&&$_SERVER['HTTPS']=='on'){
        $current_url='https://';
    }
    if($_SERVER['SERVER_PORT']!='80'){
        $current_url.=$_SERVER['SERVER_NAME'].':'.$_SERVER['SERVER_PORT'].$_SERVER['REQUEST_URI'];
    }else{
        $current_url.=$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];
    }
    return $current_url;
}

?>
 <div class="container theme-showcase" role="main">  
      <div class="jumbotron">
          <h1>
<?php
   require_once("config.php");
//   if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     echo "Login attempted";
//   }
//   else{
//     echo "No Post detected";
//   }
//    $loggedIn=false;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(validLogin()){
            echo "Welcome3 ".$_POST['username'];
//            $loggedIn=true;
            // add 1 day to the current time for expiry time
            $expiryTime = time()+60*60*24;
            setcookie('Username', $_POST['username'], $expiryTime);
//            echo $_COOKIE['Username'];
//            echo $_POST['username'];
            $url = get_current_url();
            header("location:".$url);
        }
        else{
            echo "login unsuccessful";
        }
    }
    else if(isset($_COOKIE['Username'])){
        echo "Welcome ".$_COOKIE['Username'];
    }
    else{
        echo "No Post detected";
    }
?>

</h1>
      </div>

<?php
    //echo getLoginForm();
//    if(!$loggedIn){
//        echo getLoginForm();
//    } else{
//        echo "This is some content";
//}
    if (!isset($_COOKIE['Username'])){
        echo getLoginForm();
    }
    else{
        echo "This is some content\n";
        echo logout();
    }
    ?>

 </div>
</body>
</html>
