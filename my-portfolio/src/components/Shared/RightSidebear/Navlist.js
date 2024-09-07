"use client"
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

const ActiveLink = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a className={isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}>
        {children}
      </a>
    </Link>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ActiveLink;