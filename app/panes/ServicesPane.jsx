const ServicesPane = () => {
  return (
    <ul className="ServicesPane services-list no-list row" id="pane-services">
      <li className="service col-md-12">
        <h2>Strategy</h2>
        <div className="service-content">
          <p>
            Brand strategy | Campaign concepting | Media planning & buying | Marketing strategy |
            Audience research
          </p>
        </div>
      </li>

      <li className="service col-md-12">
        <h2>Design</h2>
        <div className="service-content">
          <p>Branding | Graphic design | Motion & animation | Campaigns | Events & experiential</p>
        </div>
      </li>

      <li className="service col-md-12">
        <h2>Digital</h2>
        <div className="service-content">
          <p>
            UX/UI design | Content strategy | Website development | Information Design | Microsites
          </p>
        </div>
      </li>
    </ul>
  );
};

export default ServicesPane;
