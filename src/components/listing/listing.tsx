import { Props } from '../model';

export default function Listing({ item }: Props) {
  const level =
    item.quantity > 10
      ? 'level-low'
      : item.quantity > 20
      ? 'level-high'
      : 'level-medium';
  const priceTypeUsEu: string | null =
    item.currency_code === 'USD'
      ? '$'
      : item.currency_code === 'EUR'
      ? '€'
      : null;

  return (
    <div className='item-list'>
      <div className='item'>
        <div className='item-image'>
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} />
          </a>
        </div>
        <div className='item-details'>
          <p className='item-title'>
            {item.title.length > 50
              ? item.title.slice(0, 50) + '...'
              : item.title}
          </p>
          <p className='item-price'>
            {priceTypeUsEu ? priceTypeUsEu : ''}
            {item.price}
            {priceTypeUsEu ? '' : item.currency_code}
          </p>
          <p className={'item-quantity ' + level}>{item.quantity} left</p>
        </div>
      </div>
    </div>
  );
}
