import style from './article.module.css'
import {coverDir} from '../imgDirectory'
import {bodyDir} from '../bodyDirectory'
export const Article = ({title}) => {
    let pic = coverDir[title]
    let body = bodyDir[title]
    return (<div className='style.article'>
        <img src={pic.img} alt={pic.alt}></img>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>)
}