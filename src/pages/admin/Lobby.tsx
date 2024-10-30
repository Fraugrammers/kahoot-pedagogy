import { useParams } from 'react-router-dom';
import { useGetLobbyQuery } from '@/store/api/lobbyApi';

const AdminLobby: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: lobby, isLoading, error } = useGetLobbyQuery(id!, { pollingInterval: 5000 });
    console.log(lobby);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error loading lobby data.</div>;
    }

    if (!lobby) {
        return <div>No lobby found.</div>;
    }

    return (
        <div className='container mx-auto flex flex-col items-center justify-center w-screen h-screen'>
            <h2 className='text-lg font-bold mb-4'>{lobby.title}</h2>
            <div className='text-sm mb-2'>Lobby Code: {lobby.code}</div>
            <div className='w-full mb-4'>
                <h3 className='font-semibold mb-2'>Players:</h3>
                <ul>
                    {lobby.players.length > 0 ? (
                        lobby.players.map((player, index) => (
                            <li key={index}>{player.username}</li>
                        ))
                    ) : (
                        <li>No players in the lobby.</li>
                    )}
                </ul>
            </div>
            <div className='w-full'>
                <h3 className='font-semibold mb-2'>Tasks:</h3>
                <ul>
                    {lobby.tasks.length > 0 ? (
                        lobby.tasks.map((task, index) => (
                            <li key={index}>{task.title}</li>
                        ))
                    ) : (
                        <li>No tasks available.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default AdminLobby;