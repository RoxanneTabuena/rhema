import style from './input.module.css'
export const Date = ({id, onChange, value}) => {
    const label = (id) => {
        return id.charAt(0).toUpperCase() + id.slice(1) + ':';
    }
    return (
        <div className={style.date}>
            <label>{label(id)}</label>
            <input 
                type="date" 
                id={id} 
                name={id}
                value = {value}
                placeholder={id}
                onChange = {({target})=> onChange(target.value)} 
                required />
        </div>
    )
}