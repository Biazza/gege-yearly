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
import { IoIosTime } from "react-icons/io";
import { getAllEvents } from "../lib/util";
import YouTube from "@u-wave/react-youtube";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home({ allEvents }) {
  return (
    <div>
      <Head>
        <title>GEGE ANUAL - 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <br />
        <Container>
          <Row>
            <Col
              xl={{ span: 1, offset: 4 }}
              lg={{ span: 1, offset: 4 }}
              md={{ span: 6, offset: 6 }}
              sm={{ span: 6, offset: 4 }}
              xs={{ span: 6, offset: 4 }}
            >
              <Image
                src="/images/gege.png"
                width="100"
                height="100"
                alt="GEGE logo"
              />
            </Col>
            <Col
              className="align-self-center"
              xl={{ span: 6, offset: 0 }}
              lg={{ span: 6, offset: 0 }}
              md={{ span: 9, offset: 3 }}
              sm={{ span: 10, offset: 0 }}
              xs={{ span: 10, offset: 2 }}
            >
              <h1 className={styles.header_title}>GEGE ANUAL - 2020</h1>
            </Col>
          </Row>
          <br />
          <Row>
            <Col
              xl={{ span: 9, offset: 2 }}
              lg={{ span: 9, offset: 2 }}
              md={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
            >
              <h4 className={styles.header_subtitle}>
                Seminário Anual do Grupo de Estudos em Geodésia Espacial
              </h4>
            </Col>
            <Col
              xl={{ span: 9, offset: 2 }}
              lg={{ span: 9, offset: 2 }}
              md={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
            >
              <h4 className={styles.header_subtitle}>
                Annual Seminar of the Space Geodesy Study Group
              </h4>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Navbar expand="lg" variant="dark" className={styles.nav_menu}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Navbar.Brand href="https://youtube.com/playlist?list=PLuSdrjBd8vbUkxjNtdsFbw2y1SMX7yTba" target="_blank">
                <Badge variant="danger">
                  <RiRadioButtonLine /> Online
                </Badge>
              </Navbar.Brand>
              <Nav.Item>
                <Nav.Link href="#lectures">
                  Palestrantes Convidados/Invited Speakers
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#schedule">Programação/Program</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#info">Informações/Information</Nav.Link>
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
                    e UFU.
                    <br />
                    Annual seminar with lectures by invited researchers and
                    professors and researchers who participate in the meetings
                    of GEGE, involving UNESP PP, UFPR, UFPE, UFRGS and UFU.
                  </p>
                  <br />
                  <Card.Title>LINK PARA LIVE/LINK TO LIVE</Card.Title>
                  <Button variant="danger" className={styles.live_button}>
                    <a
                      href="https://youtube.com/playlist?list=PLuSdrjBd8vbUkxjNtdsFbw2y1SMX7yTba"
                      className={styles.youtube_channel}
                      target="_blank"
                    >
                      <RiRadioButtonLine /> Online
                    </a>
                  </Button>
                  <br />
                  <br />
                  <Card.Title>LINK PARA CERTIFICADOS</Card.Title>
                  <a href="https://forms.gle/ZQeNBEcu65FcyRX29" target="_blank">
                    Formulário participação/Participation Form
                  </a>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>O GEGE/THE GEGE</Card.Title>
                  <p className={styles.card_text}>
                    O grupo tem por objetivo discutir assuntos ligados com a
                    Geodésia, envolvendo GPS, GLONASS, Beidou/Compass e Galileo,
                    bem como os referenciais geodésicos envolvidos em suas
                    realizações e no Sistema Geodésico Brasileiro (SGB). Fazem
                    parte ainda estudos relativos com as influências que afetam
                    o sinal no seu trajeto entre o satélite e o receptor, bem
                    como suas aplicações em sensoriamento remoto Geodésico.
                    <br />
                    The group aims to discuss issues related to Geodesy,
                    involving GPS, GLONASS, Beidou/Compass and Galileo, as well
                    as the geodetic references involved in their realizations
                    (frames) and the Brazilian Geodetic System (SGB). There are
                    also studies related to the influences that affect the
                    signal in its path between the satellite and the receiver,
                    as well as its applications in Geodetic Remote Sensing.
                  </p>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>DATA E LOCAL/DATE AND PLACE</Card.Title>
                  <p>Data/Date:</p>
                  <p>
                    <strong>18 de Dezembro de 2020</strong>
                    <br />
                    <strong>Início às 9h00 - Horário de Brasília</strong>
                  </p>
                  <p>
                    <strong>December 18, 2020</strong>
                    <br />
                    <strong>Starts at 9:00 am - BRT (UTC-03:00)</strong>
                  </p>
                  <p>Local/Place:{"   "}</p>
                  <Button variant="danger" className={styles.live_button}>
                    <a
                      href="https://www.youtube.com/channel/UCdQYUhUNS6odJnKLFB7kZPQ"
                      className={styles.youtube_channel}
                      target="_blank"
                    >
                      <IoLogoYoutube /> Canal do GEGE no YouTube
                    </a>
                  </Button>
                  <br />
                  <br />
                  <Card.Title>MAIS/MORE</Card.Title>
                  <YouTube video="dMAjeueLm3w" />
                  <br />
                  <br />
                  <a
                    href="https://www.fct.unesp.br/#!/pesquisa/grupos-de-estudo-e-pesquisa/gege/home"
                    target="_blank"
                  >
                    Site do GEGE/GEGE Website
                  </a>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3 id="lectures">
              <IoMdMicrophone /> Palestrantes Convidados/Invited Speakers
            </h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="list-unstyled">
              <Speakers
                imagePath="/images/peter_teunissen.jpg"
                lectureTitle="PPP and PPP-RTK: Principles and Methods"
                speakerName="PETER TEUNISSEN (Delft University of Technology)"
                lectureStart="09h15"
                lectureEnd="10h15"
              />
              <br />
              <Speakers
                imagePath="/images/natali_caccioppoli.jpg"
                lectureTitle="PEGASUS: DFMC (Dual- Frequency Multi-Constellation) GBAS
                evolutions"
                speakerName="NATALI CACCIOPPOLI (Eurocontrol)"
                lectureStart="10h20"
                lectureEnd="11h20"
              />
              <br />
              <Speakers
                imagePath="/images/manuel_pajares.jpg"
                lectureTitle="New contributions to the detection of geophysical and
                astronomical signals with GNSS"
                speakerName="MANUEL HERNÁNDEZ-PAJARES (UPC - Polytechnical University of
                  Catalunya)"
                lectureStart="11h25"
                lectureEnd="12h30"
              />
            </ul>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3 id="schedule">
              <IoIosCalendar /> Programação/Program (18/12/2020)
            </h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>
                    <IoIosTime />
                  </th>
                  <th>Palestras/Lectures</th>
                  <th>Apresentadores/Speakers</th>
                </tr>
              </thead>
              <tbody>
                {allEvents.map(({ lectureName, speakerName, hour }) => (
                  <tr key={hour}>
                    <td>{hour}</td>
                    <td style={{ verticalAlign: "middle" }}>{lectureName}</td>
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
              <IoMdCheckmarkCircle /> Informações/Information
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
                <Badge variant="danger">
                  <a
                    href="https://youtube.com/playlist?list=PLuSdrjBd8vbUkxjNtdsFbw2y1SMX7yTba"
                    className={styles.youtube_channel}
                    target="_blank"
                  >
                    <RiRadioButtonLine /> Online
                  </a>
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
              <li>
                Serão emitidos certificados de participação para o evento, que
                serão distribuídos a partir de cadastro em um formulário
              </li>
              <li>
                O link para o formulário de indicação de participação no
                seminário anual, e que será utilizado para emissão do
                certificado de participação, será divulgado aqui no site do
                evento e na descrição da live. O correto preenchimento do
                formulário é de inteira responsabilidade do participante
              </li>
              <li>
                Link para certificados:{" "}
                <a href="https://forms.gle/ZQeNBEcu65FcyRX29">
                  Formulário participação
                </a>
              </li>
              <li>The event is free and open to the community</li>
              <li>
                The lectures/presentations will be broadcast live on the GEGE
                YouTube channel
              </li>
              <li>
                The link to live:{" "}
                <Badge variant="danger">
                  <a
                    href="https://youtube.com/playlist?list=PLuSdrjBd8vbUkxjNtdsFbw2y1SMX7yTba"
                    className={styles.youtube_channel}
                    target="_blank"
                  >
                    <RiRadioButtonLine /> Online
                  </a>
                </Badge>{" "}
              </li>
              <li>
                The questions to the speakers should be asked in the live chat
                on YouTube and will be read in due course
              </li>
              <li>
                When asking the question, inform your name, the speaker you want
                to ask, and the questioning
              </li>
              <li>
                Certificates of participation will be issued for the event,
                which will be distributed from registration on a form
              </li>
              <li>
                The link to the form for indicating participation in the annual
                seminar, which will be used to issue the certificate of
                participation, will be disclosed here on the event website and
                in the description of the live. Correct completion of the form
                is the sole responsibility of the participant
              </li>
              <li>
                Link to certificates:{" "}
                <a href="https://forms.gle/ZQeNBEcu65FcyRX29">
                  Participation Form
                </a>
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

        <div className="d-none d-md-block d-sm-none">
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
                    src="/images/ufu.png"
                    alt="UFU"
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
                    src="/images/ufpe.png"
                    alt="UFPE"
                    width="200"
                    height="100"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="d-sm-block d-md-none">
          <Row>
            <Col>
              <h5>Realização/Realization:</h5>
            </Col>
          </Row>
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
          <br />
          <Row>
            <Col>
              <h5>Apoio/Support:</h5>
            </Col>
          </Row>
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
          <br />
          <Row>
            <Col>
              <h5>Colaboração/Collaboration:</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                src="/images/unesp.png"
                alt="Unesp"
                width="100"
                height="100"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src="/images/ufu.png" alt="UFU" width="200" height="100" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                src="/images/ufrgs.png"
                alt="UFRGS"
                width="100"
                height="100"
              />
            </Col>
          </Row>
          <Row>
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
                src="/images/ufpe.png"
                alt="UFPE"
                width="200"
                height="100"
              />
            </Col>
          </Row>
        </div>
      </Container>
      <br />
      <Container fluid>
        <Row>
          <Col>
            <div className={styles.powered}>
              Developed by: <a href="https://biazza.vercel.app/">Biazza</a>
            </div>
          </Col>
        </Row>
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
