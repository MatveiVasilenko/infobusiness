import styled from 'styled-components';

const Image = styled.div`
    width: ${props => props.sizeWidth};
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    & img {
        width: 100%;
    }
`
export default Image 