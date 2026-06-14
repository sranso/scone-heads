import type { MouseEvent } from "react";

import styles from "../styles/Merch.module.css";

type MerchProps = {
  images: string | string[];
  description: string;
  alt: string;
};

const Merch = ({ images, description, alt }: MerchProps) => {
  const isCarousel = Array.isArray(images);
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // e.preventDefault();
  };
  return (
    <div className={styles.merch}>
      {isCarousel ? (
        <div className={styles.slider}>
          <div className={styles.slides}>
            {images.map((img, i) => (
              <img
                alt={alt}
                className={styles.carouselImg}
                id={`slide-${i + 1}`}
                key={`img-${img}`}
                src={img}
              />
            ))}
          </div>
          {images.map((img, i) => (
            <a href={`#slide-${i + 1}`} onClick={handleClick} key={`a-${img}`}>
              {i + 1}
            </a>
          ))}
        </div>
      ) : (
        <img alt={alt} src={images} className={styles.img} />
      )}
      <p>{description}</p>
    </div>
  );
};

export default Merch;
