import * as Mui from "@mui/material";
import { ChangeEventHandler, FC } from "react";

interface Component
    extends FC<{
        title: string;
        subtitle: string;
        onUpload: () => void;
        onFileChange: ChangeEventHandler<HTMLInputElement>;
    }> {}

const CardUploadedFilesPreview: Component = ({ title, subtitle, onFileChange, onUpload }) => (
    <Mui.Card>
        <Mui.CardHeader title={title} subheader={subtitle} />
        <Mui.CardContent>
            <Mui.OutlinedInput type="file" onChange={onFileChange} />
        </Mui.CardContent>
        <Mui.CardActions>
            <Mui.Button onClick={onUpload}>Upload</Mui.Button>
        </Mui.CardActions>
    </Mui.Card>
);

export default CardUploadedFilesPreview;
