import React, { useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideList from './SideList';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import {Brightness7, Brightness4 } from '@mui/icons-material';

const drawerWidth = 240;

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
	const [open, setOpen] = useState(false);
	const [dark, setDark] = useState(false);

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
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							RDV
						</Typography>
						<IconButton
							onClick={() => setDark(!dark)}
							edge="end"
						>
							{dark ? <Brightness7/>: <Brightness4/>}
						</IconButton>
					</Toolbar>
				</AppBar>
				<SideList {...{ open, setOpen }} />
			</Box >
		</ThemeProvider>
	);
}
