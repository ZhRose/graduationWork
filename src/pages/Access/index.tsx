import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button, Watermark } from 'antd';
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
          <Button>只有 Admin 可以看到这个按钮</Button>
        </Access>
      </PageContainer>
    </Watermark>
  );
};

export default AccessPage;
