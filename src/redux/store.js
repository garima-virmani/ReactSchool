import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './feature'

export const store = configureStore({
  reducer: {
    operation : sliceReducer,
  },
})