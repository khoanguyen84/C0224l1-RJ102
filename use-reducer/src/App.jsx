import { useReducer } from 'react'
import './App.css'
import reducer, { initState } from './reducers/reducer'
import { decrementAction, incrementAction, setValueAction } from './reducers/actions'

/**
 * useReducer có thể thay thế cho useState và ngược lại
 * const [state, dispatch] = useReducer(reducer, initState)
 * -> reducer: hàm
 *    -> input: state, action
 *           -> action: { type, payload }
 *                -> type: tên của action (phân loại action)
 *                -> payload: dữ liệu sử dụng để cập nhật state
 *    -> output: trả về new state, phụ thuộc action
 * -> initState: dữ liệu khởi tạo, sẽ được gán lần đầu tiên cho state
 */

/**
 * action creator => là 1 hàm => tạo ra 1 action
 * 
 */


function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div className='container'>
      <input
        type="number"
        className='form-control'
        value={state.value}
        onInput={(e) => dispatch(setValueAction(Number(e.target.value)))}
      />
      <h1 className='display-3'>{state.count}</h1>
      <button className='btn btn-primary'
        onClick={() => dispatch(decrementAction())}
      >Descrement</button>
      <button className='btn btn-success'
        onClick={() => dispatch(incrementAction())}
      >Increment</button>
    </div>
  )
}

export default App
