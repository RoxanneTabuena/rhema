import { Arrow } from '../../../Arrow/Arrow'
import { Current } from '../../../Contact/Booking/Request/Order/Current/Current'
import style from './peek.module.css'
export const Peek = ({close}) => {
    const viewCheck = (t) => {
        if(t.className===style.peek){
            close()
        }
    }
    return (
        <div className={style.peek} onClick={(e)=>{viewCheck(e.target)}}>
            <div className={style.window}>
                <button onClick={close}x>x</button>
                <div>
                    <Current/>
                    <Arrow color="purple" text="CHECKOUT" path="/rentalRequest" onClick={close}/>
                </div>
            </div>
        </div>
    )
}