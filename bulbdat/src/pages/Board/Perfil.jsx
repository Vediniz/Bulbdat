import React from 'react';
import { Layout } from 'antd';
import SideMenu from './SideMenu';
import HeaderBoard from './HeaderBoard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';

export default function Perfil() {
    return (
        <Layout className="min-h-screen">
            <SideMenu />

            <Layout className='w-full h-screen bg-lightGreen p-5'>
                <HeaderBoard title='Perfil' button={false} />

                <div className='flex items-center justify-around h-full w-full'>
                    <div className='w-2/3 h-full border flex justify-center '>
                        <Form>
                            <h1 className="text-2xl font-bold text-white mb-4">Perfil</h1>
                            <Input type="text" name="username" id="username" placeholder="Nome de Usuário"/>
                            <Input type="email" name="email" id="email" placeholder="Email"/>
                            <Input type="password" name="password" id="password" placeholder="Senha"/>
                            <Button>Salvar</Button>
                            {/* <Input type="text" value={user.username} name="username" id="username" placeholder="Nome de Usuário" onChange={(e) => setUser({ ...user, username: e.target.value })} />
                            <Input type="email" value={user.email} name="email" id="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            <Input type="password" value={user.password} name="password" id="password" placeholder="Senha" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            <Button onClick={signup}>Salvar</Button> */}
                        </Form>
                    </div>
                    <div className='w-1/3 border'>
                        <h1 className='text-3xl'>Icon</h1>
                    </div>
                </div>
            </Layout>

        </Layout>
    );
}   