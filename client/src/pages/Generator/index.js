import React, { useState, useRef } from 'react';

import { Button, Divider, Space, Form, Input, Select, Radio, Switch, Row, Col, Segmented, Drawer } from 'antd';
import { PlusOutlined, CheckOutlined, CloseOutlined, ExperimentOutlined } from '@ant-design/icons';

import { creativeType, templatePeripherals, defaultSize, config } from '../../constant/variables';

const { Option } = Select;

let index = 0;

const children = [];

for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const Generator = () => {
    const [form] = Form.useForm();

    const [items, setItems] = useState(defaultSize);
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, name || `New item ${index++}`]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                size="large"
            >
                <Row>
                    <Col span={20} style={{ display: 'flex', alignItems: 'center' }}>
                        <Row gutter={[24, 0]}>
                            {/* Template Type */}
                            <Col style={{ borderRight: '1px solid #ececec', display: 'flex', alignItems: 'center' }}>
                                <Radio.Group style={{ display: 'flex' }}>
                                    {
                                        creativeType.map((type, index) =>
                                            <Radio.Button key={index} value={type.name.toLowerCase()} style={{ height: '100px', width: '100px', marginRight: creativeType.length - 1 === index ? 0 : '1em', border: '1px solid #ececec', borderRadius: '1em' }}>
                                                <Row style={{
                                                    height: '-webkit-fill-available',
                                                    width: '-webkit-fill-available',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'

                                                }}>
                                                    <Col span={12} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        {type.icon}
                                                        {type.name}
                                                    </Col>
                                                </Row>
                                            </Radio.Button>)
                                    }
                                </Radio.Group>
                            </Col>
                            {/* Template Dimension */}
                            <Col>
                                <Form.Item label="Dimension" required tooltip="This is a required field">
                                    <Select
                                        allowClear
                                        placeholder="Creative Dimension"
                                        style={{ width: 200 }}
                                        dropdownRender={(menu) => (
                                            <>
                                                {menu}
                                                <Divider
                                                    style={{
                                                        margin: '8px 0',
                                                    }}
                                                />
                                                <Space
                                                    style={{
                                                        padding: '0 8px 4px',
                                                    }}
                                                >
                                                    <Input
                                                        placeholder="e.g. 300x250"
                                                        ref={inputRef}
                                                        value={name}
                                                        onChange={onNameChange}
                                                    />
                                                    <Button type="text" size='small' icon={<PlusOutlined />} onClick={addItem}>
                                                        Create
                                                    </Button>
                                                </Space>
                                            </>
                                        )}
                                    >
                                        {items.map((item) => (
                                            <Option key={item}>{item}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    {/* Template Peripherals */}
                    <Col span={4} >
                        <Form.Item label="Template Peripherals" required tooltip="This is a required field">
                            <Row gutter={[0, 8]}>
                                {templatePeripherals.map((peripherals, index) =>
                                    <Col span={24} key={index}>
                                        <Switch
                                            size='small'
                                            checkedChildren={<CheckOutlined />}
                                            unCheckedChildren={<CloseOutlined />}
                                        /> {peripherals}
                                    </Col>
                                )
                                }
                            </Row>

                        </Form.Item>
                    </Col>
                </Row>
            </Form>

            <Divider style={{ marginTop: 0 }} />
            <>
                <Row>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button type="primary" onClick={showDrawer} icon={<ExperimentOutlined />}>
                            Config
                        </Button>
                        <Segmented size="large" defaultValue="Frame 1-STB" options={['Frame 1-STB', 'Frame 2-STB', 'Frame 3-STB']} />
                    </Col>
                </Row>
            </>
            <div className="site-drawer-render-in-current-wrapper">
                <Drawer
                    title="Basic Configuration"
                    placement="left"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    getContainer={false}
                    style={{ position: 'absolute' }}
                >
                    <Form
                        form={form}
                        layout="vertical"
                        size="large"
                    >
                        {
                            config.map((configuration, index) =>
                                <Form.Item key={index} label={configuration.name} required tooltip="This is a required field">
                                    <Select
                                        mode="tags"
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder="Tags Mode"
                                        onChange={handleChange}
                                    >
                                        {children}
                                    </Select>
                                </Form.Item>
                            )
                        }

                    </Form>
                </Drawer>
                Hello
            </div>
        </>
    );
};

export default Generator;