import React from 'react';
import * as headings from './styles';

interface IHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode | string;
  className?: string;
  id?: string;
}

const Headings = {
  h1: headings.H1,
  h2: headings.H2,
  h3: headings.H3,
  h4: headings.H4,
  h5: headings.H5,
  h6: headings.H6,
};

const Heading: React.FC<IHeadingProps> = (props) => {
  const { as, children, className, id } = props;
  const StyledHeading = as ? Headings[as] : headings.H1;

  return (
    <StyledHeading className={className} id={id}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
