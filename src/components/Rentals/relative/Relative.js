import { useLocation, useNavigate } from 'react-router-dom'
import style from './relative.module.css'
export const Relative = () => {

    const navigate = useNavigate()
    const {pathname}=useLocation()
    const paths = pathname.split('/')
    return (
        <div className={style.relative}>
            {
            paths.at(-1) === 'all' ? <div className={style.path} onClick={()=>{navigate('/inventory')}}><p className={style.page}>inventory</p></div> :
            paths.filter((p)=>{
                return p!=='all'
            }).slice(1,-1).map((p,i)=>{
                let step = (paths.length - 2) *-1 + i 
                return (
                    <div className={style.path} key={p} onClick={()=>{navigate(step)}} >
                        <p className={style.page}>{p.replaceAll('%20',' ')}</p>
                    </div>
                )
            })}
        </div>
    )
}