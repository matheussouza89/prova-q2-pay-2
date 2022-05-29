import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, AppState } from 'redux/store'

export default function useRedux() {
  const dispatch = useDispatch<AppDispatch>()
  const appSelector: TypedUseSelectorHook<AppState> = useSelector
  return { dispatch, appSelector }
}
