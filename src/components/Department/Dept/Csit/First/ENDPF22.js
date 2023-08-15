import React, { useEffect } from 'react';
import './Style.css';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function ENDPF22() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://acrobatservices.adobe.com/view-sdk/viewer.js';
    script.async = true;
    document.body.appendChild(script);

    const previewConfig = {
      embedMode: "FULL_WINDOW",
      showAnnotationTools: false,
      showThumbnails: false,
      defaultViewMode: "FIT_PAGE"
   }

   const clientIds = [
    "f76e09b221564ab289ac629f8736a72e",
    "843b818c20d84d24ba0aad60939bb02e"
  ];

  const randomizedClientIds = shuffleArray(clientIds);

  script.onload = () => {
    document.addEventListener("adobe_dc_view_sdk.ready", function () {
      const adobeDCView = new window.AdobeDC.View({ clientId: randomizedClientIds[0], divId: "adobe-dc-view" });
        adobeDCView.previewFile({
          content: { location: { url: "https://cu-studentcorner.in/csit/first/endpf22.pdf" } },
          metaData: { fileName: "endpf22.pdf" }
        }, previewConfig );
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
        <h2 id="title">Programming Fundamentals using C/C++ (2022)</h2>
        <div id="adobe-dc-view"></div>
    </div>
  )
}
