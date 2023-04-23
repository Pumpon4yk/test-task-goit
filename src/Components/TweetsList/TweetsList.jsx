import { useEffect, useState } from 'react';

import Tweet from '../Tweet/Tweet';
import { List } from './TweetsList.styled';
import { getFollowingLocal, setFollowingLocal } from '../../utils/local-stor';

const TweetsList = ({ users, allTweets, curentParam }) => {
  const [followStatusAll, setFollowStatusAll] = useState(() =>
    getFollowingLocal()
  );

  const viewUsers = () => {
    const viewUsersFolowing = users.filter(
      (el, indx) =>
        el.id === followStatusAll[indx].id && followStatusAll[indx].status
    );
    const viewUsersFolow = users.filter(
      (el, indx) =>
        el.id === followStatusAll[indx].id && !followStatusAll[indx].status
    );

    return curentParam === 'Follow'
      ? viewUsersFolow
      : curentParam === 'Followings'
      ? viewUsersFolowing
      : users;
  };

  const togglStatus = obj => {
    const newArray = followStatusAll.map(e => (e.id === obj.id ? obj : e));
    setFollowStatusAll(newArray);
  };

  useEffect(() => {
    if (followStatusAll !== null && followStatusAll.length > 0) return;

    const array = allTweets.map(({ id }) => {
      return { id, status: false };
    });

    setFollowStatusAll(array);
  }, [users]);

  useEffect(() => {
    setFollowingLocal(followStatusAll);
  }, [followStatusAll]);

  return (
    followStatusAll &&
    followStatusAll.length > 0 && (
      <List>
        {viewUsers().map(user => (
          <li key={user.id}>
            <Tweet
              user={user}
              followStatus={followStatusAll.filter(e => e.id === user.id)[0]}
              togglStatus={togglStatus}
            />
          </li>
        ))}
      </List>
    )
  );
};

export default TweetsList;
