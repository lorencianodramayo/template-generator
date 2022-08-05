import React from 'react';
import { Alert, Steps, Space } from 'antd';

const { Step } = Steps;

const Navigation = ({ setStep, currentStep }) => {

    const onChange = (value) => {
        setStep(value);
    };

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Alert
            banner={true}
                message="Template Generator"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                type="info"
            />

            <Steps current={currentStep} onChange={onChange} direction="vertical">
                <Step title="Initial Setup" description="Please fill all required fields." />
                <Step title="Dynamic Elements" description="Select the best fit dynamic elements for this tempalte." />
                <Step title="Set Fonts" description="Can be uploaded or add as a link." />
                <Step title="Image Settings" description="" />
            </Steps>
        </Space>
    );
};

export default Navigation;