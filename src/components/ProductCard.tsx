import styles from '../styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import React, { createContext } from 'react';
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    increseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProducts({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className} `} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          reset,
          maxCount: initialValues?.maxCount,
          product,
          increseBy,
        })}
      </div>
    </Provider>
  );
};
