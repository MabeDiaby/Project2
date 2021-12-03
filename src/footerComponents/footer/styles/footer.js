import styled from 'styled-components';
/*
https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/
https://www.smashingmagazine.com/2021/08/compound-components-react/
*/
export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(circle, #927053 0%, #7D4E36 100%);
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: black;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  cursor: default;
  font-size: 24px;
  color: black;
  margin-bottom: 40px;
  font-weight: bold;
  &:hover {
    color: white;
    transition: 200ms ease-in;
}
`;