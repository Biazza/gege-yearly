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
import YouTube from "@u-wave/react-youtube";

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
                <Nav.Link href="#lectures">Palestras/Lectures</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#schedule">Programação/Schedule</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#info">Informações/Informations</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about">Sobre/About</Nav.Link>
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
                  <Card.Title>O EVENTO/THE EVENT</Card.Title>
                  <p className={styles.card_text}>
                    Seminário anual do Grupo de Estudos em Geodésia Espacial –
                    GEGE – com palestras de pesquisadores convidados e dos
                    pesquisadores e professores que participam das reuniões
                    quinzenais do GEGE, envolvendo a UNESP PP, UFPR, UFPE, UFRGS
                    e UFU (Annual seminar with lectures by invited researchers
                    and professors and researchers who participate in the
                    meetings of GEGE, involving UNESP, UFPR, UFPE, UFRGS and
                    UFU).
                  </p>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>O GEGE/THE GEGE</Card.Title>
                  <p className={styles.card_text}>
                    O grupo tem por objetivo discutir assuntos ligados com a
                    Geodésia, envolvendo GPS, GLONASS e Galileo, bem como os
                    referenciais envolvidos em suas realizações e no Sistema
                    Geodésico Brasileiro (SGB). Fazem parte ainda estudos
                    relativos com as influências que afetam o sinal no seu
                    trajeto entre o satélite e o receptor, bem como suas
                    aplicações em estudos atmosféricos (The group aims to
                    discuss issues related to Geodesy, involving GPS, GLONASS,
                    and Galileo, as well as the references involved in their
                    achievements and the Brazilian Geodetic System (SGB). There
                    are also studies related to the influences that affect the
                    signal in its path between the satellite and the receiver,
                    as well as its applications in atmospheric studies).
                  </p>
                  <YouTube video="dMAjeueLm3w" autoplay />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>DATA E LOCAL/DATE AND PLACE</Card.Title>
                  <p>
                    Data/Date: <strong>18/12/2020</strong>
                  </p>
                  <p>
                    <strong>
                      Início ás 9h00 - Horário de Brasília (UTC-03:00)
                    </strong>
                  </p>
                  <p>Local/Place:{"   "}</p>
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
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3 id="lectures">
              <IoMdMicrophone /> Palestras/Lectures
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
                speakerName="PETER TEUNISSEN (Delft University of Technology)"
                lectureStart="09:10"
                lectureEnd="10:10"
              />
              <br />
              <Speakers
                imagePath="/images/natali_caccioppoli.jpg"
                lectureTitle="PEGASUS: DFMC (Dual- Frequency Multi-Constellation) GBAS
                evolutions"
                speakerName="NATALI CACCIOPPOLI (Eurocontrol)"
                lectureStart="10:10"
                lectureEnd="11:10"
              />
              <br />
              <Speakers
                imagePath="/images/manuel_pajares.jpg"
                lectureTitle="New contributions to the detection of geophysical and
                astronomical signals with GNSS"
                speakerName="MANUEL HERNÁNDEZ-PAJARES (UPC - Polytechnical University of
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
              <IoIosCalendar /> Programação/Schedule (18/12/2020)
            </h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Horário</th>
                  <th>Palestra/Apresentação/Lecture</th>
                  <th>Responsável(eis)/Speaker</th>
                </tr>
              </thead>
              <tbody>
                {allEvents.map(({ lectureName, speakerName, hour }) => (
                  <tr key={lectureName}>
                    <td>{hour}</td>
                    <td>{lectureName}</td>
                    <td>{speakerName}</td>
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
              <IoMdCheckmarkCircle /> Informações/Informations
            </h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                O evento é gratuíto e aberto à comunidade (The event is free and
                open to the community)
              </li>
              <li>
                As palestras/apresentações serão transmitidas em uma live no
                canal do GEGE no YouTube (The lectures/presentations will be
                broadcast live on the GEGE YouTube channel)
              </li>
              <li>
                O link para a live (The link to live):{" "}
                <Badge variant="secondary">
                  <RiRadioButtonLine /> Offline
                </Badge>{" "}
              </li>
              <li>
                As perguntas aos palestrantes deverão ser feitas no chat da live
                no YouTube, e serão oportunamente lidas em ordem (The questions
                to the speakers should be asked in the live chat on YouTube and
                will be read in due course)
              </li>
              <li>
                Ao realizar a pergunta, informe seu nome, o palestrante a quem
                deseja perguntar e o questionamento (When asking the question,
                inform your name, the speaker you want to ask, and the
                questioning)
              </li>
              <li></li>
              <li>
                O link para o formulário de indicação de participação no
                seminário anual, e que será utilizado para emissão do
                certificado de participação, será divulgado aqui no site do
                evento e na descrição da live. O correto preenchimento do
                formulário é de inteira responsabilidade do participante (The
                link to the form for indicating participation in the annual
                seminar, which will be used to issue the certificate of
                participation, will be disclosed here on the event website and
                in the description of the live. Correct completion of the form
                is the sole responsibility of the participant)
              </li>
            </ul>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3 id="about">
              <IoIosInformationCircle /> Sobre/About
            </h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Realização/Realization:</h5>
          </Col>
          <Col>
            <h5>Apoio/Support:</h5>
          </Col>
          <Col>
            <h5>Colaboração/Collaboration:</h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>
                <Image
                  src="/images/gege_completo.png"
                  alt="GEGE"
                  width="100"
                  height="150"
                />
              </Col>
            </Row>
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
                  className={styles.gege_logo}
                />
              </Col>
            </Row>
            <br />
            <Row>
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
            </Row>
            <br />
            <Row>
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
          <Col>
            <Row>
              <Col>
                <Image
                  src="/images/unesp.png"
                  alt="Unesp"
                  width="100"
                  height="100"
                />
              </Col>
              <Col>
                <Image
                  src="/images/ufpe.png"
                  alt="UFPE"
                  width="200"
                  height="100"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Image
                  src="/images/ufrgs.png"
                  alt="UFRGS"
                  width="100"
                  height="100"
                />
              </Col>
              <Col>
                <Image
                  src="/images/ufpr.png"
                  alt="UFPR"
                  width="200"
                  height="200"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image
                  src="/images/ufu.png"
                  alt="UFU"
                  width="200"
                  height="100"
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
