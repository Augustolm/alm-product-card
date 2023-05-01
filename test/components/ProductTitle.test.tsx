import * as React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductTitle } from '../../src/components';
import { product1 } from '../data/productos';

describe('ProductTitle', () => {
  test('debe de mostrar el componente correectamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custm Product" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ product }) => <ProductTitle title={product.title} />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
