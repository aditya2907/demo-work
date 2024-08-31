import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';

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


const MUI_X_PRODUCTS = [
	{
		id: 'grid',
		label: 'Data Grid',
		children: [
			{ id: 'grid-community', label: '@mui/x-data-grid' },
			{ id: 'grid-pro', label: '@mui/x-data-grid-pro' },
			{ id: 'grid-premium', label: '@mui/x-data-grid-premium' },
		],
	},
	{
		id: 'pickers',
		label: 'Date and Time Pickers',
		children: [
			{ id: 'pickers-community', label: '@mui/x-date-pickers' },
			{ id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
		],
	},
	{
		id: 'charts',
		label: 'Charts',
		children: [{ id: 'charts-community', label: '@mui/x-charts' }],
	},
	{
		id: 'tree-view',
		label: 'Tree View',
		children: [{ id: 'tree-view-community', label: '@mui/x-tree-view' }],
	},
];



export default function SideList({ open, setOpen }) {
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
				</List>
				<Divider />
				<Box sx={{ minHeight: 352, minWidth: 250 }}>
					<RichTreeView items={MUI_X_PRODUCTS} />
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Typography sx={{ marginBottom: 2 }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>
				<Typography sx={{ marginBottom: 2 }}>
					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
					eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
					neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
					tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
					sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
					tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
					gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
					et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
					tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
					eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
					posuere sollicitudin aliquam ultrices sagittis orci a.
				</Typography>
			</Box></>
	)
}