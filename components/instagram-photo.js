

const InstagramImage = ({image}) => (
  
  <div className="c-instagram">
    <div className="c-instagram--post" style={{backgroundImage: `url(${image.images.standard_resolution.url})`}}>
    </div>
    <div className="c-instagram--text u-pad-h-sm u-pad-v-sm u-pad-h-lg@md-min u-t-cen">
      {image.caption.text}
    </div>
  </div>
);
  
export default InstagramImage;