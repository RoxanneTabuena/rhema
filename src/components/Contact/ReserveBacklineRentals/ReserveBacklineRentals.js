import { useCart } from '../../../hooks/useCart'
import style from './reserveBacklineRentals.css'
export const ReserveBacklineRentals = () => {
    const [state, dispatch] = useCart()
    const { items } = state
    console.log(items)
    return (<div>
        <h1 className = {style.logo} >Rhema Services</h1>
        <h2>"Hawaii's Industry Choice for Audio"</h2>

    </div>)
}
