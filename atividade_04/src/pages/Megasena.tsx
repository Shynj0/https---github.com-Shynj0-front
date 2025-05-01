import { useLottery } from "../hooks/useLottery";
import { Ball } from "../components/Ball";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color};
`;

const BallsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

const ThemeToggle = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  font-size: 20px;
`;

export function Megasena() {
  const { megasena } = useLottery();
  const { toggleTheme, isDarkTheme } = useTheme();

  if (!megasena) return <div>Carregando...</div>;

  return (
    <Container>
      <h1>Mega-Sena #{megasena.numeroDoConcurso}</h1>
      <BallsContainer>
        {megasena.dezenas.map((dezena, index) => (
          <Ball key={index} number={dezena} />
        ))}
      </BallsContainer>
      <p>{megasena.dataPorExtenso}</p>
      <ThemeToggle
        onClick={toggleTheme}
        aria-label={isDarkTheme ? "Mudar para tema claro" : "Mudar para tema escuro"}
      >
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </ThemeToggle>
    </Container>
  );
}