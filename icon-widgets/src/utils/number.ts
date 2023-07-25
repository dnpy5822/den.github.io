import currency from 'currency.js';
import * as R from 'ramda';

export const BILLION = 1000000000;

export const MILLION = 1000000;

export const THOUSAND = 1000;

export const formatCurrency = (
  value: number,
  config?: {
    currencyConfig?: currency.Options;
    divide?: number;
    denoteSymbol?: boolean;
    nullPlaceholder?: string;
  },
): string => {
  const currencyConfig = R.defaultTo({}, config?.currencyConfig);

  const divide = R.defaultTo(1, config?.divide);

  const nullPlaceholder = R.defaultTo('', config?.nullPlaceholder);

  const getDenoteSymbol = () => {
    if (!config?.denoteSymbol) return '';
    switch (divide) {
      case THOUSAND:
        return ' K';
      case MILLION:
        return ' M';
      case BILLION:
        return ' B';
      default:
        return '';
    }
  };

  return R.isNil(value)
    ? nullPlaceholder
    : value >= 1
    ? currency(value, currencyConfig).divide(divide).format() +
      getDenoteSymbol()
    : '$' + value.toPrecision(2);
};

export const formatNumber = (
  number: number,
  arg: number | { precision?: number; nullPlaceholder: string } = 2,
): string => {
  const argument = arg as any;

  let precision: number = 2;

  let nullPlaceholder: string = null;

  if (R.type(argument) === 'Number') {
    // treat as precision
    precision = argument;
  } else if (R.type(argument) === 'Object') {
    precision = argument?.precision ?? precision;
    nullPlaceholder = argument?.nullPlaceholder;
  }

  return R.isNil(number)
    ? nullPlaceholder
    : number >= 1
    ? currency(number, { precision, symbol: '' }).format()
    : number.toPrecision(2);
};
