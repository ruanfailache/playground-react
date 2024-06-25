import { FC } from "react";

interface ComponentProps {
    file: File;
    onFileClick?: (file: File) => void;
}

interface Component extends FC<ComponentProps> {}

const SelectedFilePreview: Component = ({ file, onFileClick }) =>
    file.type === "application/pdf" ? (
        <iframe
            onClick={() => onFileClick && onFileClick(file)}
            src={URL.createObjectURL(file)}
            width="100%"
            height="100%"
            loading="lazy"
            style={{
                pointerEvents: "none",
            }}
        />
    ) : (
        <img
            onClick={() => onFileClick && onFileClick(file)}
            src={URL.createObjectURL(file)}
            alt={file.name}
            width="100%"
            height="100%"
            loading="lazy"
        />
    );

export default SelectedFilePreview;
