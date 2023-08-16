import React, { useState, useEffect } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Layout, Modal, Form, Input, Button } from 'antd';
import axios from 'axios';
import { Content } from 'antd/es/layout/layout';
import HomeBoard from './HomeBoard';
const { Meta } = Card;

export default function Environments() {
  const [environments, setEnvironments] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = async (values) => {
    try {
        const response = await axios.post(
            "api/environments",
            { name: values.name }
        );

        console.log('API Response:', response.data);

        const { success, user, message } = response.data;
        if (success) {
            console.log(message);
            console.log('User:', user);
        } else {
            console.log(message);
        }
        const newEnvironment = { id: Date.now(), name: values.name };
        setEnvironments([newEnvironment, ...environments]);
        setIsModalVisible(false);
        message.success('Ambiente adicionado');
    } catch (error) {
        console.log(error.message);
        // dispatch(HideLoading);
    }
};



useEffect(() => {
    console.log('Buscando ambientes...');
    try {
      axios.get('/api/environments/') // Assuming this is the correct API endpoint
        .then(response => {
          console.log('Resposta ao buscar ambientes:', response.data);
          const environmentsData = response.data.environments || [];
          setEnvironments(environmentsData);
        })
        .catch(error => {
          console.error('Erro ao buscar ambientes:', error);
        });
    } catch (error) {
      console.error('Erro ao buscar ambientes:', error);
    }
  }, []);

  return (
    <HomeBoard>
      <Layout className='w-full h-screen bg-lightGreen p-5 overflow-y-scroll px-6'>
        <Breadcrumb className='my-4 text-xl'>
          <Breadcrumb.Item>Ambientes</Breadcrumb.Item>
        </Breadcrumb>
        <Content className='border grid grid-cols-3 gap-5 p-6'>
          <Card className='w-72 mt-4 text-center' onClick={showModal} hoverable>
            <PlusOutlined style={{ fontSize: '36px' }} />
            <p>Adicionar Ambiente</p>
          </Card>
          {environments.map((environment) => (
            <Card
              className='w-72 mt-4 text-center'
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
              key={environment.id}
            >
              <Meta title={environment.name} description="This is the description" />
            </Card>
          ))}
        </Content>
      </Layout>
      <Modal title="Adicionar Ambiente" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Nome do Ambiente"
            rules={[{ required: true, message: 'Por favor, insira o nome do ambiente!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Adicionar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </HomeBoard>
  );
}
