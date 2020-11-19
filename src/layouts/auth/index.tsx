import React from 'react';
import { Row, Col } from 'antd';
import { Aside, Content } from './styles';

interface AuthLayoutProps {
  children: React.ReactElement;
}

const AuthLayout = (props: AuthLayoutProps): React.ReactElement => {
  const { children } = props;

  return (
    <Row>
      <Col xxl={8} xl={9} lg={12} md={8} xs={24}>
        <Aside>
          <div className="auth-side-content">
            <img src="/images/topShape.png" alt="" className="topShape" />
            <img src="/images/bottomShape.png" alt="" className="bottomShape" />
            <Content>
              <img style={{ width: '150px' }} src="/images/Logo_Dark.svg" alt="" />
              <br />
              <br />
              <img className="auth-content-figure" src="/images/Illustration.png" alt="" />
            </Content>
          </div>
        </Aside>
      </Col>

      <Col xxl={16} xl={15} lg={12} md={16} xs={24}>
        {children}
      </Col>
    </Row>
  );
};

export default AuthLayout;
