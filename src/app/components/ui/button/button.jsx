/** @format */

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Button = ({
  href = '#',
  text = 'Read more',
  bgColor = 'bg-[#5039bf]',
  hoverBgColor = 'hover:bg-[#3e27a5]',
  textColor = 'text-white',
}) => {
  const darkOverlayClass = 'bg-black/40';

  return (
    <Link
      href={href}
      className={`group inline-flex items-center w-fit rounded-full ${bgColor} ${hoverBgColor} transition-colors`}>
      <span className={`px-6 py-3 font-medium whitespace-nowrap ${textColor}`}>
        {text}
      </span>
    </Link>
  );
};

export default Button;
