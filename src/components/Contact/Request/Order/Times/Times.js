import { Time } from '../../../inputs/Time'
import { useContext } from 'react'
import { CartContext } from '../../../../../context/CartContext'
export const Times = () => {
    const [ state, dispatch ] = useContext(CartContext)
    const {times} = state
    
    const setPickupTime = (value) => {
        const action = { type: 'PICKUP_TIME', payload: value }
        dispatch(action)
    }
    
    const setDropoffTime = (value) => {
        const action = { type: 'DROPOFF_TIME', payload: value }
        dispatch(action)
    }

    return (
        <div >
            <Time id="pickup" onChange={setPickupTime} value={times.pickup}/>
            <Time id="dropoff" onChange={setDropoffTime} value={times.dropoff}/>
        </div>
    )
}