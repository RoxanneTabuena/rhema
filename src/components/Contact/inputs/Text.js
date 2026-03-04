import style from './input.module.css'
export const Text = ({id, onChange, value, placeholder, required}) => {
    const label = (id) => {
        return id.charAt(0).toUpperCase() + id.slice(1) + ':';
    }
    return (
        <div className={style.text}>
            <label>{label(id)}</label>
            {required?
                <input 
                    type="text" 
                    id={id} 
                    name={id}
                    value = {value}
                    placeholder={placeholder? placeholder : id}
                    onChange = {({target})=> onChange(target.value)} 
                    required
                    /> 
                    :
                <input 
                    type="text" 
                    id={id} 
                    name={id}
                    value = {value}
                    placeholder={placeholder? placeholder : id}
                    onChange = {({target})=> onChange(target.value)} 
                    /> 
            
            }
        </div>
    )
}