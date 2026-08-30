/**
 * GET A QUOTE FORM COMPONENT
 * - connects to email JS
 * - saves customer info to customer profile
 * - opens alert window on submit error
 * - redirects to thankyou on submit success
 */

import style from './quote.module.css'
// import inputs
import { ContactSec } from '../../../../Blocks/inputs/Contact/ContactSec'
import { Dates } from '../../../../Blocks/inputs/Dates/Dates'
import { EventDate } from '../../../../Blocks/inputs/EventDate/EventDate' 
import { Times } from '../../../../Blocks/inputs/Times/Times'
import { Dropdown } from '../../../../Blocks/inputs/Dropdown'
import { TextBox } from '../../../../Blocks/inputs/TextBox'
import { Submit } from '../../../../Submit/Submit'
import { service_id, template_id, public_key } from "../../../keys"
import emailjs from 'emailjs-com'
// get cart state
import { useContext } from 'react'
import { CartContext } from '../../../../../context/CartContext'
// get window state
import { WindowContext } from '../../../../../context/WindowContext'


export const Quote = () => {
    // connect form to cart context
    const [ cartState, cartDispatch ] = useContext(CartContext)
    const { event, customer, dates, times } = cartState
    const { type, location, size, multi, info} = event
    const { name, preferred, email, phone} = customer
    // conntect to alert window
    const [ windowState, windowDispatch] = useContext(WindowContext)

    const togMulti = () => {
        const action = { type: 'EVENT_MULTI', payload:!multi}
        cartDispatch(action)
    }

    const setType = (type) => {
        const action = { type: 'EVENT_TYPE', payload:type}
        cartDispatch(action)
    }

    const setSize = (size) => {
        const action = { type: 'EVENT_SIZE', payload:size}
        cartDispatch(action)
    }

    const setLocation = ({value}) => {
        const action = { type: 'EVENT_LOCATION', payload:value}
        cartDispatch(action)
    }

    const setInfo = ({value}) => {
        const action = { type: 'EVENT_INFO', payload:value}
        cartDispatch(action)
    }

    const alert = (message) => {
        const messageAction = {type:"CONTENT", payload:message}
        const openAction = {type:"OPEN"}
        windowDispatch(messageAction)
        windowDispatch(openAction)
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
        alert("Please include your name in your request")
    }
    else if(!preferred){
        alert("Please select a preferred contact method")
    }
    else if(!email && preferred==="email"){
        alert("Please enter an email address if that is your preferred contact method.")
    }
    else if(!phone && preferred==="phone"){
        alert("Please enter a phone number if that is your preferred contact method.")
    }
    else if(!phone && preferred==="phone"){
        alert("Please enter a phone number if that is your preferred contact method.")
    }
    else if(!dates.start || !times.start || !times.end){
        alert("Please include complete scheduling information for your event")
    }
    else if(!type){
        alert("Please enter an event type")
    }
    else if(!location){
        alert("Please include your event location")
    }
    else if(!size){
        alert("Please include an estimate of your event size")
    }
    emailjs.sendForm(service_id, template_id, e.target, public_key)
    .then((result) => {


    }, (error) => {
        alert(` error: ${error.text}`)
        console.log(typeof(error.text));
    });
    }

    const eventTypes = [
        'Wedding',
        'Corporate Retreat',
        'Conference',
        'Headline Performer'
    ]

    const sizes = [
        'Under 100',
        '100-250',
        '250-500',
        '500-1000',
        '1000-2500',
        '2500-5000',
        '5000-10,000',
        'Over 10,000'
    ]

    return (
        <form onSubmit={handleSubmit} className={style.quote}>
            <ContactSec />
            <h3>Schedule</h3>
            <div className={style.desk}>
                <div>
                    <h4>{multi? "Dates" : "Date"}</h4>
                    <div className={style.check}>
                        <input
                            type="checkbox"
                            id="multi"
                            value={multi}
                            onClick={togMulti}>
                        </input>
                        <label for="multi">Multi-Day Event</label>
                    </div>
                    { !multi ? 
                        <EventDate/> 
                        :
                        <Dates type="live"/>
                    }
                </div>
                <div>
                    <h4>Times</h4>
                    <Times type="live"/>
                </div>
            </div>
            <div className={style.specifics}>
                <h3>Event Specifics</h3>
                <div className={style.desk}>
                    <Dropdown id="type" onChange={setType} options={eventTypes} value={type} label="event type:"/>
                    <Dropdown id="size" onChange={setSize} options={sizes} value={size} label="event size:"/>
                </div>
                <div className={style.desk}>
                    <div>
                        <label for={location}>location:</label>
                        <input
                            type="text"
                            id="loaction"
                            value={location}
                            placeholder="venue name or address"
                            onChange={(e)=>{setLocation(e.target)}}>
                        </input>
                    </div>
                    <div>
                        <label>extra info:</label>
                        <TextBox
                            id="info"
                            value={info}
                            onChange={setInfo}
                            placeholder="Special event requirements / service related questions"/>
                    </div>
                </div>
            </div>
            <Submit text="submit"/>
        </form>
    )
}