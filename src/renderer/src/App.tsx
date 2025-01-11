import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </Router>
  )
}

export default App
