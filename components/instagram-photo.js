

const InstagramImage = ( post ) => (
  <div className="c-instagram">
    <div className="c-instagram--post" style={{backgroundImage: `url(${post.post.images.standard_resolution.url})`}}>

    </div>
    <div className="c-instagram--text u-pad-h-sm u-pad-h-lg@md-min u-t-cen">
        {post.post.caption.text}
    </div>
  </div>
);
  
export default InstagramImage;