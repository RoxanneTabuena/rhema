import style from './pat.module.css'
export const Pat = () => {
    return (
        <div className={style.pat}>
            <div className={style.title}>
                <h3>Patrick Ku</h3>
                <h4>Owner and Operator</h4>
            </div>
            <div className={style.article}>
                <p>Add a paragraph on pats journey with Rhema copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy</p>
                <p>Add a paragraph on pats relationship with his clients copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy</p>
                <p>Add a paragraph on Pat's relationship with his Team copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy</p>
                <p>Talk about retirement and advertize sale of company if you want to  copy copy copy copy copy copy copy copy copy copy copy copy copy</p>
            </div>
            <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/fakePat.png" alt="Patrick Ku"></img>
        </div>
    )
}