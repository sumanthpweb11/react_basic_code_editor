import { AppBar, Toolbar, styled } from "@mui/material";

const StyledAppbar = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

const Header = () => {
  return (
    <StyledAppbar position="static">
      <Toolbar>
        <h3>Basic Code Editor</h3>
      </Toolbar>
    </StyledAppbar>
  );
};

export default Header;
