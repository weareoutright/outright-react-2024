const ServicesPane = () => {
  return (
    <ul className="ServicesPane services-list no-list row" id="pane-services">
      <li className="service col-md-4">
        <h2>At the core</h2>
        <div className="service-content">
          <strong>Strategy</strong>
          <p>
            The core of who you are and what you do begins with your foundation.
            From messaging and content strategy, to social media ideation, to
            overall campaign and brand development, we&apos;re ready to help you
            re-plant your roots, creating opportunities for accelerated growth.
          </p>
        </div>
      </li>

      <li className="service col-md-4">
        <h2>On the surface</h2>
        <div className="service-content">
          <strong>Design</strong>
          <p>
            Look good, feel good. Whether you&apos;re stepping out into the
            world with a new brand identity or revitalizing your services
            through motion and video production, our goal is to help you align
            your vision with your visuals so that you can confidently (and
            stylishly) leave your mark.
          </p>
        </div>
      </li>

      <li className="service col-md-4">
        <h2>Above and beyond</h2>
        <div className="service-content">
          <strong>Digital</strong>
          <p>
            Let&apos;s get{" "}
            <span style={{ textDecoration: "line-through" }}>physical</span>{" "}
            digital. Our digital advertising and marketing, UX/UI design, web
            development, and cutting-edge interactive data visualizations will
            show you first-hand that the sky is not the limit. We&apos;re ready
            to transform your brand&apos;s narrative in ways beyond your
            imagination.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default ServicesPane;
