/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import '@nl-rvo/assets/images/logo.svg';

export const Logo = (props) => {
  const className = props && props.className ? props.className : '';
  return `<img src="rvo/images/logo.svg" class="${clsx('rvo-logo', className)}" />`;
};
