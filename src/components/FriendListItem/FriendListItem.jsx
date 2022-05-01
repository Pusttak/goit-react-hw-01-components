import PropTypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  const status = isOnline ? css.offline : css.online;
  return (
    <>
      <span className={status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
