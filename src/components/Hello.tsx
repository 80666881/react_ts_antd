import React from 'react'
interface IHelloProps{
    message?:string
}

//接口IHeoolProps定义泛型的具体结构，经过泛型修饰，props有了ReactElement的一些功能，比如children,也能获得其defaultProps

const Hello:React.FC<IHelloProps> = (props) => {
    return (
        <h2>{props.message}</h2>
    )
}
Hello.defaultProps = {
    message:'hello----'
}

export default Hello