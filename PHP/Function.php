function getname($name , $year){
    echo "$name and $year";
}
getname("got",2024);

function calculate($x , $y){
    $z = $x + $y;
    return $z;
}
echo "7 + 8" . sum(7,8);

function add_five(&$value) {
  $value += 5;
}

$num = 2;
add_five($num);
echo $num;


function sumof($num){
    var $y = 0;
    for(var $i = 0; $i <= num.len; $i++){
        $y += $num[$i]
    }
    return $y;

}

<!-- typescriptfunction -->

<!-- function Sumof(n:number):void{
    console.log(n);
} -->

<!-- function Sumof(n:number):void{
    let np = n.map((n:number)=>n*2)
} -->