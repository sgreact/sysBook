import React, { useEffect } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/app.css'
import DashboardPage from './pages/DashboardPage'
import WorkstationsPage from './pages/WorkstationsPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import ResetPassword from './pages/auth/ResetPassword'
import ProfilePage from './pages/profile/ProfilePage'
import ChangePasswordPage from './pages/profile/ChangePasswordPage'
import UserPreferencesPage from './pages/profile/UserPreferencesPage'
import AdminBlankPage from './pages/AdminBlankPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { setDefaultUsers } from './utils/authHandler'

function App() {
  useEffect(() => {
    // set default users if not available in storage
    setDefaultUsers()
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/workstations" element={<WorkstationsPage />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/change-password" element={<ChangePasswordPage />} />
        <Route exact path="/preferences" element={<UserPreferencesPage />} />
        <Route exact path="/blank-page" element={<AdminBlankPage />} />
      </Routes>
    </Router>
  )
}

export default App
