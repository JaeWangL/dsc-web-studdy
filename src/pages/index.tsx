import { Card, Col, Row } from 'antd';
import { NextSeo } from 'next-seo';
import React from 'react';
import { NoteWrapper } from '@/styles/home';

export default function Home(): React.ReactElement {
  return (
    <>
      <NextSeo
        title="Home"
        openGraph={{
          title: 'Home',
        }}
      />
      <NoteWrapper>
        <Row className="justify-content-center" gutter={25}>
          <Col xxl={19} xl={17} lg={15} xs={24}>
            <h1>Test</h1>
          </Col>
          <Col className="trigger-col" xxl={5} xl={7} lg={9} xs={24}>
            <Card>
              <h2>Test2</h2>
            </Card>
          </Col>
        </Row>
      </NoteWrapper>
    </>
  );
}
