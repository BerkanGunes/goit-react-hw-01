import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? styles.online : styles.offline;
  const statusText = isOnline ? 'Online' : 'Offline';

  return (
    <li className={styles.item}>
      <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.status} ${statusClass}`}>{statusText}</p>
    </li>
  );
};

export default FriendListItem;