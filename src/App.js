import './App.css';
import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import user from './utilits/user.json'
import data from './utilits/data.json'

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
<Statistics />
    </div>
  );
}

export default App;
