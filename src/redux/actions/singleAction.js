export const singleAction = ({ type, payload }) => dispatch => {
    dispatch({
        type,
        payload
    })
}

export default singleAction
