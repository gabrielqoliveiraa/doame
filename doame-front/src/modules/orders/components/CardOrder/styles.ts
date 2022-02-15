import styled from 'styled-components';

export const Container = styled.div`
  width: 48%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  border-radius: 16px;
  margin-top: 1.4rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  height: 3.75rem;

  p {
    font-size: 26px;
    line-height: 31px;
    color: black;
    font-weight: bold;
  }

  p:nth-child(2) {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Description = styled.p`
  width: 100%;
  margin-top: 10px;
  font-weight: 300;
  font-size: 19px;
  line-height: 23px;
  text-align: justify;
`;

export const Footer = styled.footer`
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionBlood = styled.div`
  display: flex;
  align-items: center;
  section {
    align-items: center;
    justify-content: center;
    display: flex;
    p {
      margin-left: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 39px;
      margin-left: 10px;
      background: #c4c4c4;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      border-radius: 7px;

      & + p {
        margin-left: 8px;
      }
    }

    & + section {
      margin-left: 16px;
    }
  }
`;

interface IProgressBar {
  progress: string;
}

export const ProgressBar = styled.div<IProgressBar>`
  width: 100%;
  background-color: #8c8c8c;
  border-radius: 14px;
  height: 0.938rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: ${(props) => props.progress};
    height: 100%;
    left: 0;
    border-radius: 14px;
    background: #00df6d;
  }
`;

export const SectionBarProgress = styled.section`
  margin-top: 27px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #00df6d;
    margin-right: 8px;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const DonateButton = styled.button`
  width: 8rem;
  height: 2.6rem;
  color: white;
  background-color: #00df6d;
  outline: none;
  border-radius: 10px;
  border: none;

  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  align-self: flex-end;
  color: #ffffff;
`;
