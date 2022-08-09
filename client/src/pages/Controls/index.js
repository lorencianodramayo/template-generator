import React from 'react';
import { Alert, Space } from 'antd';

const Controls = () => {
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Alert
                banner={false}
                message="Template Details"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                type="info"
            />
        </Space>
    );
};

export default Controls;