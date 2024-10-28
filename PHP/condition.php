<?php
// Online PHP compiler to run PHP program online
// Print "Try programiz.pro" message
echo "Try programiz.pro";
$r = 10;
if($r == 10){
    echo "i have good"
}

$a = 200;
$b = 33;
$c = 500;


if($a > $b  &&  $a < $c){
    echo "pass";
}else{
    echo "fail";
}

$a = 5;

if ($a == 2 || $a == 3 || $a == 4 || $a == 5 || $a == 6 || $a == 7) {
  echo "$a is a number between 2 and 7";
}


$a = 5;

if ($a < 10) $b = "Hello";

echo $b


$a = 13;

$b = $a < 10 ? "Hello" : "Good Bye";

echo $b;

$e = 13
if($e == 10){
    echo("pass");
    if($e > 20){
        echo "value is high"
    }else{
        echo "value not high"
    }
}

$favcolor = "red";

switch($favcolor){
    case "red":
        echo  "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}
?>