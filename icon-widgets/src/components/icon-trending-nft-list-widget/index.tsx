import { Component, Element, Host, Listen, State, h } from '@stencil/core';
import { WidgetHeader } from 'src/components/WidgetHeader';
import services from 'src/services';
import { NftTrending } from 'src/types/Crypto.type';
import { Footer } from '../WidgetFooter';
import { TrendingNftListItem } from './TrendingNftListItem';
import * as R from 'ramda';

@Component({
  tag: 'icon-trending-nft-list-widget',
  styleUrl: 'index.scss',
  shadow: true,
})
export class IconTrendingNftListWidget {
  @State() width: number = 0;
  @State() isLoading: boolean = false;
  @State() error: any = null;
  @State() nftTrending: NftTrending | null = null;

  @Element() element!: HTMLElement;

  getWidth(): number {
    return this.element.getBoundingClientRect().width;
  }

  @Listen('resize', { target: 'window' })
  handleResize() {
    this.width = this.getWidth();
  }

  connectedCallback() {
    this.isLoading = true;
  }

  async componentWillLoad() {
    try {
      const nftTrending = (await services.fetchTrendingNfts()) as NftTrending;
      this.nftTrending = nftTrending;
    } catch (error) {
      console.error(error);
      this.error = error;
    }
    this.isLoading = false;
  }

  componentDidLoad() {
    this.width = this.getWidth();
  }

  render() {
    const { collections = [] } = this.nftTrending ?? {};
    const collectionList = collections.slice(0, 10);

    const fetchTime: string = R.prop('lastFetchedTime', this.nftTrending);
    return (
      <Host>
        <div class="container">
          <WidgetHeader title="每日熱門NFT" />
          {this.isLoading && <div class="loading">Loading...</div>}
          {!this.isLoading && this.error && <div class="error">Error</div>}
          {!this.isLoading && collectionList.length === 0 && (
            <div class="empty">No data</div>
          )}
          {!this.isLoading && collectionList.length > 0 && (
            <div class="scroll-wrapper" style={{}}>
              <div class="table">
                <div
                  class="table-header-wrapper"
                  color="rgba(255, 255, 255, 0.6)"
                >
                  <div class="table-header">
                    <div class="table-head" style={{ textAlign: 'center' }}>
                      #
                    </div>
                    <div class="table-head">名稱</div>
                    <div
                      class="table-head"
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}
                    >
                      底價
                    </div>
                    <div
                      class="table-head"
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}
                    >
                      交易量
                    </div>
                  </div>
                  {this.width >= 1024 && (
                    <div class="table-header">
                      <div class="table-head" style={{ textAlign: 'center' }}>
                        #
                      </div>
                      <div class="table-head">名稱</div>
                      <div
                        class="table-head"
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                        }}
                      >
                        底價
                      </div>
                      <div
                        class="table-head"
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                        }}
                      >
                        交易量
                      </div>
                    </div>
                  )}
                </div>
                <div class="table-body">
                  {collectionList.map((item, idx) => (
                    <TrendingNftListItem item={item} idx={idx} />
                  ))}
                </div>
              </div>
            </div>
          )}
          <Footer source={'OpenSea'} updateTime={fetchTime} />
        </div>
      </Host>
    );
  }
}
