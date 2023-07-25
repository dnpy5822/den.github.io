import { FunctionalComponent, h } from '@stencil/core';
import { lightFormat } from 'date-fns';

type LastUpdateTimeProps = {
  time?: number | Date;
};

export const LastUpdateTime: FunctionalComponent<LastUpdateTimeProps> = ({
  time,
}) => {
  return (
    <div style={{ margin: '0 4px' }}>
      {time ? `${lightFormat(time, 'yyyy/MM/dd HH:mm')} ` : ''}
    </div>
  );
};

type Props = {
  source: string;
  updateTime: string;
};

export const Footer: FunctionalComponent<Props> = ({ source, updateTime }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '0 12px',
        fontSize: '12px',
        color: '#00000066',
      }}
    >
      <div
        style={{ flexShrink: '0', padding: '0 4px 4px' }}
      >{`Powered by ${source}`}</div>
      <div
        style={{
          flexShrink: '0',
          padding: '0 4px 4px',
          display: 'flex',
          flexWrap: 'nowrap',
        }}
      >
        <span> 最後更新於</span>
        <LastUpdateTime time={new Date(updateTime)} />
      </div>
    </div>
  );
};
