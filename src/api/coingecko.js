import axios from "axios";

export const coinGeckoInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    headers: {
        'accept': 'application/json',
        'x-cg-demo-api-key': 'CG-S5b1Tz2AEdJBb35kcmEf6Uw2'
    }
});