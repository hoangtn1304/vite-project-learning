import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "success" | "warning" | "danger";
  onClose: () => void;
}

const Alert = ({ children, color = "primary", onClose }: Props) => {
  return (
    <div
      className={"alert alert-dismissible fade show alert-" + color}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
