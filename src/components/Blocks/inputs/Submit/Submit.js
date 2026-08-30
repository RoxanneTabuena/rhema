import style from './submit.module.css'
export const Submit = ({text}) => {
    return (
        <button className={style.submit}>
            {text}
        </button>
    )
}