import { Stack, Typography } from '@mui/material'

const NotFoundPage = () => {
    return (
        <Stack maxWidth={'100%'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
            <Typography color={'primary'} variant='h6'>
                Page or content does not exist
            </Typography>
        </Stack>
    )
}

export default NotFoundPage
