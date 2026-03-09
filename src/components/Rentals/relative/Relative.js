import { useLocation, NavLink } from 'react-router-dom'
import style from './relative.module.css'
export const Relative = () => {
    const {pathname} = useLocation()
    const paths = pathname.split('/')
    return (
        <div className={style.relative}>
            {paths.map((p,i)=>{
                p=p.replace('%20',' ')
                let route = paths.filter((r, index)=>{
                    return index <= i
                }).join('/')
                if(i>0 && p!== 'all'){
                    return    <NavLink key={p} to={route}>{p}</NavLink>
                }
            })}
        </div>
    )
}