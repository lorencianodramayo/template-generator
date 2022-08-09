
import React, { useState } from 'react';

// ant components
import { Layout, Card, Space } from 'antd';

// reusable components
import Controls from './pages/Controls';

// pages
import Generator from './pages/Generator';

// css
import './App.less';

const { Content, Sider } = Layout;

const App = () => {
  const [step, setStep] = useState(0);
  return (
    <Layout hasSider>
      <Layout
        className="site-layout"
        style={{
          marginRight: 400,
          height: '100vh'
        }}
      >
        <Content>
          <div
            style={{
              padding: 2,
              height: '100vh'
            }}
          >
            <Card style={{ height: '-webkit-fill-available', borderRadius: '0.5em' }}>
              <Generator />
            </Card>
          </div>
        </Content>
      </Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
        }}
        width={400}
        theme="light"
      >
        <Space direction="vertical" size="middle" style={{ display: 'flex', padding: "1em" }}>
          <Card size="small" style={{height: 'calc(100vh - 2em)'}}>
            <Controls setStep={setStep} currentStep={step} />
          </Card>
        </Space>
      </Sider>
    </Layout>
  )
};

export default App;