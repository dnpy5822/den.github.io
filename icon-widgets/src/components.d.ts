/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface IconFeaturedNftListWidget {
    limit?: number;
  }
  interface IconTrendingCryptoListWidget {
    /**
     * Number of crypto items to show
     */
    limit?: number;
  }
  interface IconTrendingNftListWidget {}
}
declare global {
  interface HTMLIconFeaturedNftListWidgetElement
    extends Components.IconFeaturedNftListWidget,
      HTMLStencilElement {}
  var HTMLIconFeaturedNftListWidgetElement: {
    prototype: HTMLIconFeaturedNftListWidgetElement;
    new (): HTMLIconFeaturedNftListWidgetElement;
  };
  interface HTMLIconTrendingCryptoListWidgetElement
    extends Components.IconTrendingCryptoListWidget,
      HTMLStencilElement {}
  var HTMLIconTrendingCryptoListWidgetElement: {
    prototype: HTMLIconTrendingCryptoListWidgetElement;
    new (): HTMLIconTrendingCryptoListWidgetElement;
  };
  interface HTMLIconTrendingNftListWidgetElement
    extends Components.IconTrendingNftListWidget,
      HTMLStencilElement {}
  var HTMLIconTrendingNftListWidgetElement: {
    prototype: HTMLIconTrendingNftListWidgetElement;
    new (): HTMLIconTrendingNftListWidgetElement;
  };
  interface HTMLElementTagNameMap {
    'icon-featured-nft-list-widget': HTMLIconFeaturedNftListWidgetElement;
    'icon-trending-crypto-list-widget': HTMLIconTrendingCryptoListWidgetElement;
    'icon-trending-nft-list-widget': HTMLIconTrendingNftListWidgetElement;
  }
}
declare namespace LocalJSX {
  interface IconFeaturedNftListWidget {
    limit?: number;
  }
  interface IconTrendingCryptoListWidget {
    /**
     * Number of crypto items to show
     */
    limit?: number;
  }
  interface IconTrendingNftListWidget {}
  interface IntrinsicElements {
    'icon-featured-nft-list-widget': IconFeaturedNftListWidget;
    'icon-trending-crypto-list-widget': IconTrendingCryptoListWidget;
    'icon-trending-nft-list-widget': IconTrendingNftListWidget;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'icon-featured-nft-list-widget': LocalJSX.IconFeaturedNftListWidget &
        JSXBase.HTMLAttributes<HTMLIconFeaturedNftListWidgetElement>;
      'icon-trending-crypto-list-widget': LocalJSX.IconTrendingCryptoListWidget &
        JSXBase.HTMLAttributes<HTMLIconTrendingCryptoListWidgetElement>;
      'icon-trending-nft-list-widget': LocalJSX.IconTrendingNftListWidget &
        JSXBase.HTMLAttributes<HTMLIconTrendingNftListWidgetElement>;
    }
  }
}
