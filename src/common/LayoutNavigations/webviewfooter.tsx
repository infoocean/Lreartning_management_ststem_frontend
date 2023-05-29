import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import styles from "../../styles/webviewHeaderFooter.module.css";


const WebViewFooter = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" className={styles.appBarFooterCss}>
                <Container maxWidth="lg">
                    <Toolbar className={styles.appBarFooterToolbarCss}>
                        <Box
                            component="img"
                            src="/Images/company_logo.png"
                            width={"180px"}
                            height={"50px"}
                            sx={{ display: { xs: "block", sm: "block" } }}
                            alt="Company logo"
                        />
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "block", md: "flex" } }}>
                            <Typography
                                variant="body2"
                                className={styles.windowFullWidthNameAlignfooter}
                            >
                                Term & Conditions
                            </Typography>
                            <Typography
                                variant="body2"
                                className={styles.windowFullWidthNameAlignfooter}
                            >
                                Privacy Policy
                            </Typography>
                            <Typography
                                variant="body2"
                                className={styles.windowFullWidthNameAlignfooters}
                            >
                                @2023 LMS. All Right Reserved
                            </Typography>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>

        </Box>
    );
}

export default WebViewFooter;