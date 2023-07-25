import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-baa9e0a6.js';
export { s as setNonce } from './index-baa9e0a6.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? (scriptElm || {})['data-opts'] || {} : {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["icon-featured-nft-list-widget",[[1,"icon-featured-nft-list-widget",{"limit":[2],"isLoading":[32],"error":[32],"featuredNFTList":[32]}]]],["icon-trending-crypto-list-widget",[[1,"icon-trending-crypto-list-widget",{"limit":[2],"isLoading":[32],"error":[32],"cryptoTrending":[32]}]]],["icon-trending-nft-list-widget",[[1,"icon-trending-nft-list-widget",{"width":[32],"isLoading":[32],"error":[32],"nftTrending":[32]},[[9,"resize","handleResize"]]]]]], options);
});

//# sourceMappingURL=icon-widgets.esm.js.map