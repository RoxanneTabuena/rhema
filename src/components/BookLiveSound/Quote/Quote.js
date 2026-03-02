import { Time } from '../../inputs/Time'
import { Date } from '../../inputs/Date'
import { Text } from '../../inputs/Text'
import { Dropdown } from '../../inputs/Dropdown'
import { useState } from 'react'
import style from './quote.module.css'
export const Quote = () => {
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ eventType, setEventType ] = useState('Wedding')
    const [ startDate, setStartDate ] = useState('')
    const [ startTime, setStartTime ] = useState('')

    const eventTypes = [
        'Wedding',
        'Corporate Retreat',
        'Conference',
        'Headline Performer'
    ]

    return (
        <div className={style.quote}>
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
        </div>
    )
}