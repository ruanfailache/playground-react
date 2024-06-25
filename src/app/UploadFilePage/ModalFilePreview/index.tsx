import * as Mui from "@mui/material";
import { FC, PropsWithChildren } from "react";

import SelectedFileImage from "@app/components/SelectedFileImage";

interface ComponentProps extends PropsWithChildren {
    open: boolean;
    file: File;
    onClose: () => void;
}

interface Component extends FC<ComponentProps> {}

const ModalFilePreview: Component = ({ open, file, onClose }) => (
    <Mui.Dialog open={open} onClose={onClose} fullScreen>
        <Mui.DialogTitle>Image preview</Mui.DialogTitle>
        <Mui.DialogContent>
            {file ? <SelectedFileImage key={file.name} file={file} /> : "No image selected"}
        </Mui.DialogContent>
        <Mui.DialogActions>
            <Mui.Button onClick={onClose}>Close</Mui.Button>
        </Mui.DialogActions>
    </Mui.Dialog>
);

export default ModalFilePreview;
