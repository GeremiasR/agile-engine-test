export const ImageItem = (props) => (
  <div className="col-lg-3 col-md-4 col-6" onClick={props.show}>
    <a href="#" className="d-block mb-4 h-100">
      <img
        className="img-fluid img-thumbnail"
        src={props.source}
        alt=""
      />
    </a>
  </div>
);
