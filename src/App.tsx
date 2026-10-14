
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { TagsPage } from './pages/TagsPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Users</NavLink>
        {' | '}
        <NavLink to="/tags">Tags</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<h1>Users page</h1>}
        />
        <Route
          path="/tags"
          element={<TagsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;