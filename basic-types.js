//联合类型
//可以是number或者string
var numberOrString = 123;
//数组元素类型
var arrOfNumbers = [1, 2, 3];
// arrOfNumbers.push('str')//报错
//元组，数组里放不同类型的
var user = ['viking', 20];
var viking = {
    id: 1234,
    name: 'aa',
    age: 20,
    sex: 'male'
};
//Cannot assign to 'id' because it is a read-only property.ts(2540)
// viking.id = 333
//函数
function add(x, y, z) {
    return x + y + (z ? z : 0);
}
add(1, 2, 3);
//函数表达式
//箭头是ts中声明函数类型返回值的方法
var add2 = add;
//类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var snake = new Animal('lily');
console.log(snake.run());
