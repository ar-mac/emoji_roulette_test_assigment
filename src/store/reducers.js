import { combineReducers } from 'redux'
import registrationForm from './RegistrationForm/reducer'
import roulette from './Roulette/reducer'

const todoApp = combineReducers({
  roulette,
  registrationForm
})

export default todoApp
