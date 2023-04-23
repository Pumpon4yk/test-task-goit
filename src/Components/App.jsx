import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import HomePage from '../Page/HomePage';

const TweetsPage = lazy(() => import('../Page/TweetsPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
