import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/'


const DoAsynchronous = (props) => {
    

    const dosome = () => {
        console.log(props.items)
    }

    return (
        <React.Fragment>
            <button onClick={props.getPosts}></button>
            <button onClick={dosome}></button>
            <ul>
                {props.items.map((item,index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </React.Fragment>
        
    )
}


const mapStateToProps = state => ({
    items:state.Asynchronous[0].items
})

const mapDispatchToProps = dispatch => ({
    getPosts:() => dispatch(getPosts())
})

export default connect(mapStateToProps,mapDispatchToProps)(DoAsynchronous)



