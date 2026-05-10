
import { useContext } from 'react'
import style from './times.module.css'
import { CartContext } from '../../../../context/CartContext'

export const Times = ({type}) => {
    const [ state, dispatch ] = useContext(CartContext)
    const {times} = state
    const labelsByType = {
        'live' : ['start:', 'end:'],
        'rental' : ['pickup:', 'dropoff:']
    }
    const setStartTime= ({value}) => {
        const action = { type: 'START_TIME', payload: value }
        dispatch(action)
    }
    
    const setEndTime= ({value}) => {
        const action = { type: 'END_TIME', payload: value }
        dispatch(action)
    }

    return (
        <div className={style.times}>
            <div>
                <p>{labelsByType[type][0]}</p>
                <input 
                    type="time"
                    onChange={(e)=>{setStartTime(e.target)}}  
                    value={times.start} 
                ></input>
            </div>
            <div>                
                <p>{labelsByType[type][1]}</p>
                <input
                    type="time"
                    onChange={(e)=>{setEndTime(e.target)}}  
                    value={times.end} 
                ></input>
            </div>
        </div>
    )
}

