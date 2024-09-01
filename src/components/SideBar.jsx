import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import StoreIcon from '@mui/icons-material/Store';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LabelIcon from '@mui/icons-material/Label';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		variants: [
			{
				props: ({ open }) => open,
				style: {
					...openedMixin(theme),
					'& .MuiDrawer-paper': openedMixin(theme),
				},
			},
			{
				props: ({ open }) => !open,
				style: {
					...closedMixin(theme),
					'& .MuiDrawer-paper': closedMixin(theme),
				},
			},
		],
	}),
);


export default function SideBar({ open, setOpen }) {
	return (
		<>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton onClick={() => setOpen(false)}>
						<ChevronLeft />
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{['Home', 'About', 'Contact', 'Drafts'].map((text) => (
						<ListItem key={text} disablePadding sx={{ display: 'block' }} component={Link} to={`/${text}`} >
							<ListItemButton							
								sx={[
									{
										minHeight: 48,
										px: 2.5,
									},
									open
										? {
											justifyContent: 'initial',
										}
										: {
											justifyContent: 'center',
										},
								]}
							>
								<ListItemIcon
									sx={[
										{
											minWidth: 0,
											justifyContent: 'center',
										},
										open
											? {
												mr: 3,
											}
											: {
												mr: 'auto',
											},
									]}
								>
									<LabelIcon />
								</ListItemIcon>
								<ListItemText
									primary={text}
									sx={[
										open
											? {
												opacity: 1,
											}
											: {
												opacity: 0,
											},
									]}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem key={text} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								href={`/${text}`}
								sx={[
									{
										minHeight: 48,
										px: 2.5,
									},
									open
										? {
											justifyContent: 'initial',
										}
										: {
											justifyContent: 'center',
										},
								]}
							>
								<ListItemIcon
									sx={[
										{
											minWidth: 0,
											justifyContent: 'center',
										},
										open
											? {
												mr: 3,
											}
											: {
												mr: 'auto',
											},
									]}
								>
									{index % 2 === 0 ? <CreditScoreIcon /> : <StoreIcon />}
								</ListItemIcon>
								<ListItemText
									primary={text}
									sx={[
										open
											? {
												opacity: 1,
											}
											: {
												opacity: 0,
											},
									]}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			
		</>
	)
}