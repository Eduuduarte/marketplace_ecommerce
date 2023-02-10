# The Project Ecommerce

[Instalation](###Instalation)
[Project](###TheProject)

### Instalation

~~~npm 
npx create-next-app ECOMMERCE
~~~

#### Sanity

~~~npm
npm create sanity@latest
~~~

### The Project


#### Formatter Currency

~~~javascript
export const useFormater = () => ({
    formaterCurrency: (value) => {
        return value.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
        });
    }
})
~~~