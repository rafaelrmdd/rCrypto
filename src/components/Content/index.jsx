import { Container } from "./styles";
import { coinGeckoInstance } from "../../api/coingecko";
import { useEffect, useState } from "react";
import { all } from "axios";

export const Content = () =>{

    const [coinGeckoData, setCoinGeckoData] = useState([]);
    const [coinIdsList, setCoinIdsList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const defaultCoins = ['bitcoin', 'ethereum'];
                const response = await coinGeckoInstance.get('/simple/price', {
                    params: {
                        /*Formats the array of cryptocurrencies to a string because
                         the API doesn't accept array as a parameter*/
                        ids: [...defaultCoins, ...coinIdsList].join(','),
                        vs_currencies: 'usd',
                        include_market_cap: true,
                        include_24hr_vol: true,
                        include_24hr_change: true,
                        include_last_updated_at: true,
                        precision: 'full'
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
        
    }, [coinIdsList])

    let dollarFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 5
    })

    return (
        <Container>
            <form 
                onSubmit={(e) =>{
                        e.preventDefault()
                        //Adds the value to the cryptocurrencies list only when submited  
                        setCoinIdsList([...coinIdsList, inputValue])
                        //Resets the forms value when submited
                        setInputValue('')
                    }
                } 
            >

                <input 
                    type="text" 
                    placeholder="Ex: bitcoin"
                    value={inputValue}
                    onClick={(e) => e.preventDefault()}
                    /*Grabs each new letter and sets it. Because the 'setInputValue' is not an array
                    so it won't be an array full of repeated characters
                    */ 
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Add Cryptocurrency
                </button>
            </form>
            
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
                        <td>{dollarFormat.format(`${coinGeckoData[cryptoName].usd}`)}</td>
                        <td>{dollarFormat.format(`${coinGeckoData[cryptoName].usd_market_cap}`)}</td>
                        <td>{dollarFormat.format(`${coinGeckoData[cryptoName].usd_24h_vol}`)}</td>
                    </tr>
                ))}
            </table>
        </Container>
    )
}