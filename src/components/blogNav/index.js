import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
class BlogNav {
	constructor() {

	}
	render(){
		return(
			<Layout className="layout">
		    <Header>
		    <div className="logo" >hkanye的博客</div>
		    <Menu
		        theme="dark"
		        mode="horizontal"
		        style={{ lineHeight: '64px' }}>
		            <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
		            <Menu.Item key="3"><Link to="/demo">demo</Link></Menu.Item>
		    </Menu>
		    </Header>
			</Layout>
		)
	}
}
