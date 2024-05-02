import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/system/Box'
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const top100Films = [
    {
        title: "test1"
    },
    {
        title: "test2"
    }
]

const Searchbar = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return <>
        <Box sx={{ display: 'flex', minWidth: isSmallScreen ? '100vw' : '568px', maxWidth: isSmallScreen ? '100vw' : '568px', paddingTop: '10px', paddingBottom: '10px'}}>
            <Autocomplete
            size="small"
                id="free-solo-demo"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) =>
                    <TextField size="small" {...params} placeholder="Search a song of your choice"/>
                }
                sx={{border: '1px solid black', width: '100%', bgcolor: 'white',  borderRadius: isSmallScreen ? 0 : '8px', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            />
            <IconButton type="button" aria-label="search" sx={{ px: '14px', bgcolor: 'white', border: '1px solid black', borderRadius: isSmallScreen ? 0 : '8px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 0 }}>
                <SearchIcon />
            </IconButton>
        </Box>

    </>
}

export { Searchbar };