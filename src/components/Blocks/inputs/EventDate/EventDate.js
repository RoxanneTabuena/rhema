import { useContext } from 'react'
import style from './eventDate.module.css'
import { CartContext } from '../../../../context/CartContext'

export const EventDate = () => {
    const [ state, dispatch ] = useContext(CartContext)
    const {dates} = state

    const setStartDate = ({value}) => {
        const action = { type: 'START_DATE', payload: value }
        dispatch(action)
    }

    return (
        <div className={style.eventDate}>
            <p>date:</p>
            <input 
                type="date"
                onChange={(e)=>{setStartDate(e.target)}}  
                value={dates.start} 
                min={new Date()}
            ></input>
        </div>
    )
}

