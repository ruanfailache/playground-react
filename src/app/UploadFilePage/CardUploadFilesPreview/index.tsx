import * as Mui from "@mui/material";
import { FC } from "react";

import SelectedFileImage from "@app/components/SelectedFileImage";

interface Component
    extends FC<{
        title: string;
        subtitle: string;
        filesList: FileList[];
        onFileClick: (file: File) => void;
    }> {}

const CardUploadFilesPreview: Component = ({ title, subtitle, filesList, onFileClick }) => (
    <Mui.Card>
        <Mui.CardHeader title={title} subheader={subtitle} />
        <Mui.CardContent>
            {filesList.length === 0 ? (
                <Mui.Typography>No file uploaded</Mui.Typography>
            ) : (
                <Mui.ImageList cols={3} gap={16}>
                    {filesList.map((files, index) => (
                        <Mui.ImageListItem key={index}>
                            {Array.from(files).map((file) => (
                                <SelectedFileImage key={file.name} file={file} onFileClick={onFileClick} />
                            ))}
                        </Mui.ImageListItem>
                    ))}
                </Mui.ImageList>
            )}
        </Mui.CardContent>
    </Mui.Card>
);

export default CardUploadFilesPreview;
