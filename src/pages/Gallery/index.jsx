import "./index.css";
import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_4.svg";
import { useEffect, useState } from "react";


const Gallery = () => {
  const galleryLength = 15;
 const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      try {
        const importedImages = [];
        for (let i = 1; i <= galleryLength; i++) {
          const image = await import(`../../assets/images/gallery${i}.svg`);
          importedImages.push(image.default);
        }
        setImages(importedImages);
      } catch (error) {
        console.error("Error loading images", error);
      }
    };

    importImages();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Welcome to our Gym's Visual Showcase! Immerse yourself in the vibrant
        energy and dedication that defines our fitness community through our
        gallery header. 
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
