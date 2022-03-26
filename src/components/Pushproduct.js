
import styled from 'styled-components';
import mars from '../assets/mars.png'
import snickers from '../assets/snickers.png'
import bomba from '../assets/bomba.png'

const Pushproduct = () => {
    return(
        <Wrapper>
            <img src={mars} alt='mars'/>
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