import Head from 'next/head';
import Link from 'next/link';
import MenuItem from './menu-item';

const Page = ({ children, className }: IProps) => {
  return (
    <>
      <Head>
        <title>PackUI</title>
        <meta name="description" content="PackUI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="h-[50px] shadow-md flex items-center px-6 relative bg-neutral-800 text-white">
        <Link href="/" className="font-semibold text-xl logo mr-4">
          PackUI
        </Link>
        <Link href="/web/components" className="mx-2 hover:bg-white/10 h-full flex items-center px-3">
          React
        </Link>
        <Link href="/native/components" className="mx-2 hover:bg-white/10 h-full flex items-center px-3">
          React Native
        </Link>
      </nav>

      <main className={`flex flex-row ${className}`}>
        <div className="bg-neutral-50 w-[270px] py-4">
          <MenuItem href="/" label="Home" />
          <div className="text-neutral-500 uppercase text-sm p-4">Components</div>
          <MenuItem href="/components/card" label="Card" />
          <MenuItem href="/components/media" label="Media" />
        </div>
        <div className="bg-neutral-100 flex-1 p-6">{children}</div>
      </main>
    </>
  );
};

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default Page;
