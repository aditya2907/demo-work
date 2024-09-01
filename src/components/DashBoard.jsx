import React, { useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';
import { Badge, createTheme, Paper, Tab, Tabs } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Brightness7, Brightness4, AccountCircle, Mail, Notifications } from '@mui/icons-material';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppFooter from './AppFooter';
import MainContent from './MainContent';
import Report from './Report';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;
const pages = ['Products', 'Pricing', 'Blog'];

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	variants: [
		{
			props: ({ open }) => open,
			style: {
				marginLeft: drawerWidth,
				width: `calc(100% - ${drawerWidth}px)`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
		},
	],
}));

export default function DashBoard() {
	const [open, setOpen] = useState(true);
	const [dark, setDark] = useState(true);


	const darkTheme = useMemo(() => createTheme({
		palette: {
			mode: dark ? 'dark' : 'light'
		}
	}), [dark])

	return (
		<ThemeProvider theme={darkTheme}>
			<Box sx={{ display: 'flex', flexGrow: 1 }} >
				<CssBaseline />
				<AppBar position="fixed" open={open} >
					<Toolbar >
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={() => setOpen(true)}
							edge="start"
							sx={[
								{
									marginRight: 5,
								},
								open && { display: 'none' },
							]}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							noWrap
							component="a"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							RDV
						</Typography>
						<Box sx={{ flexGrow: 1 }} />
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<IconButton
								onClick={() => setDark(!dark)}
								color="inherit"
								size="large"
							>
								{dark ? <Brightness7 /> : <Brightness4 />}
							</IconButton>
						</Box>
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<IconButton size="large" aria-label="show 4 new mails" color="inherit">
								<Badge badgeContent={4} color="error">
									<Mail />
								</Badge>
							</IconButton>
							<IconButton
								size="large"
								aria-label="show 17 new notifications"
								color="inherit"
							>
								<Badge badgeContent={17} color="error">
									<Notifications />
								</Badge>
							</IconButton>
							<IconButton
								size="large"
								edge="end"
								aria-label="account of current user"
								// aria-controls={menuId}
								aria-haspopup="true"
								// onClick={handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</Box>
						<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="show more"
								// aria-controls={mobileMenuId}
								aria-haspopup="true"
								// onClick={handleMobileMenuOpen}
								color="inherit"
							>
								<MoreIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
				<SideBar {...{ open, setOpen }} />
				<Box sx={{ flexGrow: 1, p: 3 }}>
					<Outlet /> {/* Renders the matched child route */}
				</Box>
				{/* <MainContent /> */}

				{/* <Report/> */}

				<AppFooter />
			</Box >
		</ThemeProvider>
	);
}
