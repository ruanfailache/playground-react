import * as Mui from "@mui/material";
import { FC } from "react";
import SelectedFilePreview from "src/components/SelectedFilePreview";

interface Component
    extends FC<{
        title: string;
        subtitle: string;
        files: File[];
        onFileClick: (file: File) => void;
    }> {}

const CardUploadFilesPreview: Component = ({ title, subtitle, files, onFileClick }) => (
    <Mui.Card>
        <Mui.CardHeader title={title} subheader={subtitle} />
        <Mui.CardContent>
            {files.length === 0 ? (
                <Mui.Typography>No file uploaded</Mui.Typography>
            ) : (
                <Mui.ImageList cols={3} gap={16} rowHeight={300}>
                    {files.map((file, index) => (
                        <Mui.ImageListItem key={index}>
                            <SelectedFilePreview key={file.name} file={file} onFileClick={onFileClick} />
                        </Mui.ImageListItem>
                    ))}
                </Mui.ImageList>
            )}
        </Mui.CardContent>
    </Mui.Card>
);

export default CardUploadFilesPreview;
