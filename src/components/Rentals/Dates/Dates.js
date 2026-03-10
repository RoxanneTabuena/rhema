import { Date } from '../../Contact/inputs/Date'
import { useContext } from 'react'
import style from './dates.module.css'
import { CartContext } from '../../../context/CartContext'
export const Dates = () => {
    const [ state, dispatch ] = useContext(CartContext)
    const {dates} = state
    
    const setPickupDate = (value) => {
        const action = { type: 'PICKUP_DATE', payload: value }
        dispatch(action)
    }
    
    const setDropoffDate = (value) => {
        const action = { type: 'DROPOFF_DATE', payload: value }
        dispatch(action)
    }

    return (
        <div className={style.dates}>
            <Date id="pickup" onChange={setPickupDate} value={dates.pickup}/>
            <Date id="dropoff" onChange={setDropoffDate} value={dates.dropoff}/>
        </div>
    )
}