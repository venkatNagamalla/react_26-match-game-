import './index.css'

const ImageItem = props => {
  const {imageDetails, checkingImages} = props
  const {imageUrl, thumbnailUrl} = imageDetails

  const onImageClick = () => {
    checkingImages(imageUrl)
  }

  return (
    <li className="list-element">
      <button onClick={onImageClick} className="button" type="button">
        <img className="image-sizing" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
