import { FunctionalComponent, h } from '@stencil/core';
import logo from '../../../assets/images/logo.svg';

type Props = {
  title: string;
};

export const WidgetTitle: FunctionalComponent<Props> = ({ title }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
      <img src={logo} style={{ marginRight: '4px' }} />
      <h1 style={{ fontSize: '24px', fontWeight: '500', margin: '0' }}>
        {title}
      </h1>
    </div>
  );
};
