import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import mockup from './mockup.png';

export const Landing = () => {
  return (
    <div className='flex flex-col items-center min-h-[110vh] pt-20 space-y-20'>
      <div className='space-y-5'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='h-50 w-[60vw] mx-auto'
        >
          <img src={mockup} alt='' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className='text-center space-y-3'
        >
          <h1 className='text-4xl font-semibold tracking-tight'>
            DevM8
            <span className='text-xs font-semibold p-1'>[BETA]</span> is a event
            managing companion for telegram.
          </h1>
          <p className='text-xl tracking-tight text-muted-foreground'>
            Analytics, AB Testing, Event Ticket Sales, All in one place.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='text-center w-96'
      >
        <h1 className='text-3xl font-semibold tracking-tight'>
          Beta v0.1 is here!
        </h1>
        <p className='text-sm text-muted-foreground pb-5'>
          Enter your telegram below to get early access
        </p>
        <div className='flex flex-row gap-5'>
          <Input
            placeholder='@telegram'
            autoCapitalize='none'
            autoCorrect='off'
          />
          <Button>Join Waitlist</Button>
        </div>
      </motion.div>

      <div className='space-y-5 pb-24 w-[55vw]'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className='space-y-3'
        >
          <h1 className='text-3xl tracking-tight'>Payments</h1>
          <p className='text-muted-foreground text-xl'>
            You can sell tickets on our platform! Users will get automatically notified and reminded of your event. You can also add them to a group once they pay.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className='space-y-3'
        >
          <h1 className='text-3xl tracking-tight'>Reminders</h1>
          <p className='text-muted-foreground text-xl'>
            You can sell tickets on our platform! Clients will get automatically notified and reminded of your event. You can also add them to a group once they pay.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className='space-y-3'
        >
          <h1 className='text-3xl tracking-tight'>Community</h1>
          <p className='text-muted-foreground text-xl'>
            You can add your clients to a group chat automatically. Forming a feel for community.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className='space-y-3'
        >
          <h1 className='text-3xl tracking-tight'>Targeted ads and sugestions</h1>
          <p className='text-muted-foreground text-xl'>
            Users get notified when you add a new event.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
