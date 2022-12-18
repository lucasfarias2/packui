import { PictureOutlined } from '@ant-design/icons';
import Media from '@library/media/media';
import ComponentDemo from '@components/component-demo';
import Page from '@components/page';

const MediaPage = () => {
  return (
    <Page>
      <ComponentDemo title="Media">
        <Media leftContent={<PictureOutlined className="flex items-center justify-center" />}>Media test</Media>
      </ComponentDemo>
    </Page>
  );
};

export default MediaPage;
