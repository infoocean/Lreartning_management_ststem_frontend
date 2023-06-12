import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import styles from "../../styles/webviewHeaderFooter.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { capitalizeFirstLetter } from "../CapitalFirstLetter/capitalizeFirstLetter";
import { AccountCircle } from "@mui/icons-material";
import { HandleLogout } from "@/services/auth";

export default function WebViewNavbar() {
    const [userData, setUserData] = React.useState<any>("");
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const router = useRouter();
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    let textcolor = "#E8661B !important";
    let path = router?.pathname;
    let setAboutColor = path === "/" ? textcolor : "";
    let setCoursesColor = path.includes("courses") || path.includes("coursedetails") ? textcolor : "";
    let setsubscribeplan = path.includes("subscribeplan") ? textcolor : "";


    React.useEffect(() => {
        let localData: any;
        if (typeof window !== "undefined") {
            localData = window.localStorage.getItem("userData");
        }
        if (localData) {
            setUserData(JSON.parse(localData));
        }
    }, []);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => router.push("/")}>
                <Typography sx={{
                    color: setAboutColor,
                }}>About</Typography>
            </MenuItem>
            <MenuItem onClick={() => router.push("/courses")}>
                <Typography sx={{
                    color: setCoursesColor,
                }}>Course</Typography>
            </MenuItem>
            <MenuItem onClick={() => router.push("/subscribeplan")}>
                <Typography sx={{ color: setsubscribeplan }}> Plans</Typography>
            </MenuItem>
            <MenuItem>
                {userData ? (<Typography >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Typography>
                ) :
                    <Link href="/login" >
                        <Typography
                            variant="body2"
                            className={styles.windowFullWidthNameAlign}
                        > Login </Typography>
                    </Link>}
            </MenuItem>
        </Menu>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={styles.appBarCss}>
                <Container maxWidth="lg">
                    <Toolbar className={styles.appBarToolbarCss}>
                        <Link href="/" >
                            <Box
                                component="img"
                                src="/Images/company_logo.png"
                                width={"180px"}
                                height={"50px"}
                                sx={{ display: { xs: "block", sm: "block" } }}
                                alt="Company logo"
                            />
                        </Link>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <Link href="/" >
                                <Typography
                                    variant="body2"
                                    className={styles.windowFullWidthNameAlign}
                                    sx={{
                                        color: setAboutColor,
                                    }}
                                >
                                    About
                                </Typography>
                            </Link>
                            <Link href="/courses" >
                                <Typography
                                    variant="body2"
                                    className={styles.windowFullWidthNameAlign}
                                    sx={{
                                        color: setCoursesColor,
                                    }}
                                >
                                    Course
                                </Typography>
                            </Link>
                            <Link href="/subscribeplan" >
                                <Typography
                                    variant="body2"
                                    className={styles.windowFullWidthNameAlign}
                                    sx={{ color: setsubscribeplan }}
                                >Plans</Typography>
                            </Link>
                            {userData ? (<Typography sx={{ marginLeft: "40px" }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem >Hii, {capitalizeFirstLetter(userData?.first_name)}</MenuItem>
                                    <Link href="/user/profile" ><MenuItem >Profile </MenuItem></Link>
                                    <Link href="/user/dashboard" ><MenuItem >Dashboard</MenuItem> </Link>
                                    <MenuItem onClick={HandleLogout}>
                                        <Typography>Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </Typography>
                            ) :
                                <Link href="/login" >
                                    <Typography
                                        variant="body2"
                                        className={styles.windowFullWidthNameAlign}
                                    > Login </Typography>
                                </Link>}
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
        </Box >
    );
}
