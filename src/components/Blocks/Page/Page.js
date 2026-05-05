import style from './page.module.css'
export const Page = ({title}) => {
    return (
        <h1 className={style.page}>{title}</h1>
    )
}