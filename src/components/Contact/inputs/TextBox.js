import style from './input.module.css'
export const TextBox = ({id, onChange, value, placeholder}) => {
    return (
        <div className={style.textBox}>
            <textarea
                id={id} 
                name={id}
                value = {value}
                placeholder={placeholder? placeholder : id}
                onChange = {({target})=> onChange(target.value)} 
                required />
        </div>
    )
}