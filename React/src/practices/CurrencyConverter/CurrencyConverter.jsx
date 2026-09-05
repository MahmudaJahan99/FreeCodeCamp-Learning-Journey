import { useMemo, useState } from 'react';
import './CurrencyConverter.css';

const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
};

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    const baseAmount = useMemo(() => {
        return Number(amount) / rates[fromCurrency];
    }, [amount, fromCurrency]);

    const convertedAmount = baseAmount * rates[toCurrency];

    return (
        <div className='currency-converter-body'>
            <main>
                <h1>Currency Converter</h1>

                <p className='conversion-display'>{fromCurrency} to {toCurrency} Conversion</p>

                <input type="number" name="currency" id="currency" value={amount}
                    onChange={(e) => setAmount(e.target.value)} />

                <label htmlFor="">
                    Start Currency:
                    <select id="from-currency"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        {Object.keys(rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="">
                    Target Currency:
                    <select id="to-currency"
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                    >
                        {Object.keys(rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </label>

                <p className="converted-currency">
                    <span> {convertedAmount.toFixed(2)} {toCurrency}</span>
                </p>
            </main>
        </div>
    );
};

export default CurrencyConverter;