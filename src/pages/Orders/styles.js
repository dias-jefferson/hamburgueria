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


export const NewOrder = styled.li`
    border-radius: 14px;
    border: none;
    background: rgba(255, 255, 255, 0.25);

    width: 342px;
    height: 100px;
    padding: 5px 15px;
    margin-bottom: 30px;

    margin-top: 20px;

    display: flex;
    justify-content: space-around;

    p{
        color: #FFF;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`