import { decrement, increment } from "./actions";
import {useDispatch, useSelector} from 'react-redux';

const App = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return(
        <>
        <h1>Counter Example</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        </>
    )
}
export default App;