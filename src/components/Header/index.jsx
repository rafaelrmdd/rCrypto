import { Container } from "./styles"
import { HiOutlineCurrencyDollar } from "react-icons/hi2";


export const Header = () => {
    return (
        <Container>
            <header>
                <HiOutlineCurrencyDollar/>

                <nav>
                    <h1>rCrypto</h1>
                </nav>

                <span></span>
            </header>
        </Container>
    )
}