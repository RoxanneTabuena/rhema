import { Group } from './Group/Group'
import { Line } from './Group/Line/Line'
import { siteMap } from '../sitemap'
import { Nav } from './Nav'
import style from './menu.module.css'

export const Menu = () => {
    const renderNode = (node, key) => {
        console.log( node, key)

        // node has children → render a group
        if (node.children) {
            return (
                <Group key={key}>
                    {Object.entries(node.children).map(([k, child]) =>
                        renderNode(child, k)
                    )}
                </Group>
            )
        }

        // node is an endpoint → render a line
        return (
            <Line
                key={key}
                title={key}
                link={node.link}
            />
        )
    }

    return (
        <div className={style.menu}>
            {Object.entries(siteMap).map(([key, node]) =>
                renderNode(node, key)
            )}
            <Nav />
        </div>
    )
}