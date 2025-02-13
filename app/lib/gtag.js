export const GA_TRACKING_ID = "G-JF5377DG23"; // Replace with your actual ID

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
