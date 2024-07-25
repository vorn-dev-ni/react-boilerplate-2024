import { Box, styled, Container, Typography, Stack } from '@mui/material'
import { theme } from '../../utils/theme'

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.status.failure,



}))
const Home = () => {

    return (
        <Container maxWidth="lg" >
            <Stack
                justifyContent={'center'}
                height={'100vh'}
                direction="column"

            >

                <Typography variant='h6' textAlign={'center'} color={'primary'} >
                    Welcome to Home Page
                </Typography>
            </Stack>



        </Container>
    )
}

export default Home
