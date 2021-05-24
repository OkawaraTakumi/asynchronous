import{ GET_POSTS_REQUEST , GET_POSTS_SUCCESS , GET_POSTS_FAILURE } from '../actions/index'

const initialState = {
    isFetching: false,
    items:[]
}


const Asynchronous = (state = [initialState], action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return [...state,
                {
                isFetching:true,
                items:[]
                }
            ]
        case GET_POSTS_SUCCESS:
            let itemName = action.posts.map((item)=>{
                    return item.Item.itemName
            })
            console.log(itemName)
            return [
                {
                    isFetching:false,
                    items: itemName,
                    lastUpdated: action.receivedAt
                }
            ]
        case GET_POSTS_FAILURE:
            return [
                ...state,
                {
                    isFetching:false,
                    error:action.error
                }
            ]
        default:
            return state
    }
}

export default Asynchronous