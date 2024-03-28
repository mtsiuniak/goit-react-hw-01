import clsx from 'clsx';
import css from '../FriendCard/FriendCard.module.css';

export default function FriendCard({ friends: { avatar, name, isOnline, id } } ) {
    const amountClassNames = clsx(css.text,  isOnline ? css.isOnline : css.isOffline)
    return (
        <>
            <img className={css.img} src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={amountClassNames}>{isOnline ? "Online" : "Offline"}</p>
        </>
        
    )
}