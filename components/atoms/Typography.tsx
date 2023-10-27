import React from 'react';
import { FunctionComponent, HTMLAttributes } from 'react';

interface titleProps extends HTMLAttributes<HTMLHeadingElement> {
}

const Title: FunctionComponent<titleProps> = ({
  children,
  ...rest
}) => {

    return (<h1>comi una manzana</h1>);
  };
  

export default Title;
