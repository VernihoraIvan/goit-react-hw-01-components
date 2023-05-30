import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

function FriendList({ friends }) {
    return (
        <ul className={css.friend_list}>

            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    )
}

export default FriendList

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  };