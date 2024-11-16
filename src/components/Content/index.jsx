import { Container } from "./styles";
import { coinGeckoInstance } from "../../api/coingecko";
import { useEffect, useState } from "react";

export const Content = () =>{

    const [coinGeckoData, setCoinGeckoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await coinGeckoInstance.get('/simple/price', {
                    params: {
                        ids: 'bitcoin,dogecoin,ethereum,solana,cardano',
                        vs_currencies: 'usd',
                        include_market_cap: true,
                        include_24hr_vol: true,
                        include_24hr_change: true,
                        include_last_updated_at: true,
                        precision: 2
                    }
                });
                setCoinGeckoData(response.data)
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();

        const interval = setInterval(fetchData, 5 * 60 * 1000);
        return () => clearInterval(interval);
        
    }, [])
    
        
    console.log(coinGeckoData);
    return (
        <Container>
            <table className="table-index">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>Volume 24h</th>
                </tr>
            </table>

            <table className="table-values">
                {/* 
                    Iterates each object item in the data returned by 'coinGeckoData' (bitcoin, ethereum, etc)
                    and pick their names

                    The inside code display these names on the screen
                */}
                {coinGeckoData && Object.keys(coinGeckoData).map((cryptoName) => (
                    <tr key={cryptoName}>
                        <td>{cryptoName}</td>
                        <td>{`${coinGeckoData[cryptoName].usd}`}</td>
                        <td>{`${coinGeckoData[cryptoName].usd_market_cap}`}</td>
                        <td>{`${coinGeckoData[cryptoName].usd_24h_vol}`}</td>
                    </tr>
                ))}
            </table>
        </Container>
    )
}