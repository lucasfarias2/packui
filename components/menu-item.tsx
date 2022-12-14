import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuItem = ({ href, label, className }: IProps) => {
  const router = useRouter();
  const subRoute = router.pathname.split('/');

  const selected = href.includes(subRoute[2]);

  return (
    <Link href={href}>
      <div
        className={`${className} hover:bg-neutral-100 rounded-lg py-2 px-2 cursor-pointer mb-2 text-sm ${
          selected && 'bg-neutral-100'
        }`}
      >
        {label}
      </div>
    </Link>
  );
};

interface IProps {
  href: string;
  label: string;
  className?: string;
}

export default MenuItem;
