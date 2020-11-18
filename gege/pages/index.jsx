import Head from "next/head";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  CardDeck,
  Card,
  Button,
  Table,
  Badge,
  Navbar,
  Nav,
} from "react-bootstrap";
import Speakers from "../components/speakers";
import styles from "../styles/Home.module.css";
import {
  IoMdMicrophone,
  IoIosCalendar,
  IoLogoYoutube,
  IoIosInformationCircle,
  IoMdCheckmarkCircle,
} from "react-icons/io";
import { RiRadioButtonLine } from "react-icons/ri";
import { getAllEvents } from "../lib/util";

export default function Home({ allEvents }) {
  return (
    <div>
      <Head>
        <title>GEGE ANUAL - 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid>
        <Row>
          <Col>
            <div className={styles.header}>
              <div className={styles.title_container}>
                <Image
                  src="/images/gege.png"
                  width="100"
                  height="100"
                  alt="GEGE logo"
                />
                <h1 className={styles.header_title}>GEGE ANUAL - 2020</h1>
              </div>
              <h4 className={styles.header_subtitle}>
                Seminário Anual do Grupo de Estudos em Geodésia Espacial
              </h4>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Navbar expand="lg" variant="dark" className={styles.nav_menu}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Item>
                <Nav.Link href="#lectures">Palestras</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#schedule">Programação</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#info">Informações</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about">Sobre</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title>O EVENTO</Card.Title>
                  <Card.Text>
                    <p className={styles.card_text}>
                      Seminário anual do Grupo de Estudos em Geodésia Espacial –
                      GEGE – com palestras de pesquisadores convidados e dos
                      pesquisadores e professores que participam das reuniões
                      quinzenais do GEGE, envolvendo a UNESP PP, UFPR, UFPE,
                      UFRGS e UFU.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>O GEGE</Card.Title>
                  <Card.Text>
                    <p className={styles.card_text}>
                      O grupo tem por objetivo discutir assuntos ligados com a
                      Geodésia, envolvendo GPS, GLONASS e Galileo, bem como os
                      referenciais envolvidos em suas realizações e no Sistema
                      Geodésico Brasileiro (SGB). Fazem parte ainda estudos
                      relativos com as influências que afetam o sinal no seu
                      trajeto entre o satélite e o receptor, bem como suas
                      aplicações em estudos atmosféricos.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>DATA E LOCAL</Card.Title>
                  <Card.Text>
                    <p>
                      Data: <strong>18 de Dezembro de 2020</strong>
                    </p>
                    <p>
                      <strong>Início ás 9:00h</strong>
                    </p>
                    <p>Local: Canal do Youtube do GEGE</p>
                    <Button variant="danger">
                      <a
                        href="https://www.youtube.com/channel/UCdQYUhUNS6odJnKLFB7kZPQ"
                        className={styles.youtube_channel}
                      >
                        <IoLogoYoutube /> Canal do GEGE no YouTube
                      </a>
                    </Button>
                    <br />
                    <br />
                    <p>
                      Link para Live:{" "}
                      <Badge variant="secondary">
                        <RiRadioButtonLine /> Offline
                      </Badge>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3 id="lectures">
              <IoMdMicrophone /> Palestras
            </h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="list-unstyled">
              <Speakers
                imagePath="/images/peter_teunissen.jpg"
                lectureTitle="PPP-RTK and Quality-Control"
                speakerName="TEUNISSEN P. (Delft University of Technology)"
                lectureStart="09:10"
                lectureEnd="10:10"
              />
              <br />
              <Speakers
                imagePath="/images/natali_caccioppoli.jpg"
                lectureTitle="PEGASUS: DFMC (Dual- Frequency Multi-Constellation) GBAS
                evolutions"
                speakerName="CACCIOPPOLI N. (Eurocontrol)"
                lectureStart="10:10"
                lectureEnd="11:10"
              />
              <br />
              <Speakers
                imagePath="/images/manuel_pajares.jpg"
                lectureTitle="New contributions to the detection of geophysical and
                astronomical signals with GNSS"
                speakerName="PAJARES M. (UPC - Polytechnical University of
                  Catalunya)"
                lectureStart="11:10"
                lectureEnd="12:10"
              />
            </ul>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3 id="schedule">
              <IoIosCalendar /> Programação
            </h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Palestra/Apresentação (18/12/2020)</th>
                  <th>Responsável(eis)</th>
                  <th>Horário</th>
                </tr>
              </thead>
              <tbody>
                {allEvents.map(({ lectureName, speakerName, hour }) => (
                  <tr key={lectureName}>
                    <td>{lectureName}</td>
                    <td>{speakerName}</td>
                    <td>{hour}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3 id="info">
              <IoMdCheckmarkCircle /> Informações
            </h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>O evento é gratuíto e aberto à comunidade</li>
              <li>
                As palestras/apresentações serão transmitidas em uma live no
                canal do GEGE no YouTube
              </li>
              <li>
                O link para a live:{" "}
                <Badge variant="secondary">
                  <RiRadioButtonLine /> Offline
                </Badge>{" "}
              </li>
              <li>
                As perguntas aos palestrantes deverão ser feitas no chat da live
                no YouTube, e serão oportunamente lidas em ordem
              </li>
              <li>
                Ao realizar a pergunta, informe seu nome, o palestrante a quem
                deseja perguntar e o questionamento
              </li>
            </ul>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3 id="about">
              <IoIosInformationCircle /> Sobre
            </h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Realização:</h5>
          </Col>
          <Col>
            <h5>Apoio:</h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
            <Image src="/images/gege.png" alt="GEGE" width="100" height="100" />
            <p>
              Grupo de Estudos em <br /> Geodésia Espacial
            </p>
          </Col>
          <Col>
            <br />
            <Row>
              <Col>
                <Image
                  src="/images/capes.png"
                  alt="Capes"
                  width="200"
                  height="35"
                />
              </Col>
              <Col>
                <Image
                  src="/images/cnpq.png"
                  alt="Cnpq"
                  width="200"
                  height="70"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Image
                  src="/images/fapesp.png"
                  alt="Fapesp"
                  width="200"
                  height="35"
                />
              </Col>
              <Col>
                <Image
                  src="/images/fundunesp.png"
                  alt="Fundunesp"
                  width="200"
                  height="70"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Image
              src="/images/footer.svg"
              alt="footer"
              width="1587"
              height="422"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const allEvents = getAllEvents();
  return {
    props: {
      allEvents,
    },
  };
}
