import style from './peek.module.css'
export const Counter = ({count, tog}) => {
    return (
        <button className={count > 0 ? style.counter: style.hide} onClick={tog}>
            <p className={style.count}>{count}</p>
            <img className={style.case} src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/roadcase.png" alt="purple road case"></img>
        </button>
    )
}