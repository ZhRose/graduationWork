import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'umi';
import styles from './index.less';
const Login: React.FC = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = () => {
    if (account && password) {
      localStorage.setItem('ACCESS_TOKEN', 'YES');
    }
    navigate('/', { replace: true });
  };
  const forget = () => {};
  return (
    <>
      <div className={styles.container}>
        <div>
          <span className={styles.text}>账号：</span>{' '}
          <Input
            className={styles.input}
            placeholder="请输入账号"
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>
        <div>
          <span className={styles.text}> 密码：</span>{' '}
          <Input
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入密码"
          />
        </div>
        <div className={styles.btn}>
          <Button onClick={forget}>忘记</Button>
          <Button onClick={login}>登录</Button>
        </div>
      </div>
    </>
  );
};

export default Login;
