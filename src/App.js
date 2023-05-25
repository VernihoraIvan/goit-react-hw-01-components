import './App.css';
import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import user from './utilits/user.json'
import data from './utilits/data.json'
import friends from './utilits/friends.json' 


console.log(user)
console.log(data)

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
    </div>
  );
}

export default App;
