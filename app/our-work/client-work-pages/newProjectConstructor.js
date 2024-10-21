class Project {
  constructor({
    hero_bg_img,
    client_full_name,
    project_title,
    tags,
    main_headline,
    bento_top,
    bento_bottom_left,
    bento_bottom_mid,
    bento_bottom_right,
    quote,
    speaker_name,
    speaker_title,
    speaker_org,
    full_width_img,
    client_spotlight,
    project_overview,
    prev_page,
    next_page,
  }) {
    this.hero = {
      hero_bg_img,
      header: {
        client_full_name,
        project_title,
        tags,
      },
    };
    this.main_headline = main_headline;
    this.bento_images = {
      top: bento_top,
      bottom_left: bento_bottom_left,
      bottom_mid: bento_bottom_mid,
      bottom_right: bento_bottom_right,
    };
    this.client_quote = {
      quote,
      speaker: {
        name: speaker_name,
        title: speaker_title,
        org: speaker_org,
      },
    };
    this.full_width_img = full_width_img;
    this.client_spotlight = client_spotlight;
    this.project_overview = project_overview;
    this.prev_page = prev_page;
    this.next_page = next_page;
  }
}

export default Project;
