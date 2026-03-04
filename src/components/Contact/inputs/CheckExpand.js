import style from './input.module.css'
export const CheckExpand = ({onChange, label, value}) => {

    return (
        <div className={style.checkExpand}>
            <input 
                type="checkbox" 
                value = {value}
                onChange = {()=> onChange(!value)} 
                />
            <label>{label}</label>
        </div>
    )
}