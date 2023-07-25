import { FunctionalComponent, h } from '@stencil/core';
import { TickerNumber } from 'src/components/TickerNumber';
import { Crypto } from 'src/types/Crypto.type';
import { formatCurrency } from 'src/utils/number';

type Props = {
  item: Crypto;
  idx: number;
};

export const TrendingCryptoListItem: FunctionalComponent<Props> = ({
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
          src={item.logo.thumb}
          alt={item.name.en}
          aria-label={item.name.en}
          height={24}
          width={24}
          style={{ marginRight: '8px' }}
        />
        <span>
          {item.name.en !== item.name['zh-Hant'] ? item.name['zh-Hant'] : ''}{' '}
          {item.name.en} {item.symbol}
        </span>
      </div>
      <div class="table-cell" style={{ justifySelf: 'end' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
          }}
        >
          <span>
            {formatCurrency(item.price.usd, {
              currencyConfig: { precision: 2 },
              nullPlaceholder: '--',
            })}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.60)' }}>
            {formatCurrency(item.price.hkd, {
              currencyConfig: { precision: 2 },
              nullPlaceholder: '--',
            }) + ' HKD'}
          </span>
        </div>
      </div>
      <div class="table-cell" style={{ justifySelf: 'end' }}>
        <TickerNumber
          val={formatCurrency(Math.abs(item.pricePercentChange24h), {
            currencyConfig: { symbol: '', precision: 3 },
          })}
          diff={item.pricePercentChange24h}
          isPercentage
          showArrow
        />
      </div>
      <div class="table-cell" style={{ justifySelf: 'end' }}>
        <TickerNumber
          val={formatCurrency(Math.abs(item.pricePercentChange7d), {
            currencyConfig: { symbol: '', precision: 3 },
          })}
          diff={item.pricePercentChange7d}
          isPercentage
          showArrow
        />
      </div>
      <div class="table-cell" style={{ justifySelf: 'end' }}>
        {item?.marketCap.usd === 0
          ? '--'
          : formatCurrency(item.marketCap.usd, {
              currencyConfig: { precision: 0 },
              nullPlaceholder: '--',
            })}
      </div>
      <div class="table-cell" style={{ justifySelf: 'end' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'right',
          }}
        >
          <span>
            {formatCurrency(item.volume24h.usd, {
              currencyConfig: { precision: 0 },
              nullPlaceholder: '--',
            })}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.60)' }}>
            {formatCurrency(item.volume24h.hkd, {
              currencyConfig: { precision: 0 },
              nullPlaceholder: '--',
            }) + ' HKD'}
          </span>
        </div>
      </div>
    </div>
  );
};
