import type { ReactNode } from "react";

import Layout from "../components/Layout";
import styles from "../styles/Faq.module.css";

type Faq = {
  question: string;
  answer: ReactNode;
};

const faqs: Faq[] = [
  {
    question: "What is sconing?",
    answer:
      "Sconing is the technique of repeatedly approaching a bakery known for its scones but resisting entry at the very last moment. Once this is done 3-4 times, entry is finally made and scones are consumed. The result is a much deeper, more sustained ecstasy upon eating. This works just as well for both savory and sweet scones.",
  },
  {
    question: "Who loves scones more, Timmy or Kylie?",
    answer:
      "Our general policy is to avoid commenting on active public discourse, particularly when it has ramifications for geopolitics and national security. However, given the fervor of this particular debate, we are unable to stand by in silence. Kylie. Her guest house’s pool house is filled to the hilt with cheddar scallion and traces of currant can be found in her viral breast implant formula.",
  },
  {
    question: "What does Jalen Brunson eat for breakfast?",
    answer: "Scones",
  },
  {
    question: "Is context engineering the new prompt engineering?",
    answer: (
      <>
        Absolutely. To learn more, visit{" "}
        <a href="https://sconeheritage.github.io" target="_blank">
          sconeheritage.github.io
        </a>{" "}
        or explore our crumble-ratio repo{" "}
        <a href="https://github.com/sconeheritage/crumble-ratio" target="_blank">
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Who’s your daddy?",
    answer: "Paul Hollywood. Scones are serious fucking business",
  },
];

const Faqs = () => (
  <Layout>
    <div className="pageIntro">
      <h2>FAQs</h2>
      <p>A nice informational read while you enjoy a scone.</p>
    </div>

    <div className={styles.list}>
      {faqs.map((faq) => (
        <div className={styles.item} key={faq.question}>
          <h3 className={styles.question}>{faq.question}</h3>
          <p className={styles.answer}>{faq.answer}</p>
        </div>
      ))}
    </div>
  </Layout>
);

export default Faqs;
