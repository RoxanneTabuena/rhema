import style from './clients.module.css'
export const Clients = () => {
    const clients = 
        `Bruno Mars,
        Jack Johnson,
        H.E.R.,
        The Green,
        Common Kings,
        Kolohe Kai,
        Josh Tatofi,
        Anuhea,
        Kalani Peʻa,
        Hawaiian Airlines,
        Four Seasons Resort-Oʻahu at Ko Olina,
        Hilton Hawaiian Village-Waikīkī Beach Resort,
        Outrigger Hospitality Group,
        Bank of Hawaii,
        Servco Pacific Inc.,
        Hawaiian Electric (HECO),
        Matson Inc.,
        Honolulu Marathon,
        Made in Hawaiʻi Festival,
        Waikīkī Spam Jam`

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