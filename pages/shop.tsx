import Layout from "../components/Layout";
import Merch from "../components/Merch";
import styles from "../styles/Merch.module.css";

const Shop = () => (
  <Layout>
    <div className="pageIntro">
      <h2>Shop the Scone</h2>
      <p>Limited-edition goods for the scone-obsessed.</p>
    </div>
    <div className={styles.wrapper}>
      <Merch
        alt="Tea towel"
        description="Tea Towel, $40 for two (shipping included). Venmo @sranso."
        images={[
          "/tea-towel-sexy.jpg",
          "/tea-towel-full.jpg",
          "/tea-towel-jar.jpg",
        ]}
      />
      <Merch
        alt="Scandle"
        description="Scandle, $600. Limited edition."
        images="/scandle.jpg"
      />
      <Merch
        alt="Scerfume"
        description="Scerfume, $880. Limited edition."
        images="/scerfume.jpg"
      />
    </div>
  </Layout>
);

export default Shop;
