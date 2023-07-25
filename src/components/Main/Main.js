import React, {useState} from 'react';
import {Dropdown, Space, Col, Layout, Menu, Row, Avatar, Divider} from 'antd';
import {
    AppstoreOutlined,
    DownOutlined,
    ShoppingCartOutlined,
    IssuesCloseOutlined,
    SmileOutlined,
    HeartOutlined,
    ImportOutlined, MenuOutlined,
} from '@ant-design/icons';
import { items, menuItems } from '../../assets/constants';
import './Main.css';

import SearchEKB from '../SearchEKB/SearchEKB';
import CategoriesEKB from '../CategoriesEKB/CategoriesEKB';
import PopProducts from "../PopProducts/PopProducts";

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const rightmenuItems = [
    getItem(<div className='navbar__leftmenuname'>ОчумелыеРучки</div>, 'sub1',
        <Avatar className='navbar__leftmenuicon'>OR</Avatar>, [
        getItem('Профиль', '6'),
        getItem('Кабинет клиента', '7'),
    ]),
    getItem('Избранное', '8', <HeartOutlined />),
    getItem('Меню сайта', 'sub2', <AppstoreOutlined />, [
        getItem('Опыт инжинеров', '9'),
        getItem('Популярное', '10'),
        getItem('Категории', '11'),
    ]),
    getItem(
        <a href="https://avatars.mds.yandex.net/i?id=89987775783b0069dbf4acf35505bec60780ce40-8497233-images-thumbs&n=13" target="_blank" rel="noopener noreferrer">
            Тех поддержка
        </a>,
        'link',
        <IssuesCloseOutlined />,
    ),
    getItem('Выйти', '12', <ImportOutlined />),
];

const { Header, Content, Footer } = Layout;

const Main = () => {

    const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <Layout className="layout">
        <Header
            className={'navbar'}
        >
            <Space direction={"horizontal"} className={'container'}>

                <Space direction="horizontal">
                    <MenuOutlined className='burger' onClick={() => setOpenMenu(!openMenu)}/>
                    <div
                        className={'logo'}
                    >
                        <h1>
                            <a href={'#'} className={'logo__a'}>
                                ЭКБ
                            </a>
                        </h1>
                    </div>

                    <div
                        className={'logo__slogan'}
                    >
                        <p>Маркетплейс <br /> для инженеров</p>
                    </div>
                </Space>
                <Col span={24} className='navbar__menu'>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['4']}
                        items={
                            menuItems.map((item) => {
                                    const key = item.name;
                                    return {
                                        key,
                                        label: `${key}`,
                                    };
                                })}
                    />
                </Col>
                <div className={'header-user'}>
                    <Space direction={"horizontal"}>
                        <ShoppingCartOutlined className={'navbar-basket'}/>
                        <Avatar
                            className={'navbar-user__icon'}
                        >
                            OR
                        </Avatar>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <Space className={'navbar-user'}>
                                ОчумелыеРучки
                                <DownOutlined />
                            </Space>
                        </Dropdown>
                    </Space>
                </div>
            </Space>
        </Header>
        <div className='navbar__leftmenu'>
            <Menu
                style={{
                    width: 256,
                    position: 'absolute',
                    zIndex: 99,
                    height: '100%',
                    paddingTop: '8ch',
                }}
                defaultOpenKeys={['sub1']}
                mode={'inline'}
                theme={"light"}
                items={rightmenuItems}
                open={openMenu}
                onClose={() => setOpenMenu(!openMenu)}
            />
        </div>
        <Content style={{ textAlign: 'center' }}>
          <SearchEKB />
        </Content>

        <Content style={{ textAlign: 'center' }}>
            <PopProducts />
        </Content>

        <Content style={{ textAlign: "center" }}>
          <CategoriesEKB />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
            <Row gutter={1}>
                <Col span={24}>
                    Маркетплейс ЭКБ &copy; 2023 ООО Банда
                </Col>
                <Col span={24}
                    style={{
                        marginTop: '2ch',
                    }}
                >
                    <a href="#">О проекте</a>
                    <Divider type="vertical" />
                    <a href="#">Карьера</a>
                    <Divider type="vertical" />
                    <a href="#">Сертификаты</a>
                    <Divider type="vertical" />
                    <a href="#">Тех поддержка</a>
                </Col>
            </Row>
        </Footer>
      </Layout>
    </>
  );
};

export default Main;
