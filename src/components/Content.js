import React from 'react';
import { Layout, Card, Button, Row, Col} from 'antd';
import img1 from '../assets/images/White_Pearls.jpeg';
import img2 from '../assets/images/Wreth_Silver.jpg';
import img3 from '../assets/images/Leaf_Silver_Bracelet.jpg';
import img4 from '../assets/images/Zircon_Band_Gold.jpg';
import img5 from '../assets/images/Pendant_fine_zircon.jpg';
import img6 from '../assets/images/Line_Wreath_Necklace.jpeg';
import img7 from '../assets/images/Set1.jpeg';
import img8 from '../assets/images/princess of pearls silver set.jpg';

const { Content } = Layout;
const { Meta } = Card;

const contentStyle = {
    padding: '16px',
    backgroundColor: '#f0f2f5',
  };

    // Sample data for the cards
const products = [
    { id: 1, name: 'White Pearl ops', description: 'Clear, Rhodium Plated (Silver)', image: img1 },
    { id: 2, name: 'Wreath Silver Earrings', description: 'Clear, Rhodium Plated (Silver)', image: img2 },
    { id: 3, name: 'Leaf Silver Bracelet', description: 'White, Rhodium Plated (Silver)', image: img3 },
    { id: 4, name: 'Zircon Band Gold Ring', description: 'Gold, Gold Plated (Gold)', image: img4 },
    { id: 5, name: 'Pendant Fine Zircon', description: 'White, Rhodium Plated (Silver)', image: img5  },
    { id: 6, name: 'Line Wreath Necklace', description: 'White, Rhodium Plated (Silver)', image: img6 },
    { id: 7, name: 'Leaves Set with Pearl', description: 'White	Gold Plated (Gold) Pearl', image: img7 },
    { id: 8, name: 'Princess Of Pearls Set', description: 'Formal White Rhodium Plated (Silver)', image: img8 },
];
    

function Content1() {
  return (
    <Layout>
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
    </Layout>
  )
}

export default Content1