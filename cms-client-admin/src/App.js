// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Home from "./views/Home";
import Dashboard from "./views/DashboardPage";
import ItemsPage from "./views/ItemsPage"
import BookingPage from "./views/BookingPage"
import TransactionHistoryPage from "./views/TransactionHistoryPage"
import RegisterPage from './views/RegisterPage';
import ProfilePage from './views/ProfilePage';
import LoginPage from './views/LoginPage';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        >
          <Route>
            <Route index path="" element={<Dashboard />} />
            <Route path="items" element={<ItemsPage />} />
            <Route path="booking" element={<BookingPage />} />
            <Route path="transaction-history" element={<TransactionHistoryPage />} />
            <Route path="profile" element={<ProfilePage />} />
            {/* <Route path="posts/add" element={<AddPost />} />
            <Route path="posts/edit/:id" element={<EditPost />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/add" element={<AddCategory />} />
            <Route path="categories/edit/:id" element={<EditCategory />} />*/}
            <Route path="register" element={<RegisterPage />} /> 
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
