
//类
class Animal{
    name:string;
    constructor(name:string){
        this.name = name
    }
    run(){
        return `${this.name} is running`
    }
}
const snake = new Animal('lily')
console.log(snake.run());

//继承
class Dog extends Animal{
    bark(){
        return `${this.name} is barking`
    }
}

const xiaobao = new Dog('xiaobao')
 console.log(  xiaobao.run() );
 console.log(  xiaobao.bark() );


 class Cat extends Animal{
     static category:string[] = ['mamal','bird']
     private age:number
     constructor(name:string,age?:number){
        super(name)
        console.log((this.name));
        this.age = age
        console.log('this.age',age);
     }

     run(){
         return 'cat, '+super.run()
     }
 }


 //默认属性都是public
 //protected子类可以访问父类属性
 //private只有类的内部能访问
 //readony 实例可读
 //static 静态
//  console.log('111',maomao.age);//Property 'age' is private and only accessible within class 'Cat'.
const maomao = new Cat('maomao',4)
console.log(maomao.run());
console.log(Cat.category);



