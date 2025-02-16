
import { Form, Input, Button, Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Title level={2}>Get in Touch</Title>
          <Paragraph className="text-lg">
            Ready to start your next project? We'd love to hear from you!
          </Paragraph>
        </motion.div>

        <Row gutter={24}>
          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <Title level={3}>Contact Information</Title>
                <Paragraph className="mb-8">
                  Fill out the form and we'll get back to you within 24 hours.
                </Paragraph>
              </div>

              <Card className="space-y-6">
                <div className="flex items-center gap-4">
                  <MailOutlined className="text-2xl" />
                  <div>
                    <Title level={5}>Email Us</Title>
                    <Paragraph>hello@techcorp.com</Paragraph>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneOutlined className="text-2xl" />
                  <div>
                    <Title level={5}>Call Us</Title>
                    <Paragraph>+1 (555) 123-4567</Paragraph>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <EnvironmentOutlined className="text-2xl" />
                  <div>
                    <Title level={5}>Visit Us</Title>
                    <Paragraph>123 Innovation Street, Tech City, TC 12345</Paragraph>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="space-y-6"
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="firstName"
                      label="First Name"
                      rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                      <Input placeholder="John" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="lastName"
                      label="Last Name"
                      rules={[{ required: true, message: 'Please input your last name!' }]}
                    >
                      <Input placeholder="Doe" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input placeholder="john@example.com" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please input your message!' }]}
                >
                  <TextArea rows={4} placeholder="Tell us about your project..." />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" icon={<SendOutlined />} size="large" block>
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
