import style from './review.module.css'
export const Review = ({name, review, link}) => {
    return (
        <div className={style.review}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <p>{`" ${review} "`}</p>
                <h4>{`-${name}`}</h4>
            </a>
        </div>
    )
}