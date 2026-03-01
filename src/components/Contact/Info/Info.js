import style from './info.module.css'
export const Info = ({type}) => {
    let info = {
        locations: {
            h3: 'LOCATIONS',
            content: [
                {
                h4: 'Oahu',
                p: '94-515 Ukee Street #201; Waipahu, HI 96797'
                },
                {
                h4: 'Maui',
                p: '94-515 Ukee Street #201; Waipahu, HI 96797'
                },
            ]
        },
        contact: {
            h3: 'CONTACT',
            content: [
                {
                h4: 'Phone',
                p: '(808) 677-5700'
                },
                {
                h4: 'Fax',
                p: '(808) 677-0097'
                },
            ]
        },
        office: {
            h3: 'OFFICE HOURS',
            content: [
                {
                h4: 'Weekdays',
                p: '8:30am - 530pm'
                },
                {
                h4: 'Weekends',
                p: 'Closed'
                },
            ]
        }
    }
    info = info[type]
    return (
        <div className={style.info}>
            <h3>{info.h3}</h3>
            {info.content.map((a)=>{
                if (a.p.includes(';')){
                    const b = a.p.split(';')
                    return (
                        <div className={style.art} key={a}>
                            <h4>{a.h4}</h4>
                            <p>{b[0]}</p>
                            <p>{b[1]}</p>
                        </div>
                    )
                }
                return (
                    <div className={style.art} key={a}>
                        <h4>{a.h4}</h4>
                        <p>{a.p}</p>
                    </div>
                )
            })}
        </div>
    )
}