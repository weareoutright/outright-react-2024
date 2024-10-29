"use client";

import ClientWorkPageLayout from "../ClientWorkPageLayout";
import { useParams } from "next/navigation";
import PROJECT_SLUGS from "../client-work-pages/index.js";

const ClientWorkPage = () => {
  const { slug } = useParams();

  const currentPage = PROJECT_SLUGS[`/our-work/${slug}`].module;

  return <ClientWorkPageLayout clientProject={currentPage} />;
};

export default ClientWorkPage;
