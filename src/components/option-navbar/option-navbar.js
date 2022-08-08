import "./option-navbar.scss";
import logo from "../../assets/imgs/logo.png";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import profilePhoto from "../../assets/imgs/reading.png";

const OptionNavBar = () => {
	const navigate = useNavigate();
	const signOut = () => {
		localStorage.removeItem("data");
		navigate("/");
	};
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<AppBar position="fixed" sx={{ backgroundColor: "#fff" }} enableColorOnDark>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<figure sx={{ display: { xs: "none", md: "flex" } }}>
						<img className="logo" src={logo} alt="" />
					</figure>
					<Box sx={{ ml: "auto" }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<img
									className="profilePhotoOptionPage"
									src={profilePhoto}
									alt=""
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
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
							onClose={handleCloseUserMenu}
						>
							<MenuItem onClick={handleCloseUserMenu}>
								<Typography textAlign="center">
									<Link to="/profile">Profile</Link>
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseUserMenu}>
								<Typography onClick={() => signOut()} textAlign="center">
									Sign Out
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default OptionNavBar;
