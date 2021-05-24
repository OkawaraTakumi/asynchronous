import axios from 'axios'

export const GET_POSTS_REQUEST ='GET_POSTS_REQUEST';
const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST
    }
}

export const GET_POSTS_SUCCESS ='GET_POSTS_SUCCESS';
const getPostsSuccess = (json) => {
    console.log(json)
    return {
        type: GET_POSTS_SUCCESS,
        posts:json,
        receivedAt: Date.now()
    }
}

export const GET_POSTS_FAILURE ='GET_POSTS_FALURE';
const getPostsFailure = (error) => {
    return {
        type: GET_POSTS_FAILURE,
        error
    }
}

export const getPosts = () => {
    return (dispatch) => {
        dispatch(getPostsRequest())
        return axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?',{
            params:{
                applicationId:'1081419145541583133',
                keyword:'サッカー'
            }
        })
        .then(res => {
            console.log(res)
            dispatch(getPostsSuccess(res.data.Items))
            }
            ).catch(err => 
                dispatch(getPostsFailure(err)))
    }
}
