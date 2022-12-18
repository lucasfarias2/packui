import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuItem = ({ href, label, className }: IProps) => {
  const router = useRouter();
  const selected = router.pathname == href;

  return (
    <Link href={href} className={`${className} hover:bg-neutral-100 px-6 py-3 ${selected && 'bg-neutral-100'} block`}>
      {label}
    </Link>
  );
};

interface IProps extends IComponent {
  href: string;
  label: string;
}

export default MenuItem;
