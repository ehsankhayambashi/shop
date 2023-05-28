import {
  alpha,
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Link,
  Popover,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { SiCoffeescript } from "react-icons/si";
import { MdSearch, MdCoffeeMaker } from "react-icons/md";
import { FiShoppingCart, FiUser, FiPhone } from "react-icons/fi";
import { VscTriangleDown } from "react-icons/vsc";
import { GiHamburgerMenu, GiGlassShot } from "react-icons/gi";
import { GiCoffeeBeans, GiTeapotLeaves } from "react-icons/gi";
import { useState, useEffect } from "react";
import { navLinks, createCategoryList, theme } from "./../../data/dummy";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import Cart from "../Cart/Cart";
import useClasses from "../../utils/useClasses";
import Search from "../Search/Search";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
});

const StyledBox = styled(Box)(({ theme }) => ({
  display: "none",
  marginTop: "10px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledButtonNav = styled(Button)(({ theme }) => ({
  gap: 10,
  border: 0,
  alignItems: "center",
  fontSize: "18px",
  padding: 0,

  // color: theme.palette.secondary.main,
  "& .MuiButton-startIcon": { marginRight: "0px" },
}));

function Navbar() {
  const [subCats, setSubCats] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartAnchorEl, setCartAnchorEl] = useState(null);
  const [eventCart, setEventCart] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [event, setEvent] = useState(null);
  const [isShowCart, setIsShowCart] = useState(true);
  const categories = createCategoryList(navLinks);
  const location = useLocation();
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    if (location.pathname === "/cart") {
      setIsShowCart(false);
    } else {
      setIsShowCart(true);
    }
  }, [location.pathname]);

  const handleCartClick = (e) => {
    setCartAnchorEl(e.currentTarget);
    setEventCart(e.currentTarget);
  };
  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  const handleClick = (event, children) => {
    setAnchorEl(event.currentTarget);
    setSubCats(children);
    setEvent(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        position={biggerThanMd ? "sticky" : "static"}
        top={0}
        height="88px"
        display="flex"
        zIndex={1}
        sx={{ flexGrow: 1 }}
      >
        <AppBar position={biggerThanMd ? "sticky" : "static"} color="primary">
          <Container maxWidth="xl">
            <StyledToolbar disableGutters={true}>
              <Box
                justifyContent="space-between"
                alignItems="center"
                sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}
              >
                <IconButton
                  size="inherit"
                  color="inherit"
                  sx={{ paddingRight: "0" }}
                  onClick={() => setDrawerOpen(true)}
                >
                  <GiHamburgerMenu />
                </IconButton>
                <Typography variant="h6" component="div">
                  کافه ایستگاه
                </Typography>
                <IconButton size="inherit" color="inherit">
                  <FiPhone />
                </IconButton>
              </Box>
              <Box
                display="flex"
                width="100%"
                mt={1}
                justifyContent="space-between"
              >
                <Box
                  gap={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: { xs: "100%" },
                  }}
                >
                  <Box
                    sx={{ display: { xs: "none", md: "flex" } }}
                    alignItems="center"
                    gap={1}
                  >
                    <SiCoffeescript />
                    <Typography fontWeight="bold" variant="h6" component="div">
                      کافه ایستگاه
                    </Typography>
                  </Box>
                  <Search />
                  {/* <Search>
                    <SearchIconWrapper>
                      <MdSearch />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="جستجو"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search> */}
                </Box>
                <Box display="flex" gap={1}>
                  <IconButton size="inherit" color="inherit" disableRipple>
                    <FiUser />
                    <VscTriangleDown style={{ width: "12px" }} />
                  </IconButton>
                  <Divider orientation="vertical" />
                  <Link
                    to="/cart"
                    component={RouterLink}
                    color="inherit"
                    underline="none"
                  >
                    <IconButton
                      size="inherit"
                      color="inherit"
                      onMouseOver={(e) => handleCartClick(e)}
                      onMouseLeave={handleCartClose}
                    >
                      <Badge
                        badgeContent={1}
                        color="secondary"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                      >
                        <FiShoppingCart />
                      </Badge>
                    </IconButton>
                  </Link>
                </Box>
              </Box>
              <StyledBox>
                {categories.map((category, index) => {
                  if (category.parentId === null) {
                    return (
                      <Link
                        key={index}
                        to={`/search/${category.slug}`}
                        component={RouterLink}
                        color="inherit"
                        underline="hover"
                        sx={{ textUnderlineOffset: "7px" }}
                        onClick={handleClose}
                      >
                        <StyledButtonNav
                          key={index}
                          color="inherit"
                          variant="outlined"
                          startIcon={<GiCoffeeBeans />}
                          onMouseOver={(e) => handleClick(e, category.children)}
                          onMouseLeave={handleClose}
                          sx={
                            index === 0
                              ? { marginRight: "0" }
                              : { marginRight: "20px" }
                          }
                        >
                          {category.name}
                        </StyledButtonNav>
                      </Link>
                    );
                  }
                })}
              </StyledBox>
            </StyledToolbar>
          </Container>
        </AppBar>
        <MegaMenu
          subCats={subCats}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
          event={event}
        />
      </Box>
      <Box>
        <Cart
          setCartAnchorEl={setCartAnchorEl}
          cartAnchorEl={cartAnchorEl}
          eventCart={eventCart}
          isShowCart={isShowCart}
        />
      </Box>
      {/* <Box sx={{ width: "100%", height: "300px" }}>
        <Slider />
      </Box> */}
      {/* <SideMenu
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        categories={categories}
      /> */}
    </>
  );
}

export default Navbar;
