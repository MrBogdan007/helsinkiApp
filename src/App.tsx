
import { useEffect } from 'react';

import { fetchPlaces } from './redux/reducers/map';

import './App.css';
import Places from './components/Places';
import { useAppDispatch } from './redux/hooks';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPlaces());
  },[])
  return (
    <div className="App">
    <Places/>
    </div>
  );
}

export default App;
