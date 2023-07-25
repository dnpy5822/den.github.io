import { h, r as registerInstance, a as Host, g as getElement } from './index-baa9e0a6.js';
import { f as formatNumber, s as services, p as prop, W as WidgetHeader, F as Footer } from './index-fa171bbf.js';

const TrendingNftListItem = ({ item, idx, }) => {
  var _a;
  return (h("div", { class: "table-row", style: { padding: '10px 0' } },
    h("div", { class: "table-cell", style: { justifySelf: 'center' } }, idx + 1),
    h("div", { class: "table-cell", style: { flexShrink: '0', fontSize: '1rem' } },
      h("img", { src: item.imageUrl, alt: item.name, "aria-label": item.name, style: {
          marginRight: '8px',
          maxWidth: '56px',
          border: '1px solid #0000001F',
          borderRadius: '100%',
          aspectRatio: '1 / 1',
        } }),
      h("span", null, (_a = item.name) !== null && _a !== void 0 ? _a : '')),
    h("div", { class: "table-cell", style: {
        flexShrink: '0',
        fontSize: '1rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } },
      h("span", { style: {
          display: 'inline-flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        } },
        h("img", { src: item.paymentToken.imageUrl, alt: item.paymentToken.name, "aria-label": item.paymentToken.name, width: 10, style: {
            marginRight: '4px',
            maxWidth: '56px',
            borderRadius: '100%',
          } }),
        h("span", { style: { fontSize: '0.875rem' } }, formatNumber(item.floorPrice, {
          nullPlaceholder: '--',
        })))),
    h("div", { class: "table-cell", style: {
        flexShrink: '0',
        fontSize: '1rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } },
      h("span", { style: {
          display: 'inline-flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        } },
        h("img", { src: item.paymentToken.imageUrl, alt: item.paymentToken.name, "aria-label": item.paymentToken.name, width: 10, style: {
            marginRight: '4px',
            maxWidth: '56px',
            borderRadius: '100%',
          } }),
        h("span", { style: { fontSize: '0.875rem' } }, formatNumber(item.oneDayVolume, {
          nullPlaceholder: '--',
        }))))));
};

const indexCss = "/* css reset start */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n  font-size: 16px;\n  font-family: \"PingFang HK\", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", sans-serif;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  font-family: \"PingFang HK\", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", sans-serif !important;\n}\n\n/* css reset end */\n:host {\n  display: block;\n  width: 100%;\n  container: container/inline-size;\n}\n\n.container {\n  min-width: 310px;\n  font-size: 16px;\n  margin-bottom: 16px;\n  background-color: white;\n  padding: 24px 0;\n  width: 100%;\n}\n\n.loading {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  font-size: 24px;\n}\n\n.scroll-wrapper {\n  overflow-x: scroll;\n  -ms-overflow-style: none; /* IE 11 */\n  scrollbar-width: none; /* Firefox 64 */\n}\n\n.scroll-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n.table {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin: 0 12px 16px;\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n  max-width: 100%;\n  padding-right: 8px;\n}\n\n.table-header-wrapper {\n  display: grid;\n  grid-template-columns: auto;\n  grid-column-gap: 40px;\n  margin-bottom: 8px;\n  padding: 0 16px;\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n}\n\n.table-header {\n  display: grid;\n  grid-template-columns: 34px minmax(200px, auto) 100px 100px;\n}\n\n.table-head {\n  font-size: 0.75rem;\n  color: rgba(0, 0, 0, 0.7803921569);\n}\n\n.table-body {\n  border-radius: 8px;\n  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);\n  color: rgba(0, 0, 0, 0.7803921569);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n  max-width: 100%;\n  padding: 0 16px;\n  -webkit-column-count: 2; /* Chrome, Safari, Opera */\n  -moz-column-count: 2; /* Firefox */\n  column-count: 2;\n  -webkit-column-gap: 40px; /* Chrome, Safari, Opera */\n  -moz-column-gap: 40px; /* Firefox */\n  column-gap: 40px;\n  /* workaround to hide the border of the last child in each column */\n  /* https://stackoverflow.com/a/23083025 */\n  position: relative;\n}\n.table-body:after {\n  content: \"\";\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  background-color: white;\n  bottom: 0;\n  left: 8px;\n  right: 8px;\n}\n\n.table-row {\n  display: grid;\n  grid-template-columns: 34px minmax(200px, auto) 100px 100px;\n  font-size: 0.875rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.table-row:last-child {\n  border-bottom: none;\n}\n\n.table-cell {\n  font-weight: 600;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: start;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.14);\n}\n\n.table-cell:first-child {\n  border-bottom-width: 0px;\n}\n\n@container container (min-width: 1024px) {\n  .table {\n    padding-right: 0;\n  }\n  .table-header-wrapper {\n    grid-template-columns: auto auto;\n  }\n  .table-body {\n    display: block;\n  }\n}";

const IconTrendingNftListWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.width = 0;
    this.isLoading = false;
    this.error = null;
    this.nftTrending = null;
  }
  getWidth() {
    return this.element.getBoundingClientRect().width;
  }
  handleResize() {
    this.width = this.getWidth();
  }
  connectedCallback() {
    this.isLoading = true;
  }
  async componentWillLoad() {
    try {
      const nftTrending = (await services.fetchTrendingNfts());
      this.nftTrending = nftTrending;
    }
    catch (error) {
      console.error(error);
      this.error = error;
    }
    this.isLoading = false;
  }
  componentDidLoad() {
    this.width = this.getWidth();
  }
  render() {
    var _a;
    const { collections = [] } = (_a = this.nftTrending) !== null && _a !== void 0 ? _a : {};
    const collectionList = collections.slice(0, 10);
    const fetchTime = prop('lastFetchedTime', this.nftTrending);
    return (h(Host, null, h("div", { class: "container" }, h(WidgetHeader, { title: "\u6BCF\u65E5\u71B1\u9580NFT" }), this.isLoading && h("div", { class: "loading" }, "Loading..."), !this.isLoading && this.error && h("div", { class: "error" }, "Error"), !this.isLoading && collectionList.length === 0 && (h("div", { class: "empty" }, "No data")), !this.isLoading && collectionList.length > 0 && (h("div", { class: "scroll-wrapper", style: {} }, h("div", { class: "table" }, h("div", { class: "table-header-wrapper", color: "rgba(255, 255, 255, 0.6)" }, h("div", { class: "table-header" }, h("div", { class: "table-head", style: { textAlign: 'center' } }, "#"), h("div", { class: "table-head" }, "\u540D\u7A31"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } }, "\u5E95\u50F9"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } }, "\u4EA4\u6613\u91CF")), this.width >= 1024 && (h("div", { class: "table-header" }, h("div", { class: "table-head", style: { textAlign: 'center' } }, "#"), h("div", { class: "table-head" }, "\u540D\u7A31"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } }, "\u5E95\u50F9"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } }, "\u4EA4\u6613\u91CF")))), h("div", { class: "table-body" }, collectionList.map((item, idx) => (h(TrendingNftListItem, { item: item, idx: idx }))))))), h(Footer, { source: 'OpenSea', updateTime: fetchTime }))));
  }
  get element() { return getElement(this); }
};
IconTrendingNftListWidget.style = indexCss;

export { IconTrendingNftListWidget as icon_trending_nft_list_widget };

//# sourceMappingURL=icon-trending-nft-list-widget.entry.js.map