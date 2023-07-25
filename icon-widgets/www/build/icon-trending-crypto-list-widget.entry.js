import { h, r as registerInstance, a as Host } from './index-baa9e0a6.js';
import { g as gt, l as lt, a as formatCurrency, s as services, p as prop, W as WidgetHeader, F as Footer } from './index-fa171bbf.js';

const TickerNumber = ({ val, diff = 0, showArrow = false, isPercentage = false, }) => {
  const [color, arrow] = gt(diff, 0)
    ? ['#19AE60', '\u25B2']
    : lt(diff, 0)
      ? ['#CE2B37', '\u25BC']
      : ['#98b0ba', null];
  return (h("div", { style: { color, display: 'flex', flexWrap: 'nowrap' } },
    showArrow && arrow,
    val,
    h("div", { style: { paddingRight: diff === 0 ? '8px' : '0' } }, diff === 0 ? '' : isPercentage && '%')));
};

const TrendingCryptoListItem = ({ item, idx, }) => {
  return (h("div", { class: "table-row", style: { padding: '10px 0' } },
    h("div", { class: "table-cell", style: { justifySelf: 'center' } }, idx + 1),
    h("div", { class: "table-cell", style: { flexShrink: '0', fontSize: '1rem' } },
      h("img", { src: item.logo.thumb, alt: item.name.en, "aria-label": item.name.en, height: 24, width: 24, style: { marginRight: '8px' } }),
      h("span", null,
        item.name.en !== item.name['zh-Hant'] ? item.name['zh-Hant'] : '',
        ' ',
        item.name.en,
        " ",
        item.symbol)),
    h("div", { class: "table-cell", style: { justifySelf: 'end' } },
      h("div", { style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
        } },
        h("span", null, formatCurrency(item.price.usd, {
          currencyConfig: { precision: 2 },
          nullPlaceholder: '--',
        })),
        h("span", { style: { fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.60)' } }, formatCurrency(item.price.hkd, {
          currencyConfig: { precision: 2 },
          nullPlaceholder: '--',
        }) + ' HKD'))),
    h("div", { class: "table-cell", style: { justifySelf: 'end' } },
      h(TickerNumber, { val: formatCurrency(Math.abs(item.pricePercentChange24h), {
          currencyConfig: { symbol: '', precision: 3 },
        }), diff: item.pricePercentChange24h, isPercentage: true, showArrow: true })),
    h("div", { class: "table-cell", style: { justifySelf: 'end' } },
      h(TickerNumber, { val: formatCurrency(Math.abs(item.pricePercentChange7d), {
          currencyConfig: { symbol: '', precision: 3 },
        }), diff: item.pricePercentChange7d, isPercentage: true, showArrow: true })),
    h("div", { class: "table-cell", style: { justifySelf: 'end' } }, (item === null || item === void 0 ? void 0 : item.marketCap.usd) === 0
      ? '--'
      : formatCurrency(item.marketCap.usd, {
        currencyConfig: { precision: 0 },
        nullPlaceholder: '--',
      })),
    h("div", { class: "table-cell", style: { justifySelf: 'end' } },
      h("div", { style: {
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'right',
        } },
        h("span", null, formatCurrency(item.volume24h.usd, {
          currencyConfig: { precision: 0 },
          nullPlaceholder: '--',
        })),
        h("span", { style: { fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.60)' } }, formatCurrency(item.volume24h.hkd, {
          currencyConfig: { precision: 0 },
          nullPlaceholder: '--',
        }) + ' HKD')))));
};

const indexCss = "/* css reset start */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n  font-size: 16px;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  font-family: \"PingFang HK\", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", sans-serif !important;\n}\n\n/* css reset end */\n:host {\n  display: block;\n  width: 100%;\n  container: container/inline-size;\n}\n\n.container {\n  min-width: 310px;\n  font-size: 16px;\n  margin-bottom: 16px;\n  background-color: white;\n  padding: 24px 0;\n  width: 100%;\n}\n\n.loading {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  font-size: 24px;\n}\n\n.scroll-wrapper {\n  overflow-x: scroll;\n  -ms-overflow-style: none; /* IE 11 */\n  scrollbar-width: none; /* Firefox 64 */\n}\n\n.scroll-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n.table {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin: 0 12px 16px;\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n  max-width: 100%;\n  padding-right: 8px;\n}\n\n.table-header {\n  display: grid;\n  grid-template-columns: 42px minmax(170px, auto) minmax(110px, auto) 89px 107px 158px 143px;\n  background: #ffffff;\n  color: rgba(0, 0, 0, 0.7803921569);\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  background: transparent;\n  margin-bottom: 8px;\n  border-bottom: none;\n  padding: 0 16px;\n}\n\n.table-head {\n  font-size: 0.75rem;\n}\n.table-head:first-child {\n  padding-right: 0;\n  justify-self: center;\n}\n.table-head:last-child {\n  padding-right: 0 !important;\n}\n\n.table-body {\n  border-radius: 8px;\n  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n  max-width: 100%;\n  padding: 0 16px;\n}\n\n.table-row {\n  display: grid;\n  grid-template-columns: 42px minmax(170px, auto) minmax(110px, auto) 89px 107px 158px 143px;\n  background: #ffffff;\n  color: rgba(0, 0, 0, 0.7803921569);\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.table-row:first-child {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.table-row:last-child {\n  border-bottom: none;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.table-cell {\n  font-weight: 600;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: start;\n  padding-top: 0px;\n  padding-right: 8px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.14);\n}\n.table-cell:first-child {\n  padding-right: 0;\n  border-bottom-width: 0px;\n}\n.table-cell:last-child {\n  padding-right: 0;\n}\n\n@container container (min-width: 1024px) {\n  .table {\n    padding-right: 0;\n  }\n}";

const IconTrendingCryptoListWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.limit = 5;
    this.isLoading = false;
    this.error = null;
    this.cryptoTrending = null;
  }
  connectedCallback() {
    this.isLoading = true;
  }
  async componentWillLoad() {
    try {
      const cryptoTrending = (await services.fetchTrendingCryptos());
      this.cryptoTrending = cryptoTrending;
    }
    catch (error) {
      console.error(error);
      this.error = error;
    }
    this.isLoading = false;
  }
  render() {
    var _a;
    const { cryptos = [] } = (_a = this.cryptoTrending) !== null && _a !== void 0 ? _a : {};
    const cryptoList = cryptos.slice(0, this.limit);
    const fetchTime = prop('lastFetchedTime', this.cryptoTrending);
    return (h(Host, null, h("div", { class: "container" }, h(WidgetHeader, { title: "\u865B\u64EC\u8CA8\u5E63\u8D70\u52E2" }), this.isLoading && h("div", { class: "loading" }, "Loading..."), !this.isLoading && this.error && h("div", { class: "error" }, "Error"), !this.isLoading && cryptoList.length === 0 && (h("div", { class: "empty" }, "No data")), !this.isLoading && cryptoList.length > 0 && (h("div", { class: "scroll-wrapper", style: {} }, h("div", { class: "table" }, h("div", { class: "table-header", color: "rgba(255, 255, 255, 0.6)" }, h("div", { class: "table-head", style: { justifyContent: 'center' } }, "#"), h("div", { class: "table-head" }, "\u540D\u7A31"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      } }, "\u50F9\u683C"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      } }, "24h%"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      } }, "7d%"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      } }, "\u7E3D\u5E02\u503C"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      } }, "\u6210\u4EA4\u984D (24h)")), h("div", { class: "table-body" }, cryptoList.map((item, idx) => (h(TrendingCryptoListItem, { item: item, idx: idx }))))))), h(Footer, { source: 'Coingecko', updateTime: fetchTime }))));
  }
};
IconTrendingCryptoListWidget.style = indexCss;

export { IconTrendingCryptoListWidget as icon_trending_crypto_list_widget };

//# sourceMappingURL=icon-trending-crypto-list-widget.entry.js.map