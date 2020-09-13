import React, { useState, useEffect, useReducer } from 'react'
import { Layout, Form, Menu, Button, Popconfirm, Drawer, Switch, Row, Col } from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PoweroffOutlined,
    DashboardOutlined,
    SettingFilled,
    CloseOutlined
} from '@ant-design/icons';

import './layout.scss'
import { logout } from '../login/actions';
import { useDispatch, useSelector } from 'react-redux';
import SubMenu from 'antd/lib/menu/SubMenu';
import history from '../store/history';
import { setActiveItem } from './actions';

export default function DefaultLayout({ children }) {
    const { Header, Sider, Content, Footer } = Layout;
    const dispatch = useDispatch();
    const [collapsed, setcollapsed] = useState(false)
    const [visible, setDrawer] = useState(false)
    const [theme, setTheme] = useState("dark")
    const [selectedkey, setSelectedkey] = useState();
    const pathname = useSelector(store => store.router.location.pathname);

    useEffect(() => {
        switch (pathname) {
            case "/dashboard-analysis":
                setSelectedkey("1")
                break;
            case "/dashboard-monitor":
                setSelectedkey("2")
                break;

            default:
                setSelectedkey("1")
                break;
        }

    }, [pathname])


    function toggle() {
        console.log(collapsed);
        if (collapsed === true) {
            setcollapsed(false)
        } else {
            setcollapsed(true)
        }
    };
    const onCollapse = collapsed => {
        console.log(collapsed);
        setcollapsed(collapsed);
    };

    //logout confirm button will call action logout from action.js
    function confirmLogout(e) {
        dispatch(logout())
    }
    //cancel Logout
    function cancel(e) {
        console.log(e);
    }
    function handleClick(e) {
        let key = e.key;
        setSelectedkey(key)
        switch (key) {
            case "1":
                setUrl('/dashboard-analysis');
                break;
            case "2":
                setUrl('/dashboard-monitor')
                break;

            default:
                setUrl('/dashboard-analysis')
                break;
        }
    }
    const setUrl = (pathname) => {
        dispatch(setActiveItem(pathname))
    }

    const toggleSetting = () => {
        setDrawer(!visible);
    };
    const onClose = () => {
        setDrawer(false);
    };

    const changeTheme = (e) => {
        console.log(e);
        if (e) {
            setTheme("light")
        }
        else {
            setTheme("dark")
        }
        onClose()
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider theme={theme} collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme={theme} mode="inline" defaultOpenKeys={['sub1']} selectedKeys={[selectedkey]} forceSubMenuRender={true} onSelect={(e) => handleClick(e)} >
                    <SubMenu key="sub1" icon={<DashboardOutlined />} title="Dashboard">
                        <Menu.Item key="1">
                            Analysis
                        </Menu.Item>
                        <Menu.Item key="2">
                            Monitor
                        </Menu.Item>
                        {/* <Menu.Item key="3">WorkPlace</Menu.Item> */}
                    </SubMenu>
                    {/* <Menu.Item key="4" icon={<UserOutlined />}>
                        ABOUT
                    </Menu.Item> */}
                </Menu>
            </Sider>
            <Layout className="site-layout" >
                <Header className={theme === "dark" ? "dark_header" : "light_header"} style={{ padding: 0 }}>
                    {
                        collapsed ? <MenuUnfoldOutlined className={theme === "dark" ? "text-light trigger" : "text-dark trigger"} onClick={toggle} /> : <MenuFoldOutlined className={theme === "dark" ? "text-light trigger" : "text-dark trigger"} onClick={toggle} />
                    }

                    <Popconfirm
                        placement="rightTop"
                        title="You want to logout?"
                        onConfirm={confirmLogout}
                        onCancel={cancel}
                        okText="Logout"
                        cancelText="Cancel"
                    >
                        <Button
                            type="text"
                            size="large"
                            className={theme === "dark" ? "text-light float-right m-3" : "text-dark float-right m-3"}
                            icon={<PoweroffOutlined />}
                        ></Button>

                    </Popconfirm>
                </Header>
                <Content className={theme === "dark" ? "dark_content" : "light_content"}>
                    <div className="site-drawer-render-in-current-wrapper" style={{ minHeight: '100vh', position: "fixed", right: 0, zIndex: 9999 }}>
                        <Button
                            type="button"
                            className="float-right btn-primary setting-btn"
                            onClick={toggleSetting}
                            size="large"
                            style={visible ? { right: 256 } : { right: 0 }}
                            icon={<SettingFilled />}
                        ></Button>
                        <Drawer
                            title="Setting"
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={visible}
                            getContainer={false}
                            maskClosable={true}
                            closeIcon={<CloseOutlined />}

                            style={{ position: 'absolute' }}

                        >
                            <Form>

                                <Row>
                                    <Col span={24}>
                                        <Form.Item label="light Theme">
                                            <Switch onChange={changeTheme} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </Drawer>
                    </div>
                    {children}
                </Content>
                <Footer className={theme === "dark" ? "dark_header text-light" : "light_header text-dark"} style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}