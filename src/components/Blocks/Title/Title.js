import style from './title.module.css'
export const Title = ({title}) => {
    return (
        <h1 className={style.title}>{title}</h1>
    )
}