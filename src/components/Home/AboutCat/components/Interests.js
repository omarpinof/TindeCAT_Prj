import React from 'react';
import { InterestOne } from './interestOne';
import {INTERESTS} from '../../../../data/db'

export const Interests = () => {
    return (
        <div className="interest-container">
            <h3>Interests List</h3>
            <hr />
            <div className="interest-box">
                {
                    INTERESTS.map( (item, key) => <InterestOne key = {key} name ={item.name} status={item.status} />)
                }
            </div>
        </div>
    )
} 