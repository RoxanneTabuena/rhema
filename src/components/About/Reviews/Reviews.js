import { Review } from './Review/Review'
import style from './reviews.module.css'
export const Reviews = () => {
    const reviews = [
        {
            review: `This team is the real deal! Came to Hawaii to do a corporate event and needs to source some labor and equipment locally. They were accommodating, their gear was clean and high quality, and their crew consisted of technically proficient and friendly people.`,
            name: `Andrew Dewar`,
            link: `https://share.google/ViZ7jcoSCfzxvmSeP`
        },
        {
            review: `They just rock in everything! I had a wedding in Hawaii and they provided the speakers and cables I needed. Perfectly packed and ready to go when I arrived! Top class!`,
            name: `George Salajean`,
            link: `https://share.google/oLwan9dgdhbI4QpZm`
        },
        {
            review: `Rhema is the #1 audio company in Hawaii.`,
            name: `Kahikina Logan`,
            link: `https://share.google/u52S6rN4OxfLbrwBs`
        },
    ]
    return (
        <div className={style.reviews}>
            <div className={style.stars}>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/starIcon.png" alt="star icon"></img>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/starIcon.png" alt="star icon"></img>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/starIcon.png" alt="star icon"></img>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/starIcon.png" alt="star icon"></img>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/starIcon.png" alt="star icon"></img>
            </div>
            <div className={style.links}>
                {reviews.map((r)=>{
                    return <Review key={r} review={r.review} name={r.name} link={r.link}/>
                })}
            </div>
        </div>
    )
}