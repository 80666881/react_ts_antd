import React, { useState, useEffect,useRef } from 'react'
import useMousePosition from '../hooks/useMousePosition'
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(false)
    const likeRef = useRef(0)
    const didMoutRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        console.log('like Button effect is running');
        //告诉react渲染后执行哪些操作
        document.title = `点击了${like}次`
    },[like])
    useEffect(()=>{
        if(didMoutRef.current){
            console.log('update.....');
        }else{
            didMoutRef.current = true
        }
    })
    useEffect(()=>{
        if(domRef && domRef.current){
            domRef.current.focus()
        }
    })
    return (
        <>
            <button onClick={() => {setLike(like + 1);likeRef.current++}}>
                {like}赞
            </button>
            <input type="text" ref={domRef}/>
            <button onClick={()=>setTimeout(()=>{alert(likeRef.current)},1000)}>Alert</button>
            <button onClick={() => setOn(!on)}>
                {on?'on':'off'}
            </button>
        </>
    )
}

export default LikeButton