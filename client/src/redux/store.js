import { configureStore } from '@reduxjs/toolkit'
import toggleAddTaskSliceReducer from './toggleAddTaskSlice'

const store = configureStore({
  reducer: {
    mainToggleAddTaskSliceReducer:toggleAddTaskSliceReducer
  },
})

export default store
