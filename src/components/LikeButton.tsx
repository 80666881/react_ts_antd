import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(false)
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
            <button onClick={() => setOn(!on)}>
                {on?'on':'off'}
            </button>
        </>
    )
}

export default LikeButton