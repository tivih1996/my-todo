
import '../App.css'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function Header() {
    return (
        <>
        <div className='App'>
           <Box mt={5} >
            <Typography variant='h3'  >#todo

            </Typography>
           </Box>
            <div>

                <Box  sx={{  width: '100%', borderBottom: 3, borderColor: 'divider' }}>
                    <Tabs textColor="secondary"
                        indicatorColor="secondary" centered  wrapped >
                        <Tab label="All" value="/" component={Link} to="/all" />
                        <Tab label="Active" value="/" component={Link} to="/active" />
                        <Tab label="Complete" value="/" component={Link} to="/complete" />
                    </Tabs>
                </Box>


            </div>
            </div> 
        </>
    )
}

export default Header