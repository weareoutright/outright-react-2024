const paneData = {
  hideTitle: true,
  attributes: {
    id: "contactform",
    containerClasses: ["center"],
    autoheight_responsive: true,
  },
  background: "chartreusewhite",
  order: 7,
  waypoint: "Contact",
};

const ContactForm = () => {
  return (
    <form noValidate id="form-contact" onSubmit={(e) => e.preventDefault()}>
      <label>
        Hey, I'm
        <input
          name="entry.255908712"
          type="text"
          placeholder="Enter your name"
          required
        />
      </label>
      <label>
        Representing
        <input
          name="company"
          type="text"
          placeholder="Enter your brand"
          required
        />
      </label>
      <label>
        Email me @
        <input
          name="emailAddress"
          type="email"
          placeholder="Enter your email address"
          required
        />
      </label>
      <label>
        I'm looking for
        <textarea
          name="entry.1466566023"
          placeholder="Enter your project details"
          required
        ></textarea>
      </label>
    </form>
  );
};

export default ContactForm;
