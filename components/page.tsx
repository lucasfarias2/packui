import { DesktopOutlined, MobileOutlined } from '@ant-design/icons';
import Head from 'next/head';
import Link from 'next/link';
import MenuItem from '@components/menu-item';

const Page = ({ children, className }: IComponent) => {
  return (
    <>
      <Head>
        <title>PackUI</title>
        <meta name="description" content="PackUI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="h-[50px] shadow flex items-center px-6 relative bg-black border-b text-white z-10">
        <Link href="/" className="font-semibold text-xl logo mr-4">
          PackUI
        </Link>
        <Link href="/web/components" className="mx-2 hover:bg-white/10 h-full flex items-center px-3">
          <DesktopOutlined className="mr-2" />
          React
        </Link>
        <Link href="/native/components" className="mx-2 hover:bg-white/10 h-full flex items-center px-3">
          <MobileOutlined className="mr-2" />
          React Native
        </Link>
      </nav>

      <main className={`flex flex-row ${className}`}>
        <div className="w-[270px] py-4 shadow relative h-[100vh] sidebar">
          <MenuItem href="/" label="Home" />
          <MenuItem href="/" label="Installation" />
          <MenuItem href="/" label="Usage" />
          <MenuItem href="/" label="Customization" />
          <div className="text-neutral-500 p-4 text-lg">Components</div>
          <MenuItem href="/web/components/card" label="Card" />
          <MenuItem href="/web/components/media" label="Media" />
          <MenuItem href="/web/components/title" label="Title" />
        </div>
        <div className="bg-neutral-100 flex-1 p-6">{children}</div>
      </main>
    </>
  );
};

export default Page;
