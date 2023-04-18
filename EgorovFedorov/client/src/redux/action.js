import { SET_USER } from './actionTypes'

export const setUser = login => {
  return {
    type: SET_USER,
    payload: {
      login: login,
    },
  }
}
