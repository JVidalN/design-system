import { useState } from "react";
import { Icon } from "../IconComponent/Icon";

export interface ToastProps {
  position:
    | "center"
    | "left"
    | "right"
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-center";
  severity: "success" | "info" | "warn" | "error";
  summary: string;
  closable?: boolean;
}

function Toast({ position, severity, summary, closable = false }: ToastProps) {

  const [close, setClose] = useState(false);

  const capitalizeWords = (str: string) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const getSeverityClass = () => {
    let className;
    switch (severity) {
      case "success":
        className = "bg-alert-success-light border-alert-success-medium";
        return className;
      case "info":
        className = "bg-alert-info-light border-alert-info-medium";
        return className;
      case "warn":
        className = "bg-alert-warning-light border-alert-warning-medium";
        return className;
      case "error":
        className = "bg-alert-danger-light border-alert-danger-medium";
        return className;
    }
  };

  const getSeverityIconColor = () => {
    let className;
    switch (severity) {
      case "success":
        className = "text-alert-success-medium";
        return className;
      case "info":
        className = "text-alert-info-medium";
        return className;
      case "warn":
        className = "text-alert-warning-medium";
        return className;
      case "error":
        className = "text-alert-danger-medium";
        return className;
    }
  };

  const getPositionClass = () => {
    let className;
    switch (position) {
      case "center":
        className =
          "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
        return className;
      case "left":
        className = "left-[1px] transform -translate-y-1/2";
        return className;
      case "right":
        className = "right-[1px] transform -translate-y-1/2";
        return className;
      case "bottom-right":
        className = "bottom-[1px] right-[1px]";
        return className;
      case "bottom-left":
        className = "bottom-[1px] left-[1px]";
        return className;
      case "bottom-center":
        className = "bottom-[1px] left-1/2 transform -translate-x-1/2";
        return className;
      case "top-right":
        className = "top-[1px] right-[1px]";
        return className;
      case "top-left":
        className = "top-[1px] left-[1px]";
        return className;
      case "top-center":
        className = "top-[1px] left-1/2 transform -translate-x-1/2";
        return className;
    }
  };

  const severityAssets: any = {
    [severity]: {
      icon: `check${capitalizeWords(severity)}`,
    },
  };

  return (
    <div
      className={`
          absolute
          ${getPositionClass()} 
          ${getSeverityClass()}
          w-[395px]
          h-10
          px-4
          py-[11px]
          text-neutral-dark-base
          border
          rounded-sm 
          flex
          items-center
          justify-between
          font-roboto 
          font-normal 
          text-base
          gap-[10px]
          shadow-sm
          ${close && 'hidden'}
        `}
    >
      <div className="flex items-center gap-[10px]">
        <Icon
          name={severityAssets[severity].icon}
          width="14"
          height="14"
          color={getSeverityIconColor()}
        />
        <div>{summary}</div>
      </div>
      {closable && <Icon name="close" width="14" height="14" color="text-[#979899]" onClick={()=>{setClose}} />}
    </div>
  );
}

export { Toast };
