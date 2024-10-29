import { Button } from 'flowbite-react';

const RacePage: React.FC = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center w-screen h-screen'>
      <input
        type='text'
        placeholder='Enter your name'
        className='mb-4 p-2 border border-gray-300 rounded'
      />
      <Button 
        color='success' 
      >
        Enter
      </Button>
    </div>
  );
};

export default RacePage;