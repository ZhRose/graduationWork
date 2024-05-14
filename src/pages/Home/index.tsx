import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Watermark } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <Watermark content="张航">
      <PageContainer ghost>
        <div className={styles.container}>
          <Guide name={trim(name)} />
        </div>
      </PageContainer>
    </Watermark>
  );
};

export default HomePage;
