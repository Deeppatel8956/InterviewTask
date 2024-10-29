<?php
// Online PHP compiler to run PHP program online
// Print "Try programiz.pro" message
echo "Try programiz.pro";
$i = 3;
while($i <= 6){
    echo $i;
    $i++;
}


$i = 3;
while($i <= 6){
    if($i == 2)break;
    echo $i;
    $i++;
}


$i = 3;
while($i <= 6){
    $i++;
    if($i == 2)continue;
    echo $i;
}

for($x = 0; $x <= 10; $x++ ){
    if($x == 5)continue;
    echo $x;
}

for($x = 0; $x <= 10; $x++){
    if($x == 3)break;
    echo $x;
}

$colors = array("red", "green", "blue", "yellow");


foreach ($colors as $x){
    echo $x;
}

foreach ($colors as $x){
    if($x == "red")break;
    echo $x;
}

foreach ($colors as $x){
    if($x == "blue")continue;
    echo $x;
}

$members = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
foreach ($members as $x => $y){
    echo "$x : $y"
}

?>