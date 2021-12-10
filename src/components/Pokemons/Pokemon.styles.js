import styled from "styled-components";
import { Card } from "../../styles/Card";

export const PokemonContainer = styled.div`
  margin-top: 40px;
  padding: 40px 0;
  ${Card} {
    img {
      margin: auto;
    }
  }
`;

export const Name = styled.p`
  text-align: center;
  text-transform: capitalize;
`;

export const Types = styled.ul`
  display: flex;
  justify-content: center;
  grid-gap: 0.5rem;
`;
