import Page from '@components/page';
import Card from '@library/card/card';

const Home = () => {
  return (
    <Page>
      <h1 className="text-4xl font-semibold">PackUI</h1>
      <h2 className="text-lg text-neutral-500 mb-4">Free and open-source components library for React</h2>
      <Card>
        <ol>
          <li>1. Getting started</li>
          <li>2. Using a component</li>
          <li>3. Customizing</li>
        </ol>
      </Card>
    </Page>
  );
};

export default Home;
