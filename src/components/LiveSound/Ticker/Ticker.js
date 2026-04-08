import style from './ticker.module.css'
export const Ticker = () => {
    const specialties = `Your Live Event
                        Headline Preformers
                        Weddings
                        Convention Panels
                        Block Parties
                        Trade Shows
                        Corporate Retreats
                        Indoor Concerts
                        Faith Gatherings
                        Multi-Stage Festivals
                        Fashion Shows
                        Public Lectures
                        Live Theater
                        Seasonal Attractions
                        Surf Competitions
                        Your Live Event`.split('\n')
    return (
        <h3 className={style.ticker}>
            for
            <div className={style.window}>
                <div className={style.slider}>
                    {specialties.map(s=>{
                        return <h3 key={s} className={style.slide}>{s}</h3>
                    })}
                </div>
            </div>
        </h3>
    )
}