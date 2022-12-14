import Card from "@components/card/card";
import Page from "components/page";

const CardPage = () => {
  return (
    <Page>
      <h1 className="text-3xl font-semibold mb-4">Card</h1>
      <Card>Card test</Card>
    </Page>
  );
};

export default CardPage;
