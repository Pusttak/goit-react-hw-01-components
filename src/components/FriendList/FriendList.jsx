import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ isOnline, avatar, name, id }) => (
      <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number,
    }),
  ),
};
