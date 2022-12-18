import Card from '@library/card/card';
import ComponentDemo from '@components/component-demo';
import Page from '@components/page';
import Title from '@library/title/title';

const TitlePage = () => {
  return (
    <Page>
      <ComponentDemo title="Title">
        <Title>Test title</Title>
      </ComponentDemo>
    </Page>
  );
};

export default TitlePage;
