import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid style={{ 
        height: '100vh',
        padding: '0',
        margin: '0',
        }}>
      <div  style={{
          display: 'flex',
          flexDirection : 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '35%',
          backgroundColor: 'black',
          marginRight: '0',
        }}>
        <button className="mb-4 mt-4 ">Get our latest album</button>
        <img src='/images/play_button.png'
        alt='playButton'></img>
      </div>
      <div style={{
        marginTop: '5%',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly' 
      }}>
        <ul style={{ }}>
        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <h6 style={{ margin: '0 10px 0 0' }}>July 16</h6>
          <h6 style={{ margin: '0 10px' }}>DETROIT, MI</h6>
          <h6 style={{ margin: '0 10px' }}>DTE ENERGY MUSIC THEATRE</h6>
          <button style={{ margin: '0 0 0 10px' }}>BUY TICKETS</button>
        </li><hr/>
        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <h6 style={{ margin: '0 10px 0 0' }}>July 16</h6>
          <h6 style={{ margin: '0 10px' }}>DETROIT, MI</h6>
          <h6 style={{ margin: '0 10px' }}>DTE ENERGY MUSIC THEATRE</h6>
          <button style={{ margin: '0 0 0 10px' }}>BUY TICKETS</button>
        </li><hr/>
        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
           <h6 style={{ margin: '0 10px 0 0' }}>July 16</h6>
           <h6 style={{ margin: '0 10px' }}>DETROIT, MI</h6>
           <h6 style={{ margin: '0 10px' }}>DTE ENERGY MUSIC THEATRE</h6>
           <button style={{ margin: '0 0 0 10px' }}>BUY TICKETS</button>
        </li><hr/>
        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
           <h6 style={{ margin: '0 20px 0 0' }}>July 16</h6>
           <h6 style={{ margin: '0 20px' }}>DETROIT, MI</h6>
           <h6 style={{ margin: '0 20px' }}>DTE ENERGY MUSIC THEATRE</h6>
           <button style={{ margin: '0 0 0 20px' }}>BUY TICKETS</button>
        </li><hr/>
        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
           <h6 style={{ margin: '0 20px 0 0' }}>July 16</h6>
           <h6 style={{ margin: '0 20px' }}>DETROIT, MI</h6>
           <h6 style={{ margin: '0 20px' }}>DTE ENERGY MUSIC THEATRE</h6>
        <button style={{ margin: '0 0 0 20px' }}>BUY TICKETS</button>
        </li><hr/>
        <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
           <h6 style={{ margin: '0 20px 0 0' }}>July 16</h6>
           <h6 style={{ margin: '0 20px' }}>DETROIT, MI</h6>
           <h6 style={{ margin: '0 20px' }}>DTE ENERGY MUSIC THEATRE</h6>
           <button style={{ margin: '0 0 0 20px' }}>BUY TICKETS</button>
        </li><hr/>
        </ul>
      </div>
    </Container>
  );
};

export default HomePage;