import { Button, ButtonGroup, Container, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react'

const ButtonExample = () => {
    const [platform, setPlatform] = useState<string | null>(null)
    return (
        <Stack spacing={2} >
            <Stack direction={'row'}>
                <Button variant='outlined' color='primary'  >
                    Click
                </Button>
                <Button variant='outlined' color='primary' disableRipple >
                    No Ripple Effect
                </Button>
                <Button type='submit' variant='contained' color='secondary' >
                    Submit
                </Button>
                <ButtonGroup color='primary' variant='outlined'>

                    <Button>Dark</Button>
                    <Button>Light</Button>


                </ButtonGroup>
            </Stack>
            <Stack direction={'row'} display={'block'} spacing={5}>

                <Button variant='outlined' size='small' color='success'> Large</Button>
                <Button variant='outlined' size='medium' color='error'> Medium</Button>

                <Button variant='outlined' size='large'> Large</Button>

            </Stack>
            <Stack>
                <ToggleButtonGroup
                    aria-label="Platform"
                    exclusive
                    color='primary'
                    size='small'

                    value={platform}
                    onChange={(
                        e: React.MouseEvent<HTMLElement>,
                        newValue: string
                    ) => {
                        setPlatform(newValue)
                    }}

                >

                    <ToggleButton aria-label='Web' value={'web'}>
                        Web
                    </ToggleButton>
                    <ToggleButton aria-label='Android' value={'android'}>
                        Android
                    </ToggleButton>
                    <ToggleButton aria-label='IOS' value={'ios'}>
                        IOS
                    </ToggleButton>
                </ToggleButtonGroup>

            </Stack>


        </Stack>
    )
}

export default ButtonExample
