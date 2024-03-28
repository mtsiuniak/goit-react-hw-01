import FriendCard from "../FriendCard/FriendCard";
import css from "../FriendsList/FriendsList.module.css";

export default function FriendsList({ friends }) {
    return (
        <ul className={css.list}>
            {friends.map((unit) =>
                <li className={css.item} key={unit.id}>
                    <FriendCard friends={unit} />
                </li>
            )}
        </ul>
        

    )
}