import { Checkbox, Form, Input, Button } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import Heading from '@/components/heading';
import { AuthWrapper } from '@/layouts/auth/styles';
import { initSigninStates, SigninParamsType } from '@/interfaces';

const SignIn: React.FC = () => {
  const [states, setStates] = useState(initSigninStates);

  const onFinishAsync = async (values: SigninParamsType): Promise<void> => {
    setStates({ ...states, isLoading: true });
    console.log('Success:', values.email);
  };

  return (
    <AuthWrapper>
      <p className="auth-notice">
        아직 계정이 없으신가요? <Link href="/register">회원가입</Link>
      </p>
      <div className="auth-contents">
        <Form name="login" onFinish={onFinishAsync} layout="vertical">
          <Heading as="h3">
            <span className="color-secondary">DSC</span> Web Study
          </Heading>
          <Form.Item name="email" rules={[{ message: '이메일을 입력해 주세요!', required: true }]} label="이메일">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="비밀번호">
            <Input.Password placeholder="비밀번호" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox value={states.isKeepLogin} onChange={(e) => setStates({ ...states, isKeepLogin: e.target.checked })}>
              아이디 저장
            </Checkbox>
            <Link href="/forgotPassword">
              <a className="forgot-pass-link">비밀번호를 잊어버리셨나요?</a>
            </Link>
          </div>
          <Form.Item>
            <Button className="btn-signin" htmlType="submit" type="primary" size="large">
              {states.isLoading ? '로딩 중...' : '로그인'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
