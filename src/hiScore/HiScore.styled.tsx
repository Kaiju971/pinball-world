import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  background: #000; /* fond noir façon arcade */
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "Press Start 2P", sans-serif; /* style rétro si tu veux */
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 3px;
`;

export const ScoreLine = styled.div`
  display: flex;
  justify-content: space-between;
  background: #111;
  padding: 20px;
  border-radius: 10px;
  font-size: 22px;
  box-shadow: 0 0 10px #ffdd00;
  text-transform: uppercase;

  .table-name {
    opacity: 0.8;
  }

  .score {
    font-weight: bold;
  }
`;
