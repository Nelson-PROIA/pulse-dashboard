import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => (
  <svg {...props}>
    <use href={`/icons.svg#${name}`} />
  </svg>
);

export default Icon;
