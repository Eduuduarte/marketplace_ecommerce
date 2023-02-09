export const useFormater = () => ({
    formaterCurrency: (value) => {
        return value.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
        });
    }
})