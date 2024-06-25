import * as Mui from "@mui/material";
import { FC } from "react";
import CardUploadFilesPreview from "src/app/UploadFilePage/CardUploadFilesPreview";

import CardUploadFilesForm from "@app/app/UploadFilePage/CardUploadFilesForm";
import ModalFilePreview from "@app/app/UploadFilePage/ModalFilePreview";

import useUploadFilePageController from "./UploadFilePage.controller.ts";

interface Component extends FC {}

const UploadFilePage: Component = () => {
    const controller = useUploadFilePageController();

    return (
        <>
            <Mui.AppBar position="sticky">
                <Mui.Toolbar>
                    <Mui.Typography>Playground</Mui.Typography>
                </Mui.Toolbar>
            </Mui.AppBar>

            <Mui.Stack p={3} spacing={3}>
                <CardUploadFilesForm
                    title="Upload file"
                    subtitle="Upload file or image"
                    onUpload={controller.handleUpload}
                    onFileChange={controller.handleFileChange}
                />

                <CardUploadFilesPreview
                    title="Uploaded files"
                    subtitle={controller.selectedFileText}
                    files={controller.files}
                    onFileClick={controller.handleFileClick}
                />
            </Mui.Stack>

            {controller.isModalOpen && controller.clickedFile && (
                <ModalFilePreview
                    onClose={controller.handleModalClose}
                    open={controller.isModalOpen}
                    file={controller.clickedFile}
                />
            )}

            <Mui.Snackbar
                open={controller.isSnackbarOpen}
                onClose={controller.handleSnackbarClose}
                autoHideDuration={3000}
                message={controller.snackbarMessage}
            />
        </>
    );
};

export default UploadFilePage;
