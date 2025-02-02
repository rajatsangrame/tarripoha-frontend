import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container, Typography } from '@mui/material';

interface Word {
    id: number;
    name: string;
    meaning: string;
    languageId: number;
}

const fetchSavedWords = async (): Promise<Word[]> => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI2LCJ1c2VybmFtZSI6InJhamF0Iiwicm9sZXMiOlsiQURNSU4iLCJVU0VSIl0sImlhdCI6MTczODUyOTA1NywiZXhwIjoxNzM5MTMzODU3fQ.lv68oI6eYPBB_L7kKEnmLURez8fWhScirpkEUQJA7vA'
    const response = await axios.get<Word[]>('http://localhost:3001/word/get-words', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export default function Saved() {
    const { data: words, error, isLoading } = useQuery({
        queryKey: ['savedWords'],
        queryFn: fetchSavedWords,
    });

    if (isLoading) return <Typography>Loading...</Typography>;
    if (error) {
        console.log(error);
        return <Typography variant="h6" color="error">Error loading data: {error instanceof Error ? error.message : "Unknown error"}</Typography>;
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Word', width: 200 },
        { field: 'meaning', headerName: 'Meaning', width: 300 },
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Saved Words
            </Typography>
            <DataGrid
                rows={words || []}
                columns={columns}
            />
        </Container>
    );
}
