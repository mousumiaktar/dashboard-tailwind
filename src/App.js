import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Dashboard from './cpmponents/dashboard/Dashboard';
import PageOne from './cpmponents/dashboard/pages/PageOne';
import PageTwo from './cpmponents/dashboard/pages/PageTwo';
import Navbar from './cpmponents/Navbar';

function App() {
const {pathname} = useLocation();

  return (
    <div>
      {!pathname?.includes("dashboard") && <Navbar />}
      
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<PageOne />} />
          <Route path='pagetwo' element={<PageTwo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
