import React from 'react'
import { ReactionIcon } from './Reaction-icon'

export const Reactions = () => (
    <div className="reactions">
        <div>
            <ReactionIcon name="heart-dislike" />
        </div>
        <div>
            <ReactionIcon name="Heart" />
        </div>
    </div>
)