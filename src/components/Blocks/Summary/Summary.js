import style from './summary.module.css'
export const Summary = ({summary}) => {
    return (
        <p className={style.summary}>{summary}</p>
    )
}