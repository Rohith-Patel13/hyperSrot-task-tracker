import { configureStore } from '@reduxjs/toolkit'
import toggleAddTaskSliceReducer from './toggleAddTaskSlice'
import taskSliceReducer from './taskSlice'

const store = configureStore({
  reducer: {
    mainToggleAddTaskSliceReducer:toggleAddTaskSliceReducer,
    mainTaskSliceReducer:taskSliceReducer,
  },
})

export default store
