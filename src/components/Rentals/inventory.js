import { Summary } from '../Blocks/Summary/Summary'
import { useLocation } from 'react-router-dom'
import { Display } from './Display/Display'
import { Dates } from './Dates/Dates'
import { Relative } from './relative/Relative'
import style from './inventory.module.css'
export const Inventory = () => {
    const {pathname} = useLocation()
    return (
    <div className={style.inventory}>
            { pathname === '/inventory' &&             
            <Summary 
                summary='Browse top of the line gear to complete your sound'
            />
            }
            <Relative/>
            <Dates/>
            <Display key={pathname}/>
    </div>)
} 