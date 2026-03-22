import { useState, useEffect } from 'react'
import style from './group.module.css'
import { Line } from './Line/Line'
export const Group = ({ entry, expand }) => {
    const [key, value] = entry
    const { link, children } = value
    const [open, setOpen] = useState(expand)

    useEffect(() => {
        setOpen(expand)
    }, [expand])

    return (
        <div
            onMouseEnter={() =>!expand && setOpen(true)}
            onClick={() =>!expand && setOpen(true)}>
            <Line title={key} link={link} expand={expand}/>

            {children && (
                <div className={style.group}>
                    {open &&
                        Object.entries(children).map(([k, v]) => (
                            <Group key={k} entry={[k, v]} expand={expand}/>
                        ))
                    }
                </div>
            )}
        </div>
    )
}