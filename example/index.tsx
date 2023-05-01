import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug!',
  // img: "./coffee-mug.png",
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, count, increseBy, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
