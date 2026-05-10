// import { Date } from '../../Contact/inputs/Date'
import { useContext } from 'react'
import style from './dates.module.css'
import { CartContext } from '../../../../context/CartContext'

export const Dates = ({type}) => {
    const [ state, dispatch ] = useContext(CartContext)
    const {dates} = state
    const labelsByType = {
        'live' : ['start:', 'end:'],
        'rental' : ['pickup:', 'dropoff:']
    }
    const setStartDate = ({value}) => {
        const action = { type: 'START_DATE', payload: value }
        dispatch(action)
    }
    
    const setEndDate = ({value}) => {
        const action = { type: 'END_DATE', payload: value }
        dispatch(action)
    }

    return (
        <div className={style.dates}>
            <div>
                <p>{labelsByType[type][0]}</p>
                <input 
                    type="date"
                    onChange={(e)=>{setStartDate(e.target)}}  
                    value={dates.start} 
                    min={new Date()}
                ></input>
            </div>
            <div>                
                <p>{labelsByType[type][1]}</p>
                <input
                    type="date"
                    onChange={(e)=>{setEndDate(e.target)}}  
                    value={dates.end} 
                    min={dates.start}
                ></input>
            </div>
        </div>
    )
}

