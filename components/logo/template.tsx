/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import EmblemSrc from '@nl-rvo/assets/images/emblem.svg';
import LogoEnglishSrc from '@nl-rvo/assets/images/logo-english.svg';
import LogoSrc from '@nl-rvo/assets/images/logo.svg';
import clsx from 'clsx';
import React from 'react';
import { defaultArgs } from './defaultArgs';
import './index.scss';
export interface ILogoProps {
  title?: string;
  subtitle?: string;
  useEnglish: boolean;
  className?: string;
}

export const Logo: React.FC<ILogoProps> = ({
  className = defaultArgs.className,
  title = defaultArgs.title,
  useEnglish = defaultArgs.useEnglish,
  subtitle = defaultArgs.subtitle,
}) => {
  return (
    <img
      src={!useEnglish ? LogoSrc : LogoEnglishSrc}
      alt={`${title || ''}${subtitle.length ? `, ${subtitle}` : ''}`}
      className={clsx('rvo-logo-img', className)}
    />
  );
};

export const LogoWithText: React.FC<ILogoProps> = ({ title = defaultArgs.title, subtitle = defaultArgs.subtitle }) => {
  return (
    <div className="rvo-logo">
      <div className="rvo-logo__emblem">
        <img src={EmblemSrc} alt={`${title || ''}${subtitle.length ? `, ${subtitle}` : ''}`} />
      </div>
      <div className="rvo-logo__wordmark">
        <p className="rvo-logo__title">{title}</p>
        {subtitle && <p className="rvo-logo__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Logo;
