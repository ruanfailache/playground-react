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
    fileLists: FileList[];
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

    const [selectedImage, setSelectedImage] = useState<File>();
    const [fileLists, setFileLists] = useState<FileList[]>([]);

    const [addDocument] = useMutation(ADD_DOCUMENT);

    const selectedFileText = useMemo(() => {
        if (!fileLists) return "No file selected";
        const filesLength = fileLists.reduce((acc, file) => acc + file.length, 0);
        return `${filesLength} file(s) selected`;
    }, [fileLists]);

    const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { files: eventFiles } = event.target;
        if (eventFiles) {
            setFileLists((prev) => {
                if (prev) return [...prev, eventFiles];
                return [eventFiles];
            });
        }
    };

    const handleFileClick = (file: File) => {
        setSelectedImage(file);
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
        data.append("file", fileLists[0][0]);
        data.append("filename", fileLists[0][0].name);
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
        fileLists,
        isModalOpen,
        isSnackbarOpen,
        selectedImage,
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
