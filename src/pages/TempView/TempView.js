import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TempView = () => {
  return (
    <Container>
      <h1>ссылки на страницы/компоненты</h1>
      <ul>
        <li>
          <Link to="/home">DashboardPage - /home - Ярослав</Link>
        </li>
        <li>
          <Link to="/login">LoginPage -/login- Виталий</Link>
        </li>
        <li>
          <Link to="/statistic">StatisticPage -/login- Rina</Link>
        </li>
      </ul>
    </Container>
  );
};

export default TempView;
