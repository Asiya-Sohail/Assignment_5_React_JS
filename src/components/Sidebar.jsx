import React from 'react';
import { Layout, Drawer } from 'antd';
import { useContext } from 'react';
import Context1 from '../Context/Context1';

function Sidebar() {
    const [visible, setVisible] = useContext(Context1);
    const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <Layout>
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
  )
}

export default Sidebar