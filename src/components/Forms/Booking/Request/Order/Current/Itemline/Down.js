import { useContext } from 'react'
import { CartContext } from '../../../../../../../context/CartContext'
export const Down = ({item}) => {
    const [state, dispatch] = useContext(CartContext)

    const inc = () => {
        const action =  {type: 'INC_DOWN', payload:item}
        dispatch(action)
    }
    
    return (
            <p onClick={()=>{inc()}}>-</p>
    )
}