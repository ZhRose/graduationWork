import { Card, Watermark } from 'antd';
import styles from './index.less';
export default function Word() {
  const { Meta } = Card;
  return (
    <>
      <Watermark content="张航">
        <div className={styles.word}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://img.book118.com/sr1/M00/22/19/wKh2AluYlDOITzL2AAFbmt6amUQAANb-wH-QTAAAVuy971.png"
              />
            }
          >
            <Meta
              title="2022-09-23"
              description="介绍毕业论文相关方面的知识"
            ></Meta>
            信计毕业论文知识
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://img2.baidu.com/it/u=2417661717,2434852336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067"
              />
            }
          >
            <Meta
              title="2021-10-23"
              description="介绍新生相关方面的知识"
            ></Meta>
            新生注意的知识
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://imgcdn.kangyanghongya.com/@/catchimages/20200715/1594788982738083305.jpg?imageMogr2/thumbnail/1080x%3E/strip/quality/95/ignore-error/1%7Cimageslim"
              />
            }
          >
            <Meta title="2019-4-23" description="大学生政策方面的知识"></Meta>
            大学生应该要了解的政策
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://img0.baidu.com/it/u=2283049604,2882289283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667"
              />
            }
          >
            <Meta title="2024-5-1" description="大学以来的心得"></Meta>
            大上大学应该知道的事情
          </Card>
          <div className={styles.shenlue}>...</div>
        </div>
      </Watermark>
    </>
  );
}
