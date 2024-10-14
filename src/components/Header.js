import React from 'react';
import logo from '../assets/images/logo.png';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout} from 'antd';
import { useContext } from 'react';
import Context1 from '../Context/Context1';

function Header1() {
    const [visible, setVisible] = useContext(Context1);
    const {Header} = Layout;

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
            <img src={logo} alt="logo" style={{ marginRight: '8px', height:'100px', width: '110px' }} />
        </div>
        <h2 style={{ color: '#000', margin: '0 auto' }}>Jewellery Store</h2>
        <ShoppingCartOutlined style={{ fontSize: '24px', color: '#000', cursor: 'pointer' }}
         onClick={showDrawer} 
        />
      </Header>
    </Layout>
  )
}

export default Header1