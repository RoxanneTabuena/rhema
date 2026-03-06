import { inventory, drumInventory } from './inventory'
import { Category } from './category/Category'
import { Dates } from './Dates/Dates'
import { Relative } from './relative/Relative'
import { useState, useEffect } from 'react'
import style from './rentals.module.css'
export const Rentals = () => {

    
    return (
    <div className={style.rentals}>
        <h1 className = {style.logo}>Rentals</h1>
        <div className={style.content}>
            <p className={style.main}>main information for the page</p>
            <Dates/>
            <Relative/>
            {Object.keys(inventory).map((c)=>{
                return <Category key={c} title={c}/>
            })}
            <Category title="Drums" />
        </div>
    </div>)
} 