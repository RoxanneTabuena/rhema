import style from './input.module.css'
export const Time = ({id, onChange, value}) => {
    const label = (id) => {
        return id.charAt(0).toUpperCase() + id.slice(1) + ':';
    }
    return (
        <div className={style.time}>
            <label>{label(id)}</label>
            <input 
                type="time" 
                id={id} 
                name={id}
                value = {value}
                placeholder={id}
                onChange = {({target})=> onChange(target.value)} 
                required />
        </div>
    )
}