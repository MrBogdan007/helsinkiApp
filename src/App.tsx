
import { useEffect } from 'react';

import { fetchPlaces } from './redux/reducers/map';

import './App.css';
import Map from './components/Map';
import { useAppDispatch } from './redux/hooks';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPlaces());
  },[])
  return (
    <div className="App">
    <Map/>
    </div>
  );
}

export default App;
