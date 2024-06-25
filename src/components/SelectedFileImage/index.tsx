import { FC } from "react";

interface ComponentProps {
    file: File;
    onFileClick?: (file: File) => void;
}

interface Component extends FC<ComponentProps> {}

const SelectedFileImage: Component = ({ file, onFileClick }) => (
    <img
        key={file.name}
        onClick={() => onFileClick && onFileClick(file)}
        src={URL.createObjectURL(file)}
        alt={file.name}
        loading="lazy"
        width="100%"
    />
);

export default SelectedFileImage;
