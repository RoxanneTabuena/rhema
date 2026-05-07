import { NavLink } from 'react-router-dom'
import { Add } from './Add/Add'
import style from './product.module.css'
export const Product = ({item}) => {
    return (
        <div className={style.product}>
            <div className={style.desk}>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/picPlaceholder.png" className={style.prodImg} alt="product pic placeholder"></img>
                <div>
                    <h3>{item.name}</h3>
                    <p className={style.description}>
                        One sentence product description.  
                        <NavLink href="#" className={style.factory}>factory info</NavLink>
                    <ul className={style.specs}>
                        <li>product spec</li>
                        <li>product spec</li>
                        <li>product spec</li>
                    </ul>
                        <Add item={item}/>
                    </p>
                </div>
            </div>
            <div className={style.mobile}>
                <h3>{item.name}</h3>
                <div className={style.glance}>
                    <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/picPlaceholder.png" className={style.prodImg} alt="product pic placeholder"></img>
                    <ul className={style.specs}>
                        <li>product spec</li>
                        <li>product spec</li>
                        <li>product spec</li>
                    </ul>
                </div>
                <p className={style.description}>
                    One sentence product description.  
                    <NavLink href="#" className={style.factory}>factory info</NavLink>
                </p>
                <Add item={item}/>
            </div>
        </div>
    )
}