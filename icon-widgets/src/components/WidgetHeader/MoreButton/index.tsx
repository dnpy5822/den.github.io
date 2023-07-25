import { FunctionalComponent, h } from '@stencil/core';
import arrow from '../../../assets/images/ico-arrow.svg';

type Props = {
  url: string;
};

// @ts-ignore
export const MoreButton: FunctionalComponent<Props> = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      style={{
        display: 'inline-flex',
        flexWrap: 'nowrap',
        textDecoration: 'none',
      }}
    >
      <sapn>查看更多</sapn>
      <img src={arrow} />
    </a>
  );
};
