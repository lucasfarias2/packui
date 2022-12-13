import Card from '@components/card/card';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PackUI</title>
      </Head>

      <nav className="h-[40px] shadow flex items-center p-6 relative">
        <div className="font-semibold text-xl logo">PackUI</div>
      </nav>

      <main className="flex flex-row">
        <div className="bg-neutral-50 w-[270px] p-6">
          <div className="mb-4 text-neutral-500 uppercase text-sm">Components</div>
          <ul>
            <li className="hover:bg-neutral-100 rounded-lg py-2 px-4 cursor-pointer">Card</li>
          </ul>
        </div>
        <div className="bg-neutral-100 flex-1 p-4">
          <Card>Card test</Card>
        </div>
      </main>
    </div>
  );
}
