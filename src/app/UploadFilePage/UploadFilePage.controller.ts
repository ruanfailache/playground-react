import { gql, useMutation } from "@apollo/client";
import { ChangeEventHandler, useMemo, useState } from "react";

const ADD_DOCUMENT = gql`
    mutation AddDocument($file: Upload!) {
        addDocument(file: $file) {
            ok
            error
        }
    }
`;

interface ControllerReturn {
    files: File[];
    isModalOpen: boolean;
    isSnackbarOpen: boolean;
    selectedImage: File | undefined;
    selectedFileText: string;
    snackbarMessage: string;
    handleFileChange: ChangeEventHandler<HTMLInputElement>;
    handleFileClick: (file: File) => void;
    handleModalClose: () => void;
    handleSnackbarClose: () => void;
    handleUpload: () => void;
}

type UploadFilePageController = () => ControllerReturn;

const useUploadFilePageController: UploadFilePageController = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const [files, setFiles] = useState<File[]>([]);
    const [clickedFile, setClickedFile] = useState<File>();

    const [addDocument] = useMutation(ADD_DOCUMENT);

    const selectedFileText = useMemo(() => {
        if (!files) return "No file selected";
        return `${files.length} file(s) selected`;
    }, [files]);

    const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { files: eventFiles } = event.target;
        if (eventFiles) setFiles((prev) => [...prev, ...eventFiles]);
    };

    const handleFileClick = (file: File) => {
        setClickedFile(file);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSnackbarClose = () => {
        setIsSnackbarOpen(false);
    };

    const handleUpload = async () => {
        const data = new FormData();
        data.append("file", files[0]);
        data.append("filename", files[0].name);
        addDocument({
            variables: {
                file: data,
            },
        })
            .then(() => {
                setSnackbarMessage("Archive sent successfully");
            })
            .catch(() => {
                setSnackbarMessage("Failed to send archive");
            })
            .finally(() => {
                setIsSnackbarOpen(true);
            });
    };

    return {
        files: files,
        isModalOpen,
        isSnackbarOpen,
        selectedImage: clickedFile,
        selectedFileText,
        snackbarMessage,
        handleFileChange,
        handleFileClick,
        handleModalClose,
        handleSnackbarClose,
        handleUpload,
    };
};

export default useUploadFilePageController;
