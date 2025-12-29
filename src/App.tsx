import React from 'react';
import { useAtomValue } from 'jotai';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import useStyles from './App';
import { useAuthInit } from './hooks/useAuthInit';
import LoginPage from './components/authentication/login/loginPage';
import RegisterPage from './components/authentication/register/registerPage';
import AuthorizedPage from './components/authentication/authorized/authorizedPage';
import { isLoadingAtom, isAuthenticatedAtom } from './atoms/authentication/authAtoms';

const App: React.FC = () => {
  const { classes } = useStyles();
  useAuthInit();

  const isLoading = useAtomValue(isLoadingAtom);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className={classes.appContainer}>
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/authorized" /> : <LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/authorized" element={isAuthenticated ? <AuthorizedPage /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={isAuthenticated ? "/authorized" : "/login"} replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
