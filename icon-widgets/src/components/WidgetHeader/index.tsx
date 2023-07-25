import { FunctionalComponent, h } from '@stencil/core';
import { WidgetTitle } from './WidgetTitle';

type Props = {
  title: string;
};

export const WidgetHeader: FunctionalComponent<Props> = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 12px 24px',
      }}
    >
      <WidgetTitle title={title} />
      {/* <MoreButton url={url} /> */}
    </div>
  );
};
