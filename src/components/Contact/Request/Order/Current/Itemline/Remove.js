import { useContext } from 'react'
import { CartContext } from '../../../../../../context/CartContext'
export const Remove = ({item}) => {
    const [state, dispatch] = useContext(CartContext)

    const x = () => {
        const action =  {type: 'REMOVE_ITEM', payload:item.id}
        dispatch(action)
    }
    
    return (
            <p onClick={()=>{x()}}>x</p>
    )
}