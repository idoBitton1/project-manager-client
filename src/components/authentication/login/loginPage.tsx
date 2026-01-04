import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { Container, Paper, TextField, Button, Box, Typography, Alert } from '@mui/material';
import { loginValidationSchema, LoginFormInputs, loginDefaultValues } from 'models/types/login';

import { authService } from 'services/authService';

import { useStyles } from './loginPage.styles';

const LoginPage: React.FC = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: loginDefaultValues
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await authService.login(data);

      setSuccess(true);
      setTimeout(() => navigate('/authorized'), 1500);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data?.message || err.message || 'Login failed';
        setError(errorMessage);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component='main' maxWidth='sm'>
      <Box className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <Typography component='h1' variant='h5' className={classes.title}>
            Login
          </Typography>

          {error && <Alert severity='error' className={classes.alert}>{error}</Alert>}
          {success && <Alert severity='success' className={classes.alert}>Login successful!</Alert>}

          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  fullWidth
                  label='Email Address'
                  type='email'
                  autoComplete='email'
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  fullWidth
                  label='Password'
                  type='password'
                  autoComplete='current-password'
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submitButton}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <Box className={classes.navigationBox}>
            <Typography variant='body2'>
              <span>Don't have an account? </span>
              <Link to='/register' className={classes.navigationLink}>
                Register here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
