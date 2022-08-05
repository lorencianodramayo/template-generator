
import React, { useState } from 'react';

// ant components
import { Layout, Card, Space } from 'antd';

// reusable components
import Navigation from './components/Navigation';

// pages
import InitialSetup from './pages/InitialSetup';
import DynamicElements from './pages/DynamicElements';
import ImageSettings from './pages/ImageSettings';

// css
import './App.less';

const { Content, Sider } = Layout;

const App = () => {
  const [step, setStep] = useState(0);
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        width={500}
        theme="light"
      >
        <Space direction="vertical" size="middle" style={{ display: 'flex', padding: "2em" }}>
          <Card size="small">
            <Navigation setStep={setStep} currentStep={step} />
          </Card>
        </Space>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 500,
          height: '100vh'
        }}
      >
        <Content
          style={{
            margin: '24px',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              height: 'calc(100vh - 3em)'
            }}
          >
            {step === 0 ? <InitialSetup /> : step === 1 ? <DynamicElements /> : <ImageSettings />}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
};

export default App;