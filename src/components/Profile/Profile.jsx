import css from "./Profile.module.css";


export default function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
    
    return (
    <div className={css.container}>
            
        <div className={css.userInfo}>
        <img className={css.avatarImg}
        src={avatar}
        alt="User avatar"
        />
        <p className={css.userName}>{username}</p>
        <p className={css.lightText}>{tag}</p>
        <p className={css.lightText}>{location}</p>
        </div>

        <ul className={css.profileList}>
            <li className={css.profileItem}>
            <span>Followers</span>
            <span className={css.boldText}>{followers}</span>
            </li>
            <li className={css.profileItem}>
            <span>Views</span>
            <span className={css.boldText}>{views}</span>
            </li>
            <li className={css.profileItem}>
            <span>Likes</span>
            <span className={css.boldText}>{likes}</span>
            </li>
        </ul>      
    </div>
    )
    
}