import { useState } from 'react'
import style from './group.module.css'
import { Line } from './Line/Line'
export const Group = ([key, value]) => {
        // extract link and children from object
        const { link, children } = value

        return (
            <div key={key} >
                {/* render title no matter what */}
                <Line title={key} link={link} children={children}/>
                {children &&
                // add group styling when there are children present
                <div className={style.group}>
                    {/* run the translator until an endpoint is found */}
                    {Object.entries(children).map(Group)}
                </div>
                }
            </div>
        )
    }