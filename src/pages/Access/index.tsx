import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button, Card, Input, Watermark } from 'antd';
import styles from './index.less';
const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <Watermark content="Ant Design">
      <PageContainer
        ghost
        header={{
          title: '用户申诉',
        }}
      >
        <Access accessible={access.canSeeAdmin}>
          <Card className={styles.card}>
            申诉班级 <Input className={styles.input}></Input>
            申诉姓名 <Input className={styles.input}></Input>
            申诉院系 <Input className={styles.input}></Input>
            <div className={styles.title}>
              申诉理由
              <Input.TextArea className={styles.textarea}></Input.TextArea>
            </div>
            <div className={styles.btn}>
              <Button type="primary">提交</Button>
            </div>
          </Card>
        </Access>
      </PageContainer>
    </Watermark>
  );
};

export default AccessPage;
