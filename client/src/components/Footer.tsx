
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter style={{ background: '#001529', padding: '48px 0 24px' }}>
      <div className="container mx-auto px-4">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ color: 'white' }}>About Us</Title>
            <Text style={{ color: 'rgba(255,255,255,0.65)' }}>
              We are dedicated to providing innovative solutions for your business needs. Our team of experts is here to help you succeed.
            </Text>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ color: 'white' }}>Quick Links</Title>
            <Space direction="vertical" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.65)' }}>Home</Link>
              <Link href="#services" style={{ color: 'rgba(255,255,255,0.65)' }}>Services</Link>
              <Link href="#contact" style={{ color: 'rgba(255,255,255,0.65)' }}>Contact</Link>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ color: 'white' }}>Connect With Us</Title>
            <Space size="large" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <Link href="https://github.com" target="_blank" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <GithubOutlined style={{ fontSize: '24px' }} />
              </Link>
              <Link href="https://twitter.com" target="_blank" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <TwitterOutlined style={{ fontSize: '24px' }} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <LinkedinOutlined style={{ fontSize: '24px' }} />
              </Link>
              <Link href="mailto:contact@example.com" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <MailOutlined style={{ fontSize: '24px' }} />
              </Link>
            </Space>
          </Col>
        </Row>
        <Divider style={{ borderColor: 'rgba(255,255,255,0.15)', margin: '24px 0' }} />
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)' }}>
          ©{currentYear} Your Company. All rights reserved.
        </div>
      </div>
    </AntFooter>
  );
}
