enum Direction{
    Up,//默认value为inedx
    Down = 'DDD',//声明value后，后面都要声明，就不能再用index访问了
    Left =222,
    Right = "RRR"
}

console.log(Direction.Up);//0
console.log(Direction[0]);//up
console.log(Direction.Left);//


