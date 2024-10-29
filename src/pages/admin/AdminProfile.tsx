import React, { useEffect, useState } from 'react';
import { Button, TextInput, Textarea } from 'flowbite-react';
import { useCreateLobbyMutation } from '@/store/api/lobbyApi';
import NotificationToast from '@/components/ui/NotificationToast';

const AdminPage: React.FC = () => {
    const [createLobby, { isLoading, isSuccess }] = useCreateLobbyMutation();
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleCreateLobby = async () => {
        setShowForm(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Call the createLobby mutation with title and description
        await createLobby({ title, description });
        setShowToast(true);
    };

    useEffect(() => {
        if (isSuccess) {
            // Automatically close the toast after a few seconds
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

    return (
        <div className='container mx-auto flex flex-col items-center justify-center w-screen h-screen'>
            <h2 className='text-lg font-bold mb-4'>Fraugrammers</h2>
            {showForm ? (
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <TextInput
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Lobby Title'
                        required
                        className='mb-4'
                    />
                    <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Lobby Description'
                        required
                        className='mb-4'
                    />
                    <Button type='submit' color='success' isProcessing={isLoading}>
                        Create Lobby
                    </Button>
                </form>
            ) : (
                <div className='mb-4'>
                    <Button
                        color='success'
                        onClick={handleCreateLobby}
                        isProcessing={isLoading}
                    >
                        Create Lobby
                    </Button>
                </div>
            )}
            {showToast && <NotificationToast type='success' message='Lobby was created!' />}
        </div>
    );
};

export default AdminPage;