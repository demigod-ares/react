import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />; // passed down to child (key provided to make minimum rerender in virtual dom)
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
