import appState from "@builder.io/app-context";
import { Builder } from "@builder.io/react";
import React from "react";
import "@emotion/core";
import { Button, Typography, Modal } from "@material-ui/core";
import Box from "@mui/material/Box";

const style1 = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const SeoModal = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return appState.globalState.openDialog(
		<>
			<div css={{ display: "flex", alignItems: "center" }}>Done!</div>, 8000,
			<div>
				<Button onClick={handleOpen}>Open modal</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style1}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Text in a modal
						</Typography>
						<Typography id="modal-modal-description" style={{ marginTop: 2 }}>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</Typography>
					</Box>
				</Modal>
			</div>
		</>
	);
};
