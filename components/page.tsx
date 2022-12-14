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
      <nav className="h-[50px] shadow flex items-center px-6 relative bg-black text-white">
        <Link href="/">
          <div className="font-semibold text-xl logo">PackUI</div>
        </Link>
      </nav>

      <main className={`flex flex-row ${className}`}>
        <div className="bg-neutral-50 w-[270px] p-6">
          <MenuItem href="/" label="Home" />
          <div className="my-4 text-neutral-500 uppercase text-sm">Components</div>
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
