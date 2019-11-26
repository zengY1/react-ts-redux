import * as React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout
const { Item, SubMenu } = Menu

interface ISiderProps extends RouteComponentProps {
    collapsed?: boolean
}

const MenuList = [
    { key: '1', title: '首页', path: '/home', icon: 'home' },
    {
        key: '2', title: 'demo', icon: 'file-search',
        children: [
            {
                key: '2-1', title: 'demo', path: '/home/demo1', icon: 'frown'
            }]
    }
]

class SiderComponent extends React.Component<ISiderProps> {

    render() {
        const { collapsed } = this.props
        return (<Sider
            trigger={null}
            collapsible
            collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {
                    MenuList.map(m => {
                        return m.children ?
                            <SubMenu
                                key={m.key}
                                title={<span><Icon type={m.icon} /><span>{m.title}</span></span>}>
                                {
                                    m.children.map(mc => {
                                        return <Item key={mc.key}>
                                            <Link to={mc.path}>
                                                <Icon type={mc.icon} />
                                                <span>{mc.title}</span>
                                            </Link>
                                        </Item>
                                    })
                                }
                            </SubMenu> :
                            <Item key={m.key}>
                                <Link to={m.path}>
                                    <Icon type={m.icon} />
                                    <span>{m.title}</span>
                                </Link>
                            </Item>
                    })
                }
            </Menu>
        </Sider>)
    }
}

export default withRouter(SiderComponent)
