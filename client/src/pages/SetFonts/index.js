import React from 'react';
import { Card, Form, Upload } from 'antd';

import { InboxOutlined } from '@ant-design/icons';

export default function SetFonts() {

    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e?.fileList;
    };
    
    return (
        <Card>
            <Form.Item label="Upload font" required tooltip="This is a required field">
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
        </Card>
    )
}
