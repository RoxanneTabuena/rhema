import { Page } from '../Page/Page'
import { Summary } from '../Summary/Summary'
import style from './banner.module.css'
export const Banner = ({title, summary}) => {
    return (
        <div className={style.banner}>
            <Page title={title}/>
            <Summary summary={summary}/>
        </div>
    )
}