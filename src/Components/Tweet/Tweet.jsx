import { useState } from 'react';
import toast from 'react-hot-toast';

import {
  Avatar,
  Card,
  ContainerAvatar,
  ContainerData,
  Data,
  GoItIcon,
  ImgTweets,
  LineCenter,
  Text,
} from './Tweet.styled';
import Button from '../Button';
import { setUserFollower } from '../../utils/fetch-API';

import img from '../../image/card-img.png';
import iconGoIt from '../../image/go-it-icon.png';

const Tweet = ({ user, followStatus, togglStatus }) => {
  const [userr, setUsserr] = useState(user);
  const [isLoading, setIsLoading] = useState(false);
  const [statusUsert, setStatusUsert] = useState(followStatus);



  const handleFollowToggle = () => {
    setIsLoading(true);
    setStatusUsert(({ id, status }) => ({ id, status: !status }));

    if (statusUsert.status) {
      const newUserObj = { ...userr, followers: userr.followers - 1 };

      setUserFollower(userr.id, newUserObj)
        .then(res => {
          setUsserr(res)

          togglStatus({ id: statusUsert.id, status: !statusUsert.status })
        })
        .catch(err => {
          toast.error("Sorry, an error occurred.",
          {
            duration: 2000,
          })
          setStatusUsert(({ id, status }) => ({ id, status: !status }))
        })
        .finally(() => setIsLoading(false));
    }

    if (!statusUsert.status) {
      const newUserObj = { ...userr, followers: userr.followers + 1 };

      setUserFollower(userr.id, newUserObj)
        .then(res => {
          setUsserr(res)
          togglStatus({ id: statusUsert.id, status: !statusUsert.status })
        })
        .catch(err => {
          toast.error("Sorry, an error occurred.",
          {
            duration: 2000,
          })
          setStatusUsert(({ id, status }) => ({ id, status: !status }))
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Card>
      <GoItIcon src={iconGoIt} alt="goit" />
      <ImgTweets src={img} alt="img" />
      <LineCenter />
      <ContainerAvatar>
        <Avatar src={userr.avatar} />
      </ContainerAvatar>
      <ContainerData>
        <Text>
          <Data>{userr.tweets.toLocaleString()} </Data>
          Tweets
        </Text>
        <Text>
          <Data>{userr.followers.toLocaleString()} </Data>
          Folowers
        </Text>
      </ContainerData>
      <Button
        onClick={handleFollowToggle}
        followToggle={statusUsert.status}
        isLoading={isLoading}
      />
    </Card>
  );
};

export default Tweet;
