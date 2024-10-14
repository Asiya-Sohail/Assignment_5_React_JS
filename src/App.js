import './App.css';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
      <Sidebar />
    </Layout>
  );
};

export default App;
