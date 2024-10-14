import React from 'react';
import logo from '../assets/images/logo.png';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Badge } from 'antd'; // Import Badge from antd
import { useContext } from 'react';
import Context1 from '../Context/Context1';

function Header1() {
    const { setVisible, cartItems } = useContext(Context1);
    const { Header } = Layout;

    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        lineHeight: '64px',
        backgroundColor: '#4096ff',
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const showDrawer = () => {
        setVisible(true);
    };

    return (
        <Layout>
            {/* Header with brand logo, title, and cart icon */}
            <Header style={headerStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Logo */}
                    <img 
                        src={logo} 
                        alt="logo" 
                        style={{ marginRight: '8px', height: '50px', width: 'auto' }} // Adjusted size
                    />
                </div>
                <h2 style={{ color: '#fff', margin: '0 auto' }}>Jewellery Store</h2>
                <div style={{ position: 'relative' }}>
                    <Badge count={cartItems.length} overflowCount={99} style={{ backgroundColor: '#f5222d' }}>
                        <ShoppingCartOutlined 
                            style={{ fontSize: '24px', color: '#fff', cursor: 'pointer' }} 
                            onClick={showDrawer} 
                        />
                    </Badge>
                </div>
            </Header>
        </Layout>
    );
}

export default Header1;
