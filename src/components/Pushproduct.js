
import styled from 'styled-components';

const Pushproduct = ({buy}) => {
    console.log(buy)
    const product_img = '../assets/';
    return(
        <Wrapper>
                {buy.cond && <img src={`${product_img}${buy.product}.png`} alt='product'/> }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position:absolute;
    bottom:97px;
    left:45%;
    
    img{
        height:55px;
    }
`

export default Pushproduct