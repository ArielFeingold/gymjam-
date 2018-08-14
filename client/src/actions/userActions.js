export function signUp() {

  return function(dispatch){
    dispatch({type: 'SIGN_UP'})
    return fetch('http://localhost:4000/db')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATS', payload: responseJson.images})
    })

  }
}
