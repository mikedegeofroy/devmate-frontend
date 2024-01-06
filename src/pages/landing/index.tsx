import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col space-y-2 text-center'>
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
        />
        <Button>
          <Link to='/dashboard'>Login</Link>
        </Button>
      </div>
    </div>
  );
};
