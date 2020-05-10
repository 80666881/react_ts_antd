import React,{useState,useEffect} from 'react'

const LikeButton:React.FC = ()=>{
    const [like,setLike] = useState(0)
    useEffect(()=>{
        //告诉react渲染后执行哪些操作
        document.title = `点击了${like}次`
    })
    return(
        <button onClick={()=>setLike(like+1)}>
            {like}赞
        </button>
    )
}

export default LikeButton