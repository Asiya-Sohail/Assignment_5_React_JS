import React, { useContext } from 'react';
import { Layout, Drawer, List, Button, Image } from 'antd';
import CartContext from '../Context/Context1'; 

function Sidebar() {
    const { visible, setVisible, cartItems, setCartItems } = useContext(CartContext);
    
    const closeDrawer = () => {
        setVisible(false);
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <Layout>
            {/* Sider as a drawer (Cart) */}
            <Drawer
                title="Your Cart"
                placement="right"
                onClose={closeDrawer}
                visible={visible}
                width={400}
            >
                {cartItems.length === 0 ? (
                    <p>Cart is empty</p>
                ) : (
                    <List
                        itemLayout="horizontal"
                        dataSource={cartItems}
                        renderItem={(item) => (
                            <List.Item
                                actions={[
                                    <Button onClick={() => removeFromCart(item.id)} type="link">Remove</Button>
                                ]}>
                                <List.Item.Meta
                                    avatar={<Image width={50} src={item.image} />}
                                    title={item.name}
                                    description={`Price: ${item.price} rs`}
                                />
                            </List.Item>
                        )}
                    />
                )}
            </Drawer>
        </Layout>
    );
}

export default Sidebar;
