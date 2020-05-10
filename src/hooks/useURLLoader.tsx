import {useState,useEffect} from 'react'
import axios from 'axios'


const useURLLoader = (url:string)=>{
    const [data,setData] = useState<any>(null)
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        console.log('url',url);
        
        setLoading(true)
        axios.get(url).then(result=>{
            console.log('result',result);
            
            setData(result.data)
            setLoading(false)
        }).catch(err=>{
            console.log('err',err);
            
        })
    },[url])
    return [data,loading]
}

export default useURLLoader

