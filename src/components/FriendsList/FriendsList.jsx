import FriendListItem from "../FriendListItem/FriendListItem";
import css from "../FriendsList/FriendsList.module.css";

export default function FriendsList({ friends }) {
    return (
        <ul className={css.list}>
            {friends.map((unit) =>
                <li className={css.item} key={unit.id}>
                    <FriendListItem friends={unit} />
                </li>
            )}
        </ul>
        

    )
}