import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrementWitchCheckingAction, increment } from "../../App/actions";




const Counter = () => {
    let {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(decrementWitchCheckingAction(1))}>-</button>
            {''} <span>{count}</span> {''}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;