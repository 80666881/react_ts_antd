//传入值得类型和return类型要一致的情况
function echo<T>(arg:T):T{
    return arg
}
echo('str')
echo(123)

//元组
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}


//约束泛型
// function echoWithArr<T>(arg:T):T{
//     console.log(arg.length);//arg需要有lengt属性
//     return arg
// }

//T[] 类似 string[]
//输入可以是字符串数组，但是输出是数字，所以不能这么写
// function echoWithArr<T>(arg:T[]):T{
//     console.log(arg.length);//arg需要有lengt属性
//     return arg.length
// }


//这样写是正确的
function echoWithArr<T>(arg:T[]):number{
    console.log(arg.length);//arg需要有lengt属性
    return arg.length
}

//泛型约束
//只允许函数传入包含length属性的变量
interface IWithLength {
    length:number|string //length可以是字符串或者number
}
function echoWithLength<T extends IWithLength>(arg:T):T{
    // return arg.length   //返回T类型，arg.length指定为数字类型，不通过
    return arg
}
// echoWithLength({a:1})//不通过，没有length属性
echoWithLength({a:1,length:'2'})



//除了在函数的参数和返回值中，泛型还可以在其他场合使用
//1.在类中使用
class Queue<T>{
    private data = []
    add(item:T){
        return this.data.push(item)
    }
    remove():T{
        return this.data.shift()
    }
}
//通过尖括号指定返回number
const queue = new Queue<number>()
queue.add(1)
// queue.add('2')//不通过只能添加number



//2.在接口使用
interface KeyPair<T,U>{
    key:T;
    value:U;
}
let kp1:KeyPair<number,string> = {
    key:123,
    value:'abc'
}

let kp2:KeyPair<string,number> = {
    key:'abc',
    value:123
}

//3.在数组中使用
let arr:number[] = [1,2,3]
let arrTwo:Array<number> = [1,2,3]


//3.interface描述函数type
interface Iplus<T>{
    (a:T,b:T):T
}
function plus(a:number,b:number):number{
    return a+b
}
function connect(a:string,b:string):string{
    return a+b
}
const a:Iplus<number> = plus
const b:Iplus<string> = connect



