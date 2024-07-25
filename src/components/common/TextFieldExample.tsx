import { InputAdornment, Stack } from '@mui/material'
import TextField from '@mui/material/TextField';
import { EmailOutlined } from '@mui/icons-material';

const TextFieldExample = () => {
    return (
        <Stack direction={'row'} spacing={5}>
            <TextField placeholder='Enter Your name' variant='filled' label='Name' size='small' />
            <TextField
                placeholder='Enter Email' variant='filled'
                label='Email' size='small'
                required
                FormHelperTextProps={{
                    style: {
                        color: "red"
                    }
                }}

                type='email'
                InputProps={{

                    startAdornment: <InputAdornment position='start' >

                        <EmailOutlined fontSize='small' />
                    </InputAdornment>,

                }}



                helperText='Email should be valid field'
                color='secondary'
            />


        </Stack>
    )
}

export default TextFieldExample
