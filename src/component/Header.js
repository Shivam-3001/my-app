import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
    const navigateData = useNavigate()
    const handleNavigate = () => {
        navigateData('/about')
    }
  return (
    <div>
        Hello <br />
        My Name is {props.name}
        <button onClick={handleNavigate}> Go to about page</button>
    </div>
  )
}

export default Header