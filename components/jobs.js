
const Job = (props) => {
  const text = props.work.text

  return (
    <div className="container container__row container__row--v-center u-mar-v-lg flex-column-mobile">
      <div className="col-4 col-12@md u-t-cen u-bor-r u-pad-v-0@md u-pad-v-xl@md-min u-pad-b-md u-pad-h-lg@md-min u-t-r u-t-l@md u-pad-h-sm@md">
        <a href={props.work.link}>
          <h2>{props.work.companyName}</h2>
          <p className="h3">{props.work.position}</p>
          <p className="h4">{props.work.dates}</p>
        </a>
      </div>
      <div className="col-8 col-12@md u-pad-l-lg u-pad-l-sm@md u-pad-r-sm@md container__row--v-center">
        {text.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  )
}
  
export default Job;