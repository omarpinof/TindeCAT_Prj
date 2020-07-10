import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle

export const PreferencesAges = ({ ageMin = 3, ageMax = 10, notifyChange }) => {


    const onChangeHandler = (result) => {
        //console.log('min: ', result[0])
        //console.log('max: ', result[1])
        const min = result[0]
        const max = result[1]
        notifyChange(min, max)
    } 

    return (
        <div className="preferences-ages-container">
            <p>Choose Age Range</p>
            <Range railStyle={{ backgroundColor: '#9e3bec' }} 
                onChange={ onChangeHandler } min={1} max={20}
                defaultValue={[ageMin, ageMax]} tipFormatter={value => `${value} age`} />
        </div>
    )   
}