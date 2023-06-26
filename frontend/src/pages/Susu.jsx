import { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../contexts/current-user-context';
import SusuCard from '../components/SusuCard';
import '../styles/susus-page.css';
import { Container, Row, Col } from 'react-bootstrap';


export default function Susu() {
  const [ currentSusulist, setCurrentSusulist ] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(()=>{
    const handleFetch = async () => {
      try {
        console.log(currentUser)
        const id = currentUser.id;
        const suRes = await fetch(`/api/susus/${id}`);
        const suData = await suRes.json();
        setCurrentSusulist(suData)
      } catch (err) {
          console.log(err);
          return null;
      }
    }
    handleFetch()
    },[currentUser])


  console.log(currentSusulist);
  
  return (
    <Container className="susupage-container">
      <Row>
      {currentSusulist.map((susu) => (
        <Col key={susu.id} xs={6} md={3}>
        <SusuCard className="susu-card" key={susu.id} susu={susu} />
        </Col>
      ))}
      </Row>
    </Container>
  );
}
