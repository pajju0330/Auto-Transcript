import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Wcelogo from "../wcelogo.png";
import * as Action from "../../actions/AuthAction";
import { useNavigate } from "react-router-dom";

const pages = ["Home Page", "Add Data"];
const settings = ["Dashboard", "Logout"];

const Appbar = () => {
	const navigate = useNavigate();
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const handleOnclick = () => {
		Action.logOut();
	};
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<AppBar position='static'>
			<Container
				className='nav'
				maxWidth='xxxl'
				sx={{
					py: 1,
				}}>
				<Toolbar disableGutters>
					<img src={Wcelogo} width='50px'></img>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						marginLeft='1rem'
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 500,
							color: "inherit",
							textDecoration: "none",
						}}>
						<span
							onClick={() => {
								localStorage.clear();
							}}>
							Walchand College of Engineering
						</span>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Typography
						variant='h5'
						noWrap
						component='a'
						href=''
						sx={{
							mr: -10,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						WCE
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							alignItems: "center",
						}}>
						{pages.map((page) => (
							<Button
								className='nav-items'
								key={page}
								onClick={() => {
									handleCloseNavMenu();
									page === "Add Data"?navigate(`/admin/home/adddata`):navigate(`/admin/home`);
								}}
								sx={{ color: "white", display: "flex", alignItems: "center" }}>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center' onClick={handleOnclick}>
										{setting}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Appbar;
