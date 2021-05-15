import React, {useState} from 'react'
import Menu from './Menu'

function Layout(props) {
    const [isopen, setIsopen] = useState(true)

    const toggle=() => {
        setIsopen(!isopen)
    }
    return (
        <>
           <Menu isopen={isopen} /> 
          {props.children}  
        </>
    )
}

export default Layout
