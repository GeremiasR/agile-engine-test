import { useState, useEffect } from "react";
import { auth, getImages, getImage } from "../services/agileEngine";
import { ImageItem } from "../components/ImageItem";
import { Pagination } from "../components/Pagination";
import { Photo } from "../components/Photo";
import Modal from "react-bootstrap/Modal";

export const Gallery = (props) => {
  const [photos, setPhotos] = useState({
    hasMore: false,
    page: 1,
    pageCount: 0,
    pictures: [],
  });
  const [modal, setModal] = useState(false);
  const [photo, setPhoto] = useState("");

  const getPhotos = async (page = 1) => {
    let token = localStorage.getItem("token");
    if (!token) {
      const data = authApi();
      if (data.auth) {
        localStorage.setItem("token", data.token);
        let data = await getImages(token, page);
        setPhotos(data);
      } else {
        alert("Can't get token access");
      }
    } else {
      let data = await getImages(token, page);
      setPhotos(data);
    }
  };
  const photoView = async (id) => {
    let token = localStorage.getItem("token");
    setModal(true)
    let pic = await getImage(token, id);
    setPhoto(pic);
  };

  const authApi = async () => {
    return await auth();
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const photoGallery = () =>
    photos.pictures.map((photo) => (
      <ImageItem
        source={photo.cropped_picture}
        key={photo.id}
        show={() => photoView(photo.id)}
      />
    ));

  return (
    <div className="container">
      <div className="row text-center text-lg-left">{photoGallery()}</div>
      <div className="d-flex flex-column align-items-center ">
        <Pagination
          paginate={getPhotos}
          page={photos.page}
          hasMore={photos.hasMore}
        />
      </div>
      <Modal
        size="lg"
        show={modal}
        onHide={() => setModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
            <Photo image={photo}/>
        </Modal.Body>
      </Modal>
    </div>
  );
};
