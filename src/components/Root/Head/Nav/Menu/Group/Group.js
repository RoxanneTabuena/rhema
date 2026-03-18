import { useState } from 'react'
import style from './group.module.css'
import { Line } from './Line/Line'
export const Group = ({ entry }) => {
    const [key, value] = entry
    const { link, children } = value
    const [open, setOpen] = useState(false)

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onClick={() => setOpen(true)}>
            <Line title={key} link={link} />

            {children && (
                <div className={style.group}>
                    {open &&
                        Object.entries(children).map(([k, v]) => (
                            <Group key={k} entry={[k, v]} />
                        ))
                    }
                </div>
            )}
        </div>
    )
}