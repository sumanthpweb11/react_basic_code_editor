import { useContext, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  height: 34vh;
`;

const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);
  const srcCode = `
  
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js} </script>
  </html>
  
  
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container>
      <iframe
        width="100%"
        height="100%"
        frameBorder={0}
        sandbox="allow-scripts"
        title="Output"
        srcDoc={src}
      />
    </Container>
  );
};

export default Result;
