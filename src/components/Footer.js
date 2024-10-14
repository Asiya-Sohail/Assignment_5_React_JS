import React from 'react';
import { Layout } from 'antd';


const { Footer } = Layout;

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };

function Footer1() {
  return (
    <div>
        <Layout>
            {/* Footer */}
            <Footer style={footerStyle}>
                <a href='https://www.tesoro.pk/' target='blank' rel="noopener noreferrer" style={{color: "black"}}>Visit Website</a>
            </Footer>
        </Layout>
    </div>
  )
}

export default Footer1