import { FunctionalComponent, h } from '@stencil/core';
import { NFTCollection } from 'src/types/Crypto.type';
import { formatNumber } from 'src/utils/number';

type Props = {
  collection: NFTCollection;
};

export const FeaturedNftList: FunctionalComponent<Props> = ({ collection }) => {
  return (
    <div class="inner">
      <div class="nft-image">
        <img class="nft-image" src={collection.imageUrl} alt="nft icon" />
      </div>
      <div class="info-box">
        <span class="text-box">{collection.name}</span>
        <div class="price-box">
          <p>底價</p>
          <img
            src={collection.paymentToken.imageUrl}
            alt={collection.paymentToken.name}
            aria-label={collection.paymentToken.name}
            width={8}
            style={{
              margin: '0 4px',
              maxWidth: '56px',
              borderRadius: '100%',
            }}
          />
          <span>
            {formatNumber(collection.floorPrice, { nullPlaceholder: '--' })}
          </span>
        </div>
      </div>
    </div>
  );
};
