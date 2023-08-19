import * as AuthApi from '../API/AuthRequest'

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: 'LOGIN_START' })
  try {
    const { data } = await AuthApi.logIn(formData)
    console.log(data)
    dispatch({ type: 'LOGIN_SUCCESS', data })
  } catch (err) {
    console.log(err)
    dispatch({ type: 'LOGIN_FAIL' })
  }
}
export const logOut = () => (dispatch) => {
  console.log('hello')
  dispatch({ type: 'LOG_OUT' })
}
