import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

const PublicRouter = ({ children, ...rest }) => {
    const { currentUser } = useAuth();

    return !currentUser ? children : <Navigate to="/" />
};

export default PublicRouter;