import styled from 'styled-components';

export const Card = styled.div`
position: relative;
width: 308px;
height: 404px;

padding: 28px 36px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`
export const GoItIcon = styled.img`
position: absolute;
top: 20px;
left: 20px;
width: 72px;
height: 22px;
`

export const ImgTweets = styled.img`
width: 308px;
height: 168px;
margin-bottom: 88px;
`

export const ContainerAvatar = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 64px;
height: 64px;
margin: 0 auto;
border: 8px solid #EBD8FF;
border-radius: 85.9232px;
z-index: 1;
overflow: hidden;

`

export const LineCenter =styled.div`
position: absolute;
top: 50%;
left: 0;
transform: translateY(-50%);
width: 100%;
height: 8px;
background-color: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;

`
export const Avatar = styled.img`
width: 100%;
`


export const Text = styled.p`
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
text-align: center;
color: #EBD8FF;

:nth-child(1) {
  margin-bottom: 16px;
}

:nth-child(2) {
  margin-bottom: 26px;
}
`
