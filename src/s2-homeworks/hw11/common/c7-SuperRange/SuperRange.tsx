import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: "#0C2",
                width: 150,
                '& .MuiSlider-rail': {
                    color: "grey"
                },
                '& .Mui-focusVisible': {
                    boxShadow: "0px 0px 0px 8px rgba(0, 204, 34, .16)",
                },
                '& .MuiSlider-thumb': {
                    border: '2px solid currentColor',
                    backgroundColor: '#fff',
                    // boxShadow: "0px 0px 0px 8px rgba(0, 204, 34, .16)",
                    '&:before': {
                        width:5,
                        height: 5,
                        backgroundColor: "currentColor",
                    },
                    '&:hover': {
                        boxShadow: "0px 0px 0px 8px rgba(0, 204, 34, .16)"
                    }
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
