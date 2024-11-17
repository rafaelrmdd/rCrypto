import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4rem;
    
    background: var(--blue-100);
    
    header{
        width: 80%;
        height: 4rem;
        margin: 0 auto;

        background: transparent;

        padding: 0 1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        svg{
            height: 24px;
            width: 24px;
        }
    }
`