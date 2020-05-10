import React,{useState} from 'react'

const LikeButton:React.FC = ()=>{
    const [like,setLike] = useState(0)
    return(
        <button onClick={()=>setLike(like+1)}>
            {like}赞
        </button>
    )
}

export default LikeButton