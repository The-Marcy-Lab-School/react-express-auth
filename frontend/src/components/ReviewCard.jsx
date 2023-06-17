export default function ReviewCard ({ review }){
    return <>
    <h4>{review.rating}</h4>
    <article>{review.review}</article>
    
    </>
}