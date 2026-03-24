import { useLocation, useNavigate } from 'react-router-dom'
import style from './relative.module.css'
export const Relative = () => {

    const navigate = useNavigate()
    const {pathname}=useLocation()
    const paths = pathname.split('/')
    return (
        <div>
            {
            paths.at(-1) === 'all' ? <p onClick={()=>{navigate('/inventory')}}>rentals</p> :
            paths.filter((p)=>{
                return p!=='all'
            }).map((p,i)=>{
                let step = (paths.length-1 - i)*-1
                return <p key={p} onClick={()=>{navigate(step)}} >{p.replaceAll('%20',' ')}</p>
            })}
        </div>
    )
}