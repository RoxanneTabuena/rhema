import { useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { inventory } from '../inventoryInfo'
import { Items } from './Items/Items'
import { Brands } from './Brands/Brands'
import { Categories } from './Categories/Categories'
import { Product } from './Items/Product'
import style from './display.module.css'

export const Display = () => {
    const {category, brand, product }= useParams()
    const [display, setDisplay] = useState('categories')
    const navigate = useNavigate()

    let item = product ? inventory[category].find(i=>i.name===product) : null
    useEffect(()=>{
        if(product){
            setDisplay('product')
        }else if(brand){
            setDisplay('items')
        }else if(category && inventory[category].length<6 ){
            navigate(`/inventory/${category}/all`)
        }else if(category){
            setDisplay('brands')
        }else{
            setDisplay('categories')
        }
    },[product, brand, category])

    const displays = {
        'brands' : <Brands category={inventory[category]}/>,
        'categories' : <Categories />,
        'items' : <Items items={inventory[category]} brand={brand}/>,
        'product' : <Product item={item}/>
    }

    return (
        <div className={style.display}>
            {displays[display]}
        </div>
    )
}