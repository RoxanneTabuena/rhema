import style from './group.module.css'
import { Line } from './Line/Line'
export const Group = ( {title, link, kids}   ) => {
    return (
        <div className={style.group}>
            <Line title={title} link={link}/>
            <div className={style.kids}>
                {kids.map(([key, node])=>{
                    return <Line key={key} title={key} link={node.link}/>
                })}
            </div>
        </div>
    )
}