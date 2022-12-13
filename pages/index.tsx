import Card from '@components/card/card';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PackUI</title>
      </Head>

      <nav className="h-[50px] shadow flex items-center px-6 relative bg-black text-white">
        <div className="font-semibold text-xl logo">PackUI</div>
      </nav>

      <main className="flex flex-row">
        <div className="bg-neutral-50 w-[270px] p-6">
          <div className="mb-4 text-neutral-500 uppercase text-sm">Components</div>
          <ul>
            <li className="hover:bg-neutral-100 rounded-lg py-2 px-2 cursor-pointer">- Card</li>
          </ul>
        </div>
        <div className="bg-neutral-100 flex-1 p-6">
          <h1 className="text-3xl font-semibold mb-4">Card</h1>
          <Card>Card test</Card>
        </div>
      </main>
    </div>
  );
}
