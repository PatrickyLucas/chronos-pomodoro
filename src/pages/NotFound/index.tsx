import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          harum sequi explicabo minus, repellendus beatae. Porro culpa
          voluptatem vitae officia debitis ut consectetur dolores hic ipsam
          aperiam! Corrupti, maiores voluptate?
        </p>
      </Container>
    </MainTemplate>
  );
}
