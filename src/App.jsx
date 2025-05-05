//import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ChangePassword from './components/ChangePassword';
import AccountRecoveryForgotPassword from './components/AccountRecoveryForgotPassword';
import ResetPassword from './components/ResetPassword';
//import Dashboard from './components/Dashboard';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './pages/Dashboard/DashboardHome';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Public routes */}
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgot-password" element={<AccountRecoveryForgotPassword />} />
          <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
          
          {/* Protected routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Login from './components/Login'
// import SignUp from './components/SignUp'
// import ChangePassword from './components/ChangePassword'
// import AccountRecoveryForgotPassword from './components/AccountRecoveryForgotPassword'
// import Dashboard from './components/Dashboard'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<SignUp />} />
//         <Route path="/change-password" element={<ChangePassword />} />
//         <Route path="/forgot-password" element={<AccountRecoveryForgotPassword />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App