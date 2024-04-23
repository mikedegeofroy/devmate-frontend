import { Button } from '@/components/ui/button';
import { LoginState, useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { login, verifyLogin, state } = useAuth();

  const [code, setCode] = useState('');

  useQuery({
    queryKey: ['auth', code],
    queryFn: () => verifyLogin(code!),
    enabled: !!code,
    refetchInterval: () => (state != 'awaiting-verification' ? false : 1000),
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (state == 'logged-in') {
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }
  }, [navigate, state]);

  const renderSwitch = (state: LoginState) => {
    switch (state) {
      case 'awaiting-login':
        return (
          <div className='gap-5 flex flex-col'>
            <div>
              <h1 className='text-2xl font-semibold tracking-tight'>
                Sign-in through Telegram
              </h1>
              <p className='text-sm text-muted-foreground w-72'>
                Press on the button below to sign in thorugh our telegram bot.
              </p>
            </div>
            <Button
              className='w-full'
              onClick={async () => {
                const code = await login();
                setCode(code);
                window.open(
                  `tg://resolve?domain=devm8bot&start=${code}`,
                  '_blank'
                );
              }}
            >
              Login
            </Button>
          </div>
        );
      case 'awaiting-verification':
        return (
          <div className='text-left'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Awaiting verification
            </h1>
            <p className='text-sm text-muted-foreground w-72'>
              We are waiting for you to complete the verification on our bot.
            </p>
          </div>
        );
      case 'logged-in':
        return (
          <div>
            <h1 className='text-2xl font-semibold tracking-tight'>
              You're all set!
            </h1>
            <p className='text-sm text-muted-foreground w-72'>
              We will redirect you soon.
            </p>
          </div>
        );
    }
  };

  return (
    <div className='flex justify-center items-center h-[90vh]'>
      <div className='flex flex-col space-y-2 h-[20vh]'>
        {renderSwitch(state)}
      </div>
    </div>
  );
};
