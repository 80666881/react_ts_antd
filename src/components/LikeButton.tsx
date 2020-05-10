import React, { useState, useEffect } from 'react'
import useMousePosition from '../hooks/useMousePosition'
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(false)
    const positions = useMousePosition()
    useEffect(() => {
        console.log('like Button effect is running');
        //告诉react渲染后执行哪些操作
        document.title = `点击了${like}次`
    },[like])
    return (
        <>
            <button onClick={() => setLike(like + 1)}>
                {like}赞
            </button>
            <button onClick={()=>setTimeout(()=>{alert(like)},1000)}>Alert</button>
            <button onClick={() => setOn(!on)}>
                {on?'on':'off'}
            </button>
        </>
    )
}

export default LikeButton