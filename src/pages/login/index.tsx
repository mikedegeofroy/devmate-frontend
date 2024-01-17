import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoginState, useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ILoginForms {
  username: string;
  code: string;
  password: string;
}

export const Login = () => {
  const [value, setValue] = useState<ILoginForms>({
    username: '',
    code: '',
    password: '',
  });
  const { login, verifyCode, verifyPassword, state, authenticated } = useAuth();

  const navigate = useNavigate();

  const renderSwitch = (state: LoginState) => {
    switch (state) {
      case 'awaiting-login':
        return (
          <>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Sign-in with Telegram
            </h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email below to create your account
            </p>
            <Input
              placeholder='@username'
              autoCapitalize='none'
              autoCorrect='off'
              onChange={(e) => {
                setValue({
                  username: e.target.value,
                  code: value.code,
                  password: value.password,
                });
              }}
            />
            <Button
              onClick={() => {
                login(value.username);
              }}
            >
              Login
            </Button>
          </>
        );
      case 'awaiting-verification':
        return (
          <>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Verification Code
            </h1>
            <p className='text-sm text-muted-foreground'>
              We've sent your verification code to your telegram
            </p>
            <Input
              placeholder='verification code'
              autoCapitalize='none'
              autoCorrect='off'
              onChange={(e) => {
                setValue({
                  username: value.username,
                  code: e.target.value,
                  password: value.password,
                });
              }}
            />
            <Button
              onClick={() => {
                verifyCode(value.username, value.code);
                if (authenticated) navigate('/dashboard');
              }}
            >
              Verify
            </Button>
          </>
        );
      case 'awaiting-password':
        return (
          <>
            <h1 className='text-2xl font-semibold tracking-tight'>Password</h1>
            <p className='text-sm text-muted-foreground'>
              Enter the password to your account
            </p>
            <Input
              placeholder='super secret password'
              autoCapitalize='none'
              autoCorrect='off'
              onChange={(e) => {
                setValue({
                  username: value.username,
                  code: value.code,
                  password: e.target.value,
                });
              }}
            />
            <Button
              onClick={() => {
                verifyPassword(value.username, value.password);
                if (authenticated) navigate('/dashboard');
              }}
            >
              Login
            </Button>
          </>
        );
      case 'logged-in':
        return (
          <>
            <h1 className='text-2xl font-semibold tracking-tight'>
              You're all set!
            </h1>
          </>
        );
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col space-y-2 text-center'>
        {renderSwitch(state)}
      </div>
    </div>
  );
};
