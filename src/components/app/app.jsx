import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Achievements from '../../pages/Achievements/Achievements';
import styles from './app.module.css'

function App() {
  return (
    <Router>
      <div className={styles.app}>

      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Router>
  );
}

export default App;
