import { Line } from './Line/Line'
import style from './group.module.css'
export const Group = ({children}) => {

    return (
        <div className={style.group}>
            { children.map((c)=>{
                return <Line key={c.key} link={c.value} title={c.key}/>
            })}
        </div>
    )
}