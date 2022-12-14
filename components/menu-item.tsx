import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuItem = ({ href, label, className }: IProps) => {
  const router = useRouter();
  const subRoute = router.pathname.split('/');

  const selected = href.includes(subRoute[2]);

  return (
    <Link
      href={href}
      className={`${className} hover:bg-neutral-100 px-4 py-3 text-sm ${selected && 'bg-neutral-100'} block`}
    >
      {label}
    </Link>
  );
};

interface IProps {
  href: string;
  label: string;
  className?: string;
}

export default MenuItem;
