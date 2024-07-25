import { Typography } from '@mui/material'
import React from 'react'

const TypographyExample = () => {
    return (
        <div>
            <Typography
                variant='h5'
                color={'red'}
                fontSize={25}
                my={10}
                align='center'
            >
                Create Task
            </Typography>
            <Typography

                my={4}
                noWrap
                align='justify'
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus recusandae quisquam esse laboriosam dolore est sint accusantium a sed voluptatum. Reprehenderit, quibusdam dolorum odio beatae nisi ducimus facere deserunt exercitationem.
            </Typography>

            <Typography
                variant='h6'
                color={'textSecondary'}
                component={'h2'}
                gutterBottom
            >
                Header
            </Typography>
        </div>
    )
}

export default TypographyExample
