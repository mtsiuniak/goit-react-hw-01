import "modern-normalize";
import '../../index.css';
import userData from "../../userData.json";
import friendsData from "../../friends.json";
import transactionsData from "../../transactions.json";
import Profile from "../Profile/Profile";
import FriendList from "../FriendsList/FriendsList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";


export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData}/>
    </>
  )
}


