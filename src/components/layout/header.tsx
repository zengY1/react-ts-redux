import * as React from 'react'
import { Layout, Icon, Popover } from 'antd'
import './layout.less'

const { Header } = Layout
interface HProps {
    props?: any,
    getLogout?: () => void,
    changePassWord?: () => void,
    toggleCollapsed?: () => void,
    collapsed?: boolean
}
interface IState {
    collapsed: Boolean
}
export default class HeaderComponent extends React.Component<HProps, IState> {
    constructor(props: any) {
        super(props)
    }
    render() {
        const { collapsed } = this.props

        return (<Header style={{
            background: '#fff',
            padding: 0,
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{ flex: '1 1 0' }}>
                <Icon
                    style={{ cursor: 'pointer' }}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggleCollapsed} />
            </div>
            <div style={{ paddingRight: 12 }}>
                <Popover trigger="click" placement="bottomRight" content={
                    <div className="user-menu">
                        <div onClick={this.props.changePassWord}>修改密码</div>
                        <div onClick={this.props.getLogout}>退出登录</div>
                    </div>

                }>
                    <Icon
                        style={{ cursor: 'pointer', fontSize: 24 }}
                        type='user' />Users
                </Popover>
            </div>
        </Header>)
    }
}

