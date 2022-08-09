
import { LayoutOutlined, LaptopOutlined, FacebookOutlined, GoogleOutlined, OneToOneOutlined } from '@ant-design/icons';

export const creativeType = [
    {
        name: 'Display',
        icon: <LaptopOutlined style={{ fontSize: '2em' }} />,
    },
    {
        name: 'InBanner',
        icon: <LayoutOutlined style={{ fontSize: '2em' }} />,
    },
    {
        name: 'GAds',
        icon: <GoogleOutlined style={{ fontSize: '2em' }} />,
    },
    {
        name: 'VPaid',
        icon: <OneToOneOutlined style={{ fontSize: '2em' }} />,
    },
    {
        name: 'Social',
        icon: <FacebookOutlined style={{ fontSize: '2em' }} />,
    },
];

export const templatePeripherals = ['SplitText', 'CustomEase', 'Google Map'];

export const defaultSize = ['120x600', '160x600', '300x250', '300x600', '728x90', '970x250'];

export const config = [
    {
        name: 'Dynamic Headline',
        slug: 'dynamic-headline'
    },
    {
        name: 'Dynamic Image',
        slug: 'dynamic-image'
    },
    {
        name: 'Static Headline',
        slug: 'static-headline'
    },
    {
        name: 'Static Image',
        slug: 'static-image'
    },
    {
        name: 'String',
        slug: 'string'
    }
]