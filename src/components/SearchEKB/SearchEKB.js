import React from 'react';
import { Input, Space, Button, Select, Radio, Divider } from 'antd';
import { FileAddFilled } from '@ant-design/icons';
import './SearchEKB.css';

const SearchEKB = () => {
  const [size, setSize] = React.useState('large');

  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const { Option } = Select;
  const selectBefore = (
    <Select
      defaultValue="параметрический поиск"
      style={{
        fontSize: '15px',
      }}>
      <Option value="add">параметрический поиск</Option>
      <Option value="minus">поиск по компоненту</Option>
    </Select>
  );
  return (
    <>
      <div className="main-search__bg">
        <Space direction="vertical" className="main-search__container">
          <Button
            className="main-search__bom"
            type="primary"
            icon={<FileAddFilled />}
            size={size}>
            BOM запрос
          </Button>

          <Divider className="main-search__divider" />
          <div className="main-search__full">
            <Search
              addonBefore={selectBefore}
              placeholder="введите текст для поиска"
              allowClear
              enterButton
              size="large"
              onSearch={onSearch}
              //loading
            />
          </div>
          <div className="main-search__mobile">
            <Search
              placeholder="введите текст для поиска"
              allowClear
              enterButton
              size="large"
              onSearch={onSearch}
              //loading
            />
            <Radio.Group
              defaultValue="a"
              style={{
                marginTop: 16,
              }}>
              <Radio.Button value="a">параметрический поиск</Radio.Button>
              <Radio.Button value="b">поиск по компоненту</Radio.Button>
            </Radio.Group>
            <Radio.Group
              defaultValue="a"
              size="small"
              style={{
                marginTop: 16,
              }}
            />
          </div>
          <p>
            Попробуйте поиск с точным соответствием, например{' '}
            <a href="#">HPZR-C56X</a>,
            <br />
            или частичный поиск, например <a href="#">1N4148W</a>.
          </p>
        </Space>
      </div>
    </>
  );
};

export default SearchEKB;
