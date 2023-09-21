import './App.css';
import Listing from './components/listing/listing';
import data from '../public/data/etsy.json';
function App() {
  const listData = data.map((item) => {
    const {
      listing_id = 0,
      url = '',
      MainImage = { url_570xN: '' },
      title = '',
      currency_code = '',
      price = '',
      quantity = 0,
    } = item;
    return {
      listing_id,
      url,
      MainImage,
      title,
      currency_code,
      price,
      quantity,
    };
  });

  return (
    <>
      {listData.map((item) => (
        <Listing key={item.listing_id} item={item} />
      ))}
    </>
  );
}

export default App;
/* 




  
*/
