import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    min-height: calc(100vh - 6rem);

    background: var(--blue-50);
    margin: 2rem auto;
    padding: 0 0.9rem;

    form{
        margin-bottom: 1.5rem;

        input{
            padding: 0.3rem;
            width: 200px;
            line-height: 1rem;

            outline: 0;
            border: 0;
            border-radius: 3px;
            background: var(--blue-100);
        }

        button{
            margin-left: 0.5rem;
            padding: 0.3rem;
            line-height: 1rem;
            font-size: 0.7rem;
            
            outline: 0;
            border: 0;
            border-radius: 3px;

            background: var(--blue-100);

        }

    }

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
