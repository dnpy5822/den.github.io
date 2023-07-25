import { Component, h, Prop, State } from '@stencil/core';
import { WidgetHeader } from '../WidgetHeader';
import services from 'src/services';
import * as R from 'ramda';
import { FeaturedNftList } from './FeaturedNftList';
import { NFTCollection, NftTrending } from 'src/types/Crypto.type';
import { Footer } from '../WidgetFooter';

@Component({
  tag: 'icon-featured-nft-list-widget',
  styleUrl: 'index.scss',
  shadow: true,
})
export class TrendingNftListWidget {
  @Prop() limit?: number = 5;

  @State() isLoading: boolean = false;
  @State() error: Error;
  @State() featuredNFTList: NftTrending | null = null;

  connectedCallback() {
    this.isLoading = true;
  }

  async componentWillLoad() {
    try {
      const featuredNftData = (await services.fetchFeaturedNfts({
        limit: this.limit,
      })) as NftTrending;
      this.featuredNFTList = featuredNftData;
    } catch (error) {
      console.error('error:', error);
      this.error = error;
    }
    this.isLoading = false;
  }

  render() {
    const collections: NFTCollection[] = R.prop(
      'collections',
      this.featuredNFTList,
    );

    const fetchTime: string = R.prop('lastFetchedTime', this.featuredNFTList);

    return (
      <div class="container">
        <WidgetHeader title={'精選NFT'} />
        {this.isLoading && <div class="loading">Loading...</div>}
        {!this.isLoading && this.error && <div class="error">Error</div>}
        {!this.isLoading && collections.length === 0 && (
          <div class="empty">No data</div>
        )}
        {!this.isLoading && collections.length > 0 && (
          <div class="scroll-wrapper">
            <div class="nft-wrapper">
              {collections &&
                collections.map(collection => (
                  <FeaturedNftList collection={collection} />
                ))}
            </div>
          </div>
        )}
        <Footer source={'OpenSea'} updateTime={fetchTime} />
      </div>
    );
  }
}
