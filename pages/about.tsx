import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  summary: string;
};

const team: TeamMember[] = [
  {
    name: "Nan Ransohoff",
    role: "Co-founder",
    image: "/team-nan.jpg",
    summary: "A short summary about Nan goes here.",
  },
  {
    name: "Sarah Ransohoff",
    role: "Co-founder",
    image: "/team-sarah-ransohoff.jpg",
    summary: "A short summary about Sarah goes here.",
  },
  {
    name: "Sarah Sherman",
    role: "Co-founder",
    image: "/team-sarah-sherman.jpg",
    summary: "A short summary about Sarah goes here.",
  },
  {
    name: "Rebecca Lissner",
    role: "Co-founder",
    image: "/team-rebecca.jpg",
    summary: "A short summary about Rebecca goes here.",
  },
];

const About = () => (
  <Layout>
    <div className={styles.intro}>
      <h2>Who we are</h2>
      <p>For scone lovers, by scone lovers. Meet the heads behind the scones.</p>
    </div>

    <div className={styles.grid}>
      {team.map((member) => (
        <div className={styles.member} key={member.name}>
          <div className={styles.photo}>
            {member.image && <img src={member.image} alt={member.name} />}
          </div>
          <h3 className={styles.name}>{member.name}</h3>
          <p className={styles.role}>{member.role}</p>
          <p className={styles.summary}>{member.summary}</p>
        </div>
      ))}
    </div>
  </Layout>
);

export default About;
