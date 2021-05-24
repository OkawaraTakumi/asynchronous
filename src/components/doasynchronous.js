import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/'
import posts from '../reeduders/asynchronous'

const DoAsynchronous = (props) => {


    return (
        <>
            <ul>
            {
            props.items.map((item, index) => {
                <li key={index}>{item}</li>
             })
            }
        </ul>
        </>
        
    )
}


const mapStateToProps = state => ({
    items:state.asynchronous.items
})

const mapDispatchToProps = dispatch ({
    getPosts:() => dispatch(getPosts())
})

export default connect(mapDispatchToProps,mapDispatchToProps)(DoAsynchronous)



