import { useSetAtom } from 'jotai';
import React, { useState } from 'react';
import { Container, Paper, Box, Typography, Button } from '@mui/material';

import { authService } from 'services/authService';
import { isAuthenticatedAtom, accessTokenAtom } from 'atoms/authentication/authAtoms';

const AuthorizedPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
    const setAccessToken = useSetAtom(accessTokenAtom);

    const handleLogout = async () => {
        setLoading(true);
        try {
            await authService.logout();
            setIsAuthenticated(false);
            setAccessToken(null);
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="sm">
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 73px)' }}>
                <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
                    <Typography variant="h4" component="h1">
                        Authorized!
                    </Typography>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleLogout}
                        disabled={loading}
                        sx={{ marginTop: 3 }}
                    >
                        {loading ? 'Logging out...' : 'Logout'}
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default AuthorizedPage;
