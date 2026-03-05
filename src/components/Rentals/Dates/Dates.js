import { Date } from '../../Contact/inputs/Date'
import { useContext } from 'react'
import style from './dates.module.css'
import { CartContext } from '../../../context/CartContext'
export const Dates = () => {
    const [ state, dispatch ] = useContext(CartContext)
    const {dates} = state
    
    const setPickup = (value) => {
        const action = { type: 'PICKUP', payload: value }
        dispatch(action)
    }
    
    const setDropoff = (value) => {
        const action = { type: 'DROPOFF', payload: value }
        dispatch(action)
    }

    return (
        <div className={style.dates}>
            <Date id="pickup" onChange={setPickup} value={dates.pickup}/>
            <Date id="dropoff" onChange={setDropoff} value={dates.dropoff}/>
        </div>
    )
}