"use client";

import ClientWorkPageLayout from "../ClientWorkPageLayout";
import { useParams } from "next/navigation";
import { EDF_VISION_2023 } from "../client-work-pages/edf-vision-2023";

const ClientWorkPage = () => {
  const { slug } = useParams();

  const projects = {
    "edf-vision-2023": EDF_VISION_2023,
  };

  return <ClientWorkPageLayout clientProject={projects[slug]} />;
};

export default ClientWorkPage;
