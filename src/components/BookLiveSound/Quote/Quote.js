import { Time } from '../../inputs/Time'
import { Date } from '../../inputs/Date'
import { Text } from '../../inputs/Text'
import { Dropdown } from '../../inputs/Dropdown'
import { useState } from 'react'
import style from './quote.module.css'
import { Alert } from '../../Alert'
import { service_id, template_id, public_key } from "../../keys"
import emailjs from 'emailjs-com'

export const Quote = () => {
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ eventType, setEventType ] = useState('')
    const [ startDate, setStartDate ] = useState('')
    const [ startTime, setStartTime ] = useState('')
    const [ multi, setMulti] = useState(false)
    const [alertActive, setAlertActive] = useState(false)
    const [outcome, setOutcome] = useState('success')

    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, public_key)
    .then((result) => {
        setOutcome('success')
        setAlertActive(true)
    }, (error) => {
        setOutcome('failure')
        setAlertActive(true)
        console.log(error.text);
    });
    }

    const handleClose = () => {
        if(outcome === 'success')
        {
            setName('')
            setPhone('')
            setEmail('')
            setEventType('')
            setStartDate('')
            setStartTime('')
        }
        setAlertActive(false)
    }

    const eventTypes = [
        'Wedding',
        'Corporate Retreat',
        'Conference',
        'Headline Performer'
    ]

    return (
        <form onSubmit={handleSubmit} className={style.quote}>
            <Alert active={alertActive} outcome={outcome} handleClose={handleClose}/>
            {/* contact: name, phone, email; 
            event: event type, audience size ,date(s), start time, end time, 
            venue: name/description, address; 
            audience size, event descriotion  */}
            {/* consent, not a robot */}
            <h3>Contact</h3>
            <Text id="name" onChange={setName} value={name} />
            <Text id="phone" onChange={setPhone} value={phone} />
            <Text id="email" onChange={setEmail} value={email} />
            <h3>Event</h3>
            <Dropdown id="eventType" onChange={setEventType} value={eventType} options={eventTypes}/>
            <Date id="startDate" onChange={setStartDate} value={startDate}/>
            <Time id="startTime" onChange={setStartTime} value={startTime}/>
            <button type='submit'>Submit</button>
        </form>
    )
}