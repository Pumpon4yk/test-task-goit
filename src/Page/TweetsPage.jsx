import { getUsers } from '../utils/fetch-API';
import { useEffect, useState } from 'react';
import Tweets from '../Components/Tweets';
import { Toaster } from 'react-hot-toast';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [usersPage, setUsersPage] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers()
      .then(res => setUsers(res))
      .catch(error => setError(error.message));
  }, []);

  useEffect(() => {
    if (page > 1) return;

    const firstPage = users.filter(e => e.id <= users.length / 2);
    setUsersPage(firstPage);
  }, [users]);

  useEffect(() => {
    if (page === 1) return;

    const secongPage = users.filter(e => e.id > users.length / 2);

    setUsersPage(prev => [...prev, ...secongPage]);
  }, [page]);

  return (
    <section>
      {error ? (
        <p style={{ textAlign: 'center' }}>{error}</p>
      ) : (
        users && (
          <Tweets
            page={page}
            setPage={setPage}
            users={usersPage}
            allTweets={users}
          />
        )
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default TweetsPage;
