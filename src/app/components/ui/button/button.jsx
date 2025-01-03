/** @format */

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Button = ({
  href = '#',
  text = 'Read more',
  bgColor = 'bg-green-600',
  hoverBgColor = 'hover:bg-green-700',
  textColor = 'text-white',
}) => {
  const darkOverlayClass = 'bg-black/40';

  return (
    <Link
      href={href}
      className={`group inline-flex items-center w-fit ${bgColor} ${hoverBgColor} transition-colors`}>
      <span className={`px-6 py-3 font-medium whitespace-nowrap ${textColor}`}>
        {text}
      </span>
      <div className={`h-full ${darkOverlayClass} p-3 flex items-center`}>
        <ArrowRight
          className={`w-5 h-5 ${textColor} transition-transform group-hover:translate-x-1`}
        />
      </div>
    </Link>
  );
};

export default Button;
