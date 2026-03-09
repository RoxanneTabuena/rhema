import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { inventory } from '../inventory'
import { Items } from './Items/Items'
import { Brands } from './Brands/Brands'
import { Categories } from './Categories/Categories'
import style from './display.module.css'
export const Display = () => {
    const {category, brand }= useParams()
    const [display, setDisplay] = useState('')

    useEffect(()=>{
        if(category && inventory[category].length>6 && !brand){
            setDisplay('brands')
        }else if(!category){
            setDisplay('categories')
        }else{
            setDisplay('items')
        }
        console.log(display)
    },[category, brand])
    const displays = {
        'brands' : <Brands category={inventory[category]}/>,
        'categories' : <Categories />,
        'items' : <Items items={inventory[category]} brand={brand}/>
    }

    return (
        <div className={style.display}>
            {/* if a category is chosen and there are more than 7 items,
            display brands
            otherwise display items
            if a category and a brand is chosen 
            display items
            if no category is chosen
            display categories */}
            {displays[display]}
        </div>
    )
}