export const ReviewsItem = ({ data }) => {
    return (
        <li>
            <b>Author: {data.author}</b>
            <p>{data.content}</p>
        </li>
    )
}