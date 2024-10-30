const ServicesPane = () => {
  return (
    <ul className="ServicesPane services-list no-list row" id="pane-services">
      <li className="service col-md-12">
        <h3>Strategy</h3>
        <div className="service-content">
          <p>
            Brand strategy | Campaign concepting | Media planning & buying |
            Audience research
          </p>
        </div>
      </li>

      <li className="service col-md-12">
        <h3>Design</h3>
        <div className="service-content">
          <p>Branding | Graphic design | Motion & animation | Campaigns</p>
        </div>
      </li>

      <li className="service col-md-12">
        <h3>Digital</h3>
        <div className="service-content">
          <p>
            UX/UI design | Website development | Data visualization | Microsites
          </p>
        </div>
      </li>
    </ul>
  );
};

export default ServicesPane;
