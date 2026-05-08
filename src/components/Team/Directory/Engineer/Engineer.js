import style from './engineer.module.css'
export const Engineer = ({shirt, name}) => {
    const {role, description, pic} = shirt
    return (
        <div className={style.engineer}>
            <div className={style.mobile}>                
                <div>
                    <img src={pic} alt={name}></img>
                    <h3>{name}</h3>
                </div>
                <p>{description}</p>
            </div>
            <div className={style.desk}>
                <img src={pic} alt={name}></img>
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}