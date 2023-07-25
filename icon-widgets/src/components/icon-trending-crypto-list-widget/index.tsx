import { Component, Host, Prop, State, h } from '@stencil/core';
import { WidgetHeader } from 'src/components/WidgetHeader';
import services from 'src/services';
import { CryptoTrending } from 'src/types/Crypto.type';
import { Footer } from '../WidgetFooter';
import { TrendingCryptoListItem } from './TrendingCryptoListItem';
import * as R from 'ramda';

@Component({
  tag: 'icon-trending-crypto-list-widget',
  styleUrl: 'index.scss',
  shadow: true,
})
export class IconTrendingCryptoListWidget {
  /**
   * Number of crypto items to show
   */
  @Prop() limit?: number = 5;

  @State() isLoading: boolean = false;
  @State() error: any = null;
  @State() cryptoTrending: CryptoTrending | null = null;

  connectedCallback() {
    this.isLoading = true;
  }

  async componentWillLoad() {
    try {
      const cryptoTrending =
        (await services.fetchTrendingCryptos()) as CryptoTrending;
      this.cryptoTrending = cryptoTrending;
    } catch (error) {
      console.error(error);
      this.error = error;
    }
    this.isLoading = false;
  }

  render() {
    const { cryptos = [] } = this.cryptoTrending ?? {};
    const cryptoList = cryptos.slice(0, this.limit);

    const fetchTime: string = R.prop('lastFetchedTime', this.cryptoTrending);

    return (
      <Host>
        <div class="container">
          <WidgetHeader title="虛擬貨幣走勢" />
          {this.isLoading && <div class="loading">Loading...</div>}
          {!this.isLoading && this.error && <div class="error">Error</div>}
          {!this.isLoading && cryptoList.length === 0 && (
            <div class="empty">No data</div>
          )}
          {!this.isLoading && cryptoList.length > 0 && (
            <div class="scroll-wrapper" style={{}}>
              <div class="table">
                <div class="table-header" color="rgba(255, 255, 255, 0.6)">
                  <div class="table-head" style={{ justifyContent: 'center' }}>
                    #
                  </div>
                  <div class="table-head">名稱</div>
                  <div
                    class="table-head"
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      paddingRight: '8px',
                    }}
                  >
                    價格
                  </div>
                  <div
                    class="table-head"
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      paddingRight: '8px',
                    }}
                  >
                    24h%
                  </div>
                  <div
                    class="table-head"
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      paddingRight: '8px',
                    }}
                  >
                    7d%
                  </div>
                  <div
                    class="table-head"
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      paddingRight: '8px',
                    }}
                  >
                    總市值
                  </div>
                  <div
                    class="table-head"
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      paddingRight: '8px',
                    }}
                  >
                    成交額 (24h)
                  </div>
                </div>
                <div class="table-body">
                  {cryptoList.map((item, idx) => (
                    <TrendingCryptoListItem item={item} idx={idx} />
                  ))}
                </div>
              </div>
            </div>
          )}
          <Footer source={'Coingecko'} updateTime={fetchTime} />
        </div>
      </Host>
    );
  }
}
