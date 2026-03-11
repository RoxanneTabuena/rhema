import style from './clients.module.css'
export const Clients = () => {
    const clients = 
    `Aerosmith,
Alan Jackson,
Beach Boys,
Billy Joel,
Bob Dylan,
Bonnie Raitt,
Chicago,
Chris Tomlin,
Colbie Caillat,
Don Felder,
Don Henley,
Doobie Brothers,
Eagles,
Earth, Wind & Fire,
Eddie Vedder,
Elton John,
Garth Brooks,
Glenn Frey,
Hillsong United,
Huey Lewis and the News,
Jack Johnson,
James Taylor,
Jhené Aiko,
Jimmy Buffett,
Keith Urban,
Kelly Clarkson,
Kendrick Lamar,
Lady Antebellum,
Maroon 5,
Mick Fleetwood,
Miranda Lambert,
Natasha Bedingfield,
One Republic,
Pat Benatar,
Phillip Phillips,
Prince,
Red Hot Chili Peppers,
Rod Stewart,
Roger Daltrey,
Santana,
Steve Miller,
Steve Winwood,
Stevie Wonder,
Toby Keith,
Trace Adkins,
Train,
Ziggy Marley,
ZZ Top`

    return (
        <div className={style.clients}>
            {clients.split(',').map((c)=>{
                if(c.includes('-')){
                    let d = c.split('-')
                    return (
                        <div key={c}>
                            <h4>{`${d[0]}-`}</h4>
                            <h4 className={style.continue}>{d[1]}</h4>
                        </div>
                    )
                } 
                return <h4 key={c}>{c}</h4>
            })}
        </div>
    )
}