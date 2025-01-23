import { useEffect } from "react"
import {useState} from 'react'


//1. useEffect(callback)
//- Gọi callback mỗi khi component re-render
//- Gọi callback sau khi component thêm element vào DOM
//2. useEffect(callback, [])
//- Chỉ gọi callback 1 lần sau khi component mound
//3. useEffect(callback,[deps])



function Content(){

    const [title, setTitle]=useState('')

    useEffect(()=>{
        document.title=title
    })
    
    return (
        <div>
            <input
                value={title}
                onChange={e=>setTitle(e.target.value)}
            />
        </div>
    )
}


export default Content