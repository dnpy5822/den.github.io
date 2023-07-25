import { h, r as registerInstance } from './index-baa9e0a6.js';
import { f as formatNumber, s as services, p as prop, W as WidgetHeader, F as Footer } from './index-fa171bbf.js';

const FeaturedNftList = ({ collection }) => {
  return (h("div", { class: "inner" },
    h("div", { class: "nft-image" },
      h("img", { class: "nft-image", src: collection.imageUrl, alt: "nft icon" })),
    h("div", { class: "info-box" },
      h("span", { class: "text-box" }, collection.name),
      h("div", { class: "price-box" },
        h("p", null, "\u5E95\u50F9"),
        h("img", { src: collection.paymentToken.imageUrl, alt: collection.paymentToken.name, "aria-label": collection.paymentToken.name, width: 8, style: {
            margin: '0 4px',
            maxWidth: '56px',
            borderRadius: '100%',
          } }),
        h("span", null, formatNumber(collection.floorPrice, { nullPlaceholder: '--' }))))));
};

const indexCss = "/* css reset start */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n  font-size: 16px;\n  font-family: \"PingFang HK\", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", sans-serif;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  font-family: \"PingFang HK\", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", sans-serif !important;\n}\n\n/* css reset end */\n.loading {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  font-size: 24px;\n}\n\n:host {\n  display: block;\n  width: 100%;\n  container: container/inline-size;\n}\n\n.container {\n  min-width: 310px;\n  max-width: 1256px;\n  font-size: 16px;\n  background-color: white;\n  padding: 24px 0;\n  width: 100%;\n}\n\n.nft-wrapper {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 100%;\n  -ms-flex-pack: start;\n  justify-content: start;\n  margin-bottom: 17px;\n}\n\n.inner {\n  display: block;\n  margin: 0 8px;\n  max-width: 233.6px;\n  border-radius: 10px 10px 10px 10px;\n  -webkit-box-shadow: 0 0 10px rgb(200, 200, 200);\n  box-shadow: 0 0 10px rgb(200, 200, 200);\n  border-collapse: collapse;\n  text-decoration: none;\n  font-family: \"PingFang HK\";\n}\n.inner:first-child {\n  margin-left: 12px;\n}\n.inner:last-child {\n  margin-right: 12px;\n}\n\n.nft-image {\n  width: 160px;\n  height: 134px;\n  border-radius: 5% 5% 0 0;\n  margin-bottom: 0;\n}\n\n.info-box {\n  padding: 16px 0 16px 8px;\n  margin-top: 0;\n  border-radius: 0 0 10px 10px;\n  color: black;\n}\n\n.price-box {\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px;\n  margin-top: 3px;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.text-box {\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow-wrap: break-word;\n}\n\n.scroll-wrapper {\n  overflow-x: scroll;\n  padding-right: 4px;\n  -ms-overflow-style: none; /* IE 11 */\n  scrollbar-width: none; /* Firefox 64 */\n}\n\n.scroll-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n@container container (min-width:768px) {\n  .nft-image {\n    width: 200px;\n    height: 185px;\n  }\n}\n@container container (min-width:1024px) {\n  .nft-image {\n    width: 230px;\n    height: 224px;\n  }\n}";

const TrendingNftListWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.limit = 5;
    this.isLoading = false;
    this.error = undefined;
    this.featuredNFTList = null;
  }
  connectedCallback() {
    this.isLoading = true;
  }
  async componentWillLoad() {
    try {
      const featuredNftData = (await services.fetchFeaturedNfts({
        limit: this.limit,
      }));
      this.featuredNFTList = featuredNftData;
    }
    catch (error) {
      console.error('error:', error);
      this.error = error;
    }
    this.isLoading = false;
  }
  render() {
    const collections = prop('collections', this.featuredNFTList);
    const fetchTime = prop('lastFetchedTime', this.featuredNFTList);
    return (h("div", { class: "container" }, h(WidgetHeader, { title: '精選NFT' }), this.isLoading && h("div", { class: "loading" }, "Loading..."), !this.isLoading && this.error && h("div", { class: "error" }, "Error"), !this.isLoading && collections.length === 0 && (h("div", { class: "empty" }, "No data")), !this.isLoading && collections.length > 0 && (h("div", { class: "scroll-wrapper" }, h("div", { class: "nft-wrapper" }, collections &&
      collections.map(collection => (h(FeaturedNftList, { collection: collection })))))), h(Footer, { source: 'OpenSea', updateTime: fetchTime })));
  }
};
TrendingNftListWidget.style = indexCss;

export { TrendingNftListWidget as icon_featured_nft_list_widget };

//# sourceMappingURL=icon-featured-nft-list-widget.entry.js.map