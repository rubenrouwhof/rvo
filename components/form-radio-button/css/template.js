/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import clsx from 'clsx';
import './index.scss';

export const argTypes = {
  id: { control: 'text' },
  name: { control: 'text' },
  labelText: { control: 'text' },
  checked: { control: 'boolean' },
  hover: { control: 'boolean' },
  disabled: { control: 'boolean' },
  active: { control: 'boolean' },
  focus: { control: 'boolean' },
  invalid: { control: 'boolean' },
};

export const defaultArgs = {
  id: 'field',
  name: 'group',
  labelText: 'Label',
  checked: false,
  hover: false,
  disabled: false,
  active: false,
  focus: false,
  invalid: false,
};

export const RadioButton = ({
  id = defaultArgs.id,
  name = defaultArgs.name,
  labelText = defaultArgs.labelText,
  checked = defaultArgs.checked,
  hover = defaultArgs.hover,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
}) =>
  `
  <label class='rvo-custom-radio-button__label' for="${id}">
  <input id="${id}" name="${name}" autofocus="true" type="radio"
  ${checked ? ' checked' : ''}
  ${disabled ? ' disabled' : ''} class="${clsx(
    'utrecht-custom-radio-button',
    checked && 'utrecht-custom-radio-button--checked',
    hover && 'rvo-custom-radio-button--hover',
    disabled && 'utrecht-custom-radio-button--disabled',
    active && 'utrecht-custom-radio-button--active',
    focus && 'utrecht-custom-radio-button--focus-visible',
    invalid && 'utrecht-custom-radio-button--invalid',
  )}"/>${labelText}</label>`;
