import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
    LineOutlined,
} from '@ant-design/icons';
import {NavLink, Route, Redirect} from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import { Typography } from 'antd';
import ToDoTodayContainer from "./components/MainContent/ToDoToday/ToDoTodayContainer";
import './App.css';
import ToDoTomorrowContainer from "./components/MainContent/ToDoTomorrow/ToDoTomorrowContainer";
import ToDoYesterdayContainer from "./components/MainContent/ToDoYesterday/ToDoYesterdayContainer";


const { Header, Content, Sider } = Layout;
const { Title} = Typography;



class App extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className="app-wrapper">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <Title className="logo" level={3}> ToDo list</Title>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<LineOutlined />}>
                                <NavLink  to="/today">Today</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<LineOutlined />}>
                                <NavLink  to="/tomorrow">Tomorrow</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<LineOutlined />}>
                                <NavLink  to="/yesterday">Yesterday</NavLink>
                            </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}/>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: "100vh",
                        }}>
                        <Route path='/today'
                               render={() => <ToDoTodayContainer/>}/>

                        <Route path='/tomorrow'
                               render={() => <ToDoTomorrowContainer/>}/>

                        <Route path='/yesterday'
                               render={() => <ToDoYesterdayContainer/>}/>

                        <Redirect exact from="/" to="/today"/>

                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default App;