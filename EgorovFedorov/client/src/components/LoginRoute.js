import React from 'react'
import { Route, Navigate } from 'react-router-dom'

export const LoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (localStorage.getItem('accessToken') === null ? <Component {...props} /> : <Navigate to="/" />)} />
)
