import Card from '@library/card/card';
import ComponentDemo from '@components/component-demo';
import Page from '@components/page';

const CardPage = () => {
  return (
    <Page>
      <ComponentDemo title="Card">
        <Card>Card test</Card>
      </ComponentDemo>
    </Page>
  );
};

export default CardPage;
