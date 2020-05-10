//联合类型

//可以是number或者string
let numberOrString:number|string = 123

//数组元素类型
let arrOfNumbers:number[] = [1,2,3]
// arrOfNumbers.push('str')//报错


//元组，数组里放不同类型的
let user:[string,number] = ['viking',20]


/**
 * interface 描述对象具体样子
 */
interface IPerson{
    readonly id:number;//只读属性，只在初始化的时候可以赋值
    name:string;
    age:number;
    sex?:string;//可选属性
}
let viking:IPerson = {
    id:1234,
    name:'aa',
    age:20,
    sex:'male'
}
//Cannot assign to 'id' because it is a read-only property.ts(2540)
// viking.id = 333



//函数
function add(x:number,y:number,z?:number):number{
    return x+y+(z?z:0)
}
add(1,2,3)

//函数表达式
//箭头是ts中声明函数类型返回值的方法
const add2:(x:number,y:number,z?:number)=>number = add

