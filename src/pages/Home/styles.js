import styled from 'styled-components'


export const Container = styled.div`
    background-color: #000; 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Image = styled.img`
    margin-bottom: 15px;
`

export const Input = styled.input`
    border-radius: 14px;
    border: none;
    background: rgba(255, 255, 255, 0.25);

    width: 342px;
    height: 58px;
    padding-left: 15px;

    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    margin-bottom: 42px;
`

export const InputLabel = styled.label`
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 122.222% */
    letter-spacing: -0.408px;
    margin-left: 15px;
`

export const NewOrder = styled.li`
    border-radius: 14px;
    border: none;
    background: rgba(255, 255, 255, 0.25);

    width: 342px;
    height: 100px;
    padding-left: 15px;

    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    margin-top: 20px;

    display: flex;
    justify-content: space-around;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    button{
        background: none;
        border: none;
    }
`