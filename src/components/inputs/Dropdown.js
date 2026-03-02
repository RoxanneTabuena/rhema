import style from './input.module.css'
export const Dropdown = ({id, onChange, options, value}) => {
    const label = (id) => {
        return id.charAt(0).toUpperCase() + id.slice(1) + ':';
    }
    return (
        <div className={style.dropdown}>
        <label>
            {label(id)}
            <select value={value} onChange={({target})=> onChange(target.value)} >
                {options.map((o)=>{
                    return  <option key={o} value={o}>{o}</option>
                })}
            </select>
        </label>
        </div>
    )
}