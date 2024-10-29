import React from 'react';
import { Button } from 'flowbite-react';

const AdminPage: React.FC = () => {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center w-screen h-screen'>
            <h2 className='text-lg font-bold mb-4'>Admin Page</h2>
            <div className='mb-4'>
                <Button color='success'>Start Game</Button>
            </div>
            <div className='w-full'>
                <h3 className='font-semibold'>Players Status:</h3>
                <ul>
                    <li>player name</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminPage;