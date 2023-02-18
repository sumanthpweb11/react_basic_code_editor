import { Box, styled } from "@mui/material";
import React, { useContext } from "react";
import Editor from "./Editor";
import useMediaQuery from "@mui/material/useMediaQuery";

import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 60vh;
`;

const CodeComponent = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container
      sx={{
        flexDirection: { xs: "column", md: "row" },
        height: { xs: "100vh", md: "60vh" },
        overflowY: { xs: "scroll" },
      }}
    >
      <Editor
        value={html}
        onChange={setHtml}
        color="#ff3c41"
        icon="/"
        heading="HTML"
      />
      <Editor
        value={css}
        onChange={setCss}
        color="#0eb3ff"
        icon="*"
        heading="CSS"
      />
      <Editor
        value={js}
        onChange={setJs}
        color="#fcd000"
        icon="()"
        heading="Javascript"
      />
    </Container>
  );
};

export default CodeComponent;
