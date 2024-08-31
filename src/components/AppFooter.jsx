import React from "react";

import { Box, Container, Paper, Typography } from "@mui/material";

const AppFooter = () => {
    return (
        <Paper
            sx={{
                marginTop: 'calc(10% + 60px)',
                width: '100%',
                position: 'fixed',
                bottom: 0,                
            }}
            component="footer" 
            square variant="outlined"
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1
                    }}
                >
                    <div>
                        {/* <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" /> */}
                    </div>
                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" sx={{color: 'inherit'}}>
                        Copyright ©2022. [] Limited
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
};

export default AppFooter;