import React, { useState, useRef } from 'react';

import { Button, Divider, Space, Form, Input, Select, Radio, Card, Switch, Typography, Row, Col } from 'antd';
import { PlusOutlined, CheckOutlined, CloseOutlined, LayoutOutlined, LaptopOutlined, FacebookOutlined, GoogleOutlined, OneToOneOutlined } from '@ant-design/icons';

const { Title } = Typography;

const { Option } = Select;

let index = 0;

const InitialSetup = () => {
    const [form] = Form.useForm();

    const [items, setItems] = useState(['120x600', '160x600', '300x250', '300x600', '728x90', '970x250']);
    const [name, setName] = useState('');
    const inputRef = useRef(null);

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

    return (
        <Card style={{ height: '-webkit-fill-available' }}>
            <Title>Initial Setup</Title>
            <Divider />
            <Form
                form={form}
                layout="vertical"
                size="large"
            >
                <Row gutter={[16]}>
                    <Col span={18}>
                        <Form.Item label="Template Name" required tooltip="This is a required field">
                            <Input placeholder="Creative Name" allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Dimension" required tooltip="This is a required field">
                            <Select
                                allowClear
                                placeholder="Creative Dimension"
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
                                                placeholder="Please enter item"
                                                ref={inputRef}
                                                value={name}
                                                onChange={onNameChange}
                                            />
                                            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                                Add item
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

                <Form.Item label="Creative Type" required tooltip="This is a required field">
                    <Radio.Group style={{ display: 'flex' }}>
                        <Radio.Button value="display" style={{ height: '150px', width: '150px', marginRight: '1em' }}>
                            <Row style={{
                                height: '-webkit-fill-available',
                                width: '-webkit-fill-available',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Col span={12} style={{ textAlign: 'center' }}>
                                    <LaptopOutlined style={{ fontSize: '3em' }} />
                                    Display
                                </Col>
                            </Row>
                        </Radio.Button>
                        <Radio.Button value="inbanner" style={{ height: '150px', width: '150px', marginRight: '1em' }}>
                            <Row style={{
                                height: '-webkit-fill-available',
                                width: '-webkit-fill-available',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Col span={12} style={{ textAlign: 'center' }}>
                                    <LayoutOutlined style={{ fontSize: '3em' }} />
                                    Inbanner
                                </Col>
                            </Row>
                        </Radio.Button>
                        <Radio.Button value="gads" style={{ height: '150px', width: '150px', marginRight: '1em' }}>
                            <Row style={{
                                height: '-webkit-fill-available',
                                width: '-webkit-fill-available',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Col span={12} style={{ textAlign: 'center' }}>
                                    <GoogleOutlined style={{ fontSize: '3em' }} />
                                    GAds
                                </Col>
                            </Row>
                        </Radio.Button>
                        <Radio.Button value="vpaid" style={{ height: '150px', width: '150px', marginRight: '1em' }}><Row style={{
                            height: '-webkit-fill-available',
                            width: '-webkit-fill-available',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Col span={12} style={{ textAlign: 'center' }}>
                                <OneToOneOutlined style={{ fontSize: '3em' }} />
                                VPaid
                            </Col>
                        </Row></Radio.Button>
                        <Radio.Button value="social" style={{ height: '150px', width: '150px', marginRight: '1em' }}>
                            <Row style={{
                                height: '-webkit-fill-available',
                                width: '-webkit-fill-available',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Col span={12} style={{ textAlign: 'center' }}>
                                    <FacebookOutlined style={{ fontSize: '3em' }} />
                                    Social
                                </Col>
                            </Row>
                        </Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="Template Peripherals" required tooltip="This is a required field">
                    <Row gutter={[0, 8]}>
                        <Col span={24}><Switch
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                        /> SplitText</Col>
                        <Col span={24}><Switch
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}

                        /> CustomEase</Col>
                        <Col span={24}><Switch
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                        /> Google Map</Col>
                    </Row>

                </Form.Item>

                <Divider />
                <Form.Item>
                    <Button type="primary">Dynamic Elements</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default InitialSetup;