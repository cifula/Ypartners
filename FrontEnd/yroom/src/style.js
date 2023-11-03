import { css } from '@emotion/react'

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 30px;
`

export const mainContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 40px 20px;
    width: 1000px;
    height: 500px;
`;

export const header = css`
    text-align: center;
    padding-bottom: 50px;
`

export const reservationContianer = css`
    display: flex;
    align-items: justyfy;
`

export const reservationBox = css`
`

export const timeList = css`
`

export const table = css`
    border: 1px solid #dbdbdb
    width: 500px;
    font-size: 12px;
`;

export const thAndTd = css`
    border: 1px solid #dbdbdb
    background-color: #dbdbdb
    width: 80px;
    padding: 5px 10px;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;

export const smallfont = css`
    font-size: 12px;
`