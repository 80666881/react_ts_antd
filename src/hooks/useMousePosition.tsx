import React, { useState, useEffect } from 'react'

//必须以use开头，不同hook不会共享state
const useMousePosition = () => {
    const [positions, setPositions] = useState({ x: 0, y: 0 })
    useEffect(() => {
        console.log('useMousePosition effect is running',positions.x);
        const updateMouse = (e: MouseEvent) => {     
            setPositions({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('mousemove', updateMouse)
        return () => {
            console.log('remove effect', positions.x);
            document.removeEventListener('mousemove', updateMouse)
        }
    },[])
    return positions
}

export default useMousePosition