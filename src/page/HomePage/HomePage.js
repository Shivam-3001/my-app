import React from 'react'
import Footer from '../../component/Footer'
import Header from '../../component/Header'

const HomePage = (props) => {
    return (
        <div>
            <Header name={props.name} />
            <br />
            <br />
            This is Home Page Section
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default HomePage