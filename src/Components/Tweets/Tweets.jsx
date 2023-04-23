import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonLoadmMore from '../ButtonLoadmMore/ButtonLoadmMore';
import TweetsList from '../TweetsList';
import { Container, Select } from './Tweets.styled';

const options = ['All', 'Follow', 'Followings'];

const defaultOption = options[0];

const Tweets = ({ page, setPage, ...parameter }) => {
  const [curentParam, setCurentParam] = useState(defaultOption);

  return (
    <Container>
      <Select
        options={options}
        onChange={({ value }) => setCurentParam(value)}
        value={defaultOption}
        placeholder="Select an option"
      />

      <TweetsList {...parameter} curentParam={curentParam} />
      {page !== 2 && <ButtonLoadmMore setPage={setPage} />}
    </Container>
  );
};

export default Tweets;
