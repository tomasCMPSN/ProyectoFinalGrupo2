import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Paciente.css";
import Masonry from 'react-masonry-css'


const PacienteCards = () => {

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      };
      
  return (
    <section>
      <Container>
        <article>
          <h1 className="mt-3">Lista de pacientes</h1>

        </article>
          <article className='my-5'>
              <input type="text" className='form-stle-inner' placeholder='Buscar'/>
          </article>
        <Masonry  breakpointCols={3}
        breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
        
          <Card className='card-style'>
              <div className='d-flex justify-content-end'>
                  <button className='cards-style-btnD'>❌</button>
                  </div>
            <Card.Img variant="top" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
            <Card.Body>
              <Card.Title className='card-style-title'>Firulais</Card.Title>
              <ul className='cards-style-list'>
                  <li>Marta Minujin</li>
                  <li>marta@gmail.com</li>
                  <li>381387655 </li>
                  <li>Perro</li>
                  <li>Labrador</li>
              </ul>

              <div className='d-flex justify-content-end'>
         
              <Link to='/paciente' className='cards-style-btnE'>Editar</Link>
              </div>
            </Card.Body>
          </Card>
          <Card className='card-style'>
              <div className='d-flex justify-content-end'>
                  <button className='cards-style-btnD'>❌</button>
                  </div>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBddUxi-OkiFmCtikR3wI9eagDqsqxcRokA&usqp=CAU" />
            <Card.Body>
              <Card.Title className='card-style-title'>Firulais</Card.Title>
              <ul className='cards-style-list'>
                  <li>Marta Minujin</li>
                  <li>marta@gmail.com</li>
                  <li>381387655 </li>
                  <li>Perro</li>
                  <li>Labrador</li>
              </ul>

              <div className='d-flex justify-content-end'>
         
              <Link to='/paciente' className='cards-style-btnE'>Editar</Link>
              </div>
            </Card.Body>
          </Card>
          <Card className='card-style'>
              <div className='d-flex justify-content-end'>
                  <button className='cards-style-btnD'>❌</button>
                  </div>
            <Card.Img variant="top" src="https://static3.lasprovincias.es/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg" />
            <Card.Body>
              <Card.Title className='card-style-title'>Firulais</Card.Title>
              <ul className='cards-style-list'>
                  <li>Marta Minujin</li>
                  <li>marta@gmail.com</li>
                  <li>381387655 </li>
                  <li>Perro</li>
                  <li>Labrador</li>
              </ul>

              <div className='d-flex justify-content-end'>
         
              <Link to='/paciente' className='cards-style-btnE'>Editar</Link>
              </div>
            </Card.Body>
          </Card>
          <Card className='card-style'>
              <div className='d-flex justify-content-end'>
                  <button className='cards-style-btnD'>❌</button>
                  </div>
            <Card.Img variant="top" src="https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/terraza-jardines-porche/consejos-para-cuidar-hamster/1729995-3-esl-ES/como-tener-un-hamster-mas-feliz-que-una-perdiz.jpg?crop=1.00xw:0.502xh;0,0.210xh&resize=1200:*" />
            <Card.Body>
              <Card.Title className='card-style-title'>Firulais</Card.Title>
              <ul className='cards-style-list'>
                  <li>Marta Minujin</li>
                  <li>marta@gmail.com</li>
                  <li>381387655 </li>
                  <li>Perro</li>
                  <li>Labrador</li>
              </ul>

              <div className='d-flex justify-content-end'>
         
              <Link to='/paciente' className='cards-style-btnE'>Editar</Link>
              </div>
            </Card.Body>
          </Card>
          <Card className='card-style'>
              <div className='d-flex justify-content-end'>
                  <button className='cards-style-btnD'>❌</button>
                  </div>
            <Card.Img variant="top" src="https://okdiario.com/img/2022/01/21/5-rasgos-que-definen-la-personalidad-de-los-gatos.jpg" />
            <Card.Body>
              <Card.Title className='card-style-title'>Firulais</Card.Title>
              <ul className='cards-style-list'>
                  <li>Marta Minujin</li>
                  <li>marta@gmail.com</li>
                  <li>381387655 </li>
                  <li>Perro</li>
                  <li>Labrador</li>
              </ul>

              <div className='d-flex justify-content-end'>
         
              <Link to='/paciente' className='cards-style-btnE'>Editar</Link>
              </div>
            </Card.Body>
          </Card>
          </Masonry>
  
      </Container>
    </section>
  );
};

export default PacienteCards;
