import './App.css';
import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

import user from '././components/data/user.json'
import data from '././components/data/data.json'
import friends from '././components/data/friends.json' 
import transactions from '././components/data/transactions.json'
 

function App() {
  return (
    <div className="App"> 
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data}/>
<FriendList friends={friends}/>
<TransactionHistory transactions={transactions}/>
    </div>
  );
}

export default App;
