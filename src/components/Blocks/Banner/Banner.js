import { Title } from '../Title/Title'
import { Summary } from '../Summary/Summary'
import style from './banner.module.css'
export const Banner = ({title, summary}) => {
    return (
        <div className={style.banner}>
            <Title title={title}/>
            <Summary summary={summary}/>
        </div>
    )
}