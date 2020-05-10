//type aliases
type PlusType = (x:number,y:number)=>number

function sum(x:number,y:number):number{
    return x+y
}
const sum2:PlusType = sum

type NameResolver = ()=>string
type NameOrResolver = string|NameResolver
function getName(n:NameResolver):string{
    if(typeof n === 'string'){
        return n
    }else{
        return n()
    }
}

//type assertion
function getLength(input:string|number):number{

    //断言为string
    const str = input as String //告诉编译器，我知道是string类型,防止报错
    if(str.length){
        return str.length
    }else{
        const number = input as Number
        return number.toString().length
    }

    //快捷写法
    if((<string>input).length){
        return(<string>input).length
    }else{
        return input.toString().length
    }
}

