import styled from 'styled-components'

const Numpad = () => {
    return(
        <Numpad_wrapper>
            <Number>1</Number>
            <Number>2</Number>
            <Number>3</Number><br/>
            <Number>4</Number>
            <Number>5</Number>
            <Number>6</Number><br/>
            <Number>7</Number>
            <Number>8</Number>
            <Number>9</Number><br/>
            <Number>C</Number>
            <Number>0</Number>
            <Number>OK</Number>
        </Numpad_wrapper>
    )
}
const Numpad_wrapper = styled.div`
    position:absolute;
    top:230px;
    right:41px;
`
const Number = styled.div`
    color:black;
    background-color:gray;
    border-radius:50%;
    height: 13px;
    width: 13px;
    font-size: 12px;
    padding: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin:2px;
    cursor:pointer;
    &:active{
        background-color:red;
    }
`


export default Numpad