// import { Date } from '../../Contact/inputs/Date'
import { useContext } from 'react'
import style from './dates.module.css'
import { CartContext } from '../../../context/CartContext'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
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
            <div>
                <p>pickup:</p>
                <DatePicker 
                    selected={dates.pickup} 
                    onChange={(date)=>{setPickupDate(date)}}  
                    calendarClassName={style.calendar} 
                    className={style.input}
                    peekNextMonth={true}
                    closeOnScroll
                    minDate={new Date()}
                />
            </div>
            <div>                
                <p>dropoff:</p>
                <DatePicker 
                    selected={dates.dropoff} 
                    onChange={(date)=>{setDropoffDate(date)}}  
                    calendarClassName={style.calendar} 
                    className={style.input}
                    peekNextMonth={true}
                    closeOnScroll
                    minDate={dates.pickup}
                />
            </div>
        </div>
    )
}

