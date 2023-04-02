export const CastItem = ({ item }) => {
    const defaultImgURL = "https://image.tmdb.org/t/p/w300/nm7MYTZ5vP1HhbJG1wpxKYUALXJ.jpg"

    return (
        <li>
            {item.profile_path ? <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt="profile_path" /> :
                <img src={defaultImgURL} alt="profile_path" />}
            <p>{item.name}</p>
            <p>Chadacter: {item.character}</p>
        </li>
    )
}