import { FunctionalComponent, h } from '@stencil/core';
import { NFTCollection } from 'src/types/Crypto.type';
import { formatNumber } from 'src/utils/number';

type Props = {
  item: NFTCollection;
  idx: number;
};

export const TrendingNftListItem: FunctionalComponent<Props> = ({
  item,
  idx,
}) => {
  return (
    <div class="table-row" style={{ padding: '10px 0' }}>
      <div class="table-cell" style={{ justifySelf: 'center' }}>
        {idx + 1}
      </div>
      <div class="table-cell" style={{ flexShrink: '0', fontSize: '1rem' }}>
        <img
          src={item.imageUrl}
          alt={item.name}
          aria-label={item.name}
          style={{
            marginRight: '8px',
            maxWidth: '56px',
            border: '1px solid #0000001F',
            borderRadius: '100%',
            aspectRatio: '1 / 1',
          }}
        />
        <span>{item.name ?? ''}</span>
      </div>
      <div
        class="table-cell"
        style={{
          flexShrink: '0',
          fontSize: '1rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <img
            src={item.paymentToken.imageUrl}
            alt={item.paymentToken.name}
            aria-label={item.paymentToken.name}
            width={10}
            style={{
              marginRight: '4px',
              maxWidth: '56px',
              borderRadius: '100%',
            }}
          />
          <span style={{ fontSize: '0.875rem' }}>
            {formatNumber(item.floorPrice, {
              nullPlaceholder: '--',
            })}
          </span>
        </span>
      </div>
      <div
        class="table-cell"
        style={{
          flexShrink: '0',
          fontSize: '1rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <img
            src={item.paymentToken.imageUrl}
            alt={item.paymentToken.name}
            aria-label={item.paymentToken.name}
            width={10}
            style={{
              marginRight: '4px',
              maxWidth: '56px',
              borderRadius: '100%',
            }}
          />
          <span style={{ fontSize: '0.875rem' }}>
            {formatNumber(item.oneDayVolume, {
              nullPlaceholder: '--',
            })}
          </span>
        </span>
      </div>
    </div>
  );
};
