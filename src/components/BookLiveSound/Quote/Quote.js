import { Time } from '../../inputs/Time'
import { Date } from '../../inputs/Date'
import { Text } from '../../inputs/Text'
import { Dropdown } from '../../inputs/Dropdown'
import { TextBox } from '../../inputs/TextBox'
import { CheckExpand } from '../../inputs/CheckExpand'
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
    const [ location, setLocation ] = useState('')
    const [ size, setSize ] = useState('')
    const [ date, setDate ] = useState('')
    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')
    const [ startTime, setStartTime ] = useState('')
    const [ endTime, setEndTime ] = useState('')
    const [ info, setInfo ] = useState('')
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
            <input type='hidden' id="title" />
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
            <h3>Event Details</h3>
            <Dropdown id="eventType" onChange={setEventType} value={eventType} options={eventTypes}/>
            <Dropdown id="size" onChange={setSize} value={size} options={sizes}/> expected attendees
            <Text id="location" onChange={setLocation} value={location} placeholder="venue name or address"/>
            
            <h3>Schedule</h3>
            <CheckExpand onChange={setMulti} label="Multi Day Event?" value={multi}/>
            {multi ? 
            <div>
                <Date id="startDate" onChange={setStartDate} value={startDate}/>
                <Date id="endDate" onChange={setEndDate} value={endDate}/>
            </div> :
                <Date id="date" onChange={setDate} value={date}/>
            }
            <Time id="startTime" onChange={setStartTime} value={startTime}/>
            <Time id="endTime" onChange={setEndTime} value={endTime}/>
            <h3>Extra Info</h3>
            <TextBox id="info" onChange={setInfo} value={info} placeholder="Outdoor Event"/>
            <button type='submit'>Submit</button>
        </form>
    )
}