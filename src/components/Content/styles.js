import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    min-height: calc(100vh - 6rem);

    background: var(--blue-50);
    margin: 2rem auto;
    padding: 0 0.9rem;

    

    .table-index{
        width: 100%;

        th:first-child{
            text-align: left;
        }

        th{
            width: 25%;
            text-align: right;
        }
    }

    .table-values{
        width: 100%;

        border-collapse: collapse;
        border-spacing: 0;

        margin-top: 2rem;

        td:first-child{
            text-align: left;
        }

        tr{
            border-top: 1px solid #586b7a;
            border-bottom: 1px solid #586b7a;
        }

        td{
            width: 25%;
            text-align: right;
            padding: 1.5rem 0;
        }

        
    }

    
`
