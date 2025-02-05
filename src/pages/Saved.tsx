import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";

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
        { field: "name", headerName: "Word", align: "center", headerAlign: "center", width: 200 },
        { field: "meaning", headerName: "Meaning", align: "center", headerAlign: "center", width: 200 },
    ];

    const theme = useTheme();

    return (
        <Container>
            <Box
                sx={{
                    py: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                <Typography variant="h4" sx={{
                    color: theme.palette.text.primary

                }} gutterBottom>Saved Words</Typography>
            </Box>
            <DataGrid
                rows={words || []}
                columns={columns}
                sx={{
                    '& .MuiDataGrid-colu': {
                        fontWeight: 'bold',
                    },
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                }}
            />
        </Container>
    );
}
