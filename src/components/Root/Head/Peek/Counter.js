import style from './peek.module.css'
export const Counter = ({count, tog}) => {
    return (
        <button className={count > 0 ? style.counter: style.hide} onClick={tog}>
            <p className={style.count}>{count}</p>
            peek img
        </button>
    )
}