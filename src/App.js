import './App.css';
import React, { useState } from 'react';
import { Layout, Card, Button, Row, Col, Drawer } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import img1 from './assets/images/White_Pearls.jpeg';
import img2 from './assets/images/Wreth_Silver.jpg';
import img3 from './assets/images/Leaf_Silver_Bracelet.jpg';
import img4 from './assets/images/Zircon_Band_Gold.jpg';
import img5 from './assets/images/Pendant_fine_zircon.jpg';
import img6 from './assets/images/Line_Wreath_Necklace.jpeg';
import img7 from './assets/images/Set1.jpeg';
import img8 from './assets/images/princess of pearls silver set.jpg';
import logo from './assets/images/logo.png';

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

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

const contentStyle = {
  padding: '16px',
  backgroundColor: '#f0f2f5',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const App = () => {
  const [visible, setVisible] = useState(false); // State to control the visibility of the drawer

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  // Sample data for the cards
  const products = [
    { id: 1, name: 'White Pearl ops', description: 'Clear, Rhodium Plated (Silver)', image: img1 },
    { id: 2, name: 'Wreath Silver Earrings', description: 'Clear, Rhodium Plated (Silver)', image: img2 },
    { id: 3, name: 'Leaf Silver Bracelet', description: 'White, Rhodium Plated (Silver)', image: img3 },
    { id: 4, name: 'Zircon Band Gold', description: 'Gold, Gold Plated (Gold)', image: img4 },
    { id: 5, name: 'Pendant Fine Zircon', description: 'White, Rhodium Plated (Silver)', image: img5  },
    { id: 6, name: 'Line Wreath Necklace', description: 'White, Rhodium Plated (Silver)', image: img6 },
    { id: 7, name: 'Leaves Set with Pearl', description: 'White	Gold Plated (Gold) Pearl', image: img7 },
    { id: 8, name: 'Princess Of Pearls Set', description: 'Formal White Rhodium Plated (Silver)', image: img8 },
  ];

  return (
    <Layout>
      {/* Header with brand logo, title, and cart icon */}
      <Header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <img src={logo} alt="logo" style={{ marginRight: '8px', height:'100px', width: '110px' }} />
        </div>
        <h2 style={{ color: '#000', margin: '0 auto' }}>Jewellery Store</h2>
        <ShoppingCartOutlined
          style={{ fontSize: '24px', color: '#000', cursor: 'pointer' }}
          onClick={showDrawer}
        />
      </Header>

      {/* Main content with product cards */}
      <Content style={contentStyle}>
        <Row gutter={[16, 16]}>
          {products.map(product => (
            <Col key={product.id} span={6}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.image} />}
              >
                <Meta title={product.name} description={product.description} />
                <Button type="primary" style={{ marginTop: '16px', width: '100%' }}>
                  Add to Cart
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* Footer */}
      <Footer style={footerStyle}>
        <a href='https://www.tesoro.pk/' target='blank' rel="noopener noreferrer" style={{color: "black"}}>Visit Website</a>
      </Footer>

      {/* Sider as a drawer (Cart) */}
      <Drawer
        title="Your Cart"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
        width={300}
      >
        <p>Your cart items will appear here.</p>
      </Drawer>
    </Layout>
  );
};

export default App;
