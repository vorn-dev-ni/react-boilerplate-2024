import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

const IconExample = () => {
    return (
        <div>
            <IconButton aria-label='love' color='error' size='medium'>
                <FavoriteIcon />

            </IconButton>

        </div>
    )
}

export default IconExample
