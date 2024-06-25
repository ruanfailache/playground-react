import { Close } from "@mui/icons-material";
import * as Mui from "@mui/material";
import { FC, PropsWithChildren } from "react";
import SelectedFilePreview from "src/components/SelectedFilePreview";

interface ComponentProps extends PropsWithChildren {
    open: boolean;
    file: File;
    onClose: () => void;
}

interface Component extends FC<ComponentProps> {}

const ModalFilePreview: Component = ({ open, file, onClose }) => (
    <Mui.Dialog open={open} onClose={onClose} maxWidth="xl">
        <Mui.AppBar position="sticky">
            <Mui.Toolbar>
                <Mui.Typography flex={1}>Image preview</Mui.Typography>
                <Mui.IconButton onClick={onClose}>
                    <Close />
                </Mui.IconButton>
            </Mui.Toolbar>
        </Mui.AppBar>
        <Mui.DialogContent>
            {file ? <SelectedFilePreview key={file.name} file={file} /> : "No image selected"}
        </Mui.DialogContent>
    </Mui.Dialog>
);

export default ModalFilePreview;
