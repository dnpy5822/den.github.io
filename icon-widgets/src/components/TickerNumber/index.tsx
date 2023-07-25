import { FunctionalComponent, h } from '@stencil/core';
import * as R from 'ramda';

type Props = {
  val: number | string;
  diff: number;
  decimalPlaces?: number;
  showArrow?: boolean;
  isPercentage?: boolean;
};

export const TickerNumber: FunctionalComponent<Props> = ({
  val,
  diff = 0,
  showArrow = false,
  isPercentage = false,
}) => {
  const [color, arrow] = R.gt(diff, 0)
    ? ['#19AE60', '\u25B2']
    : R.lt(diff, 0)
    ? ['#CE2B37', '\u25BC']
    : ['#98b0ba', null];

  return (
    <div style={{ color, display: 'flex', flexWrap: 'nowrap' }}>
      {showArrow && arrow}
      {val}
      <div style={{ paddingRight: diff === 0 ? '8px' : '0' }}>
        {diff === 0 ? '' : isPercentage && '%'}
      </div>
    </div>
  );
};
