import axios from 'axios'

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" })
    try {
        const res = await axios.post("https://db-chat-test-qllg0w1a5-neriheredia.vercel.app/api/auth/login", userCredential)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err })
    }
}