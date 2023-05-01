# ALM-Product-Card

Este es un paquete de pruebas de despliegue de NPM

### Augusto Luciano Mosettig

## Ejemplo

```
import {ProductImage, ProductTitle, ProductButtons, ProductCard} from 'ALM-product-card'
```

```

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

```
