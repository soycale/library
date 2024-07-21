import React, { useCallback } from "react";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  assetId?: string
}

const Modal: React.FC<Props> = ({ open, onClose, children, assetId }) => {

  // Create and Copy link to clipboard
  const handleCopyLink = useCallback(async () => {
    if (!assetId) return;

    const url = new URL(window.location.href);
    url.searchParams.set("modal", "true");
    url.searchParams.set("id", assetId);

    try {
      await navigator.clipboard.writeText(url.href.toString());
      alert("URL copied to clipboard!");
    } catch (err) {
      alert("Failed to copy URL");
      console.error("Error copying URL to clipboard: ", err);
    }
  }, [assetId]);

// Do not render the modal if it is not open
  if (!open) return null;

  return (
    <div className="flex fixed justify-center items-center z-50 inset-0 bg-black bg-opacity-50" onClick={onClose}>
      <div className="flex flex-col bg-white p-5 rounded-lg max-w-[810px] w-3/4 max-h-[90vh] shadow-lg relative  overflow-hidden" onClick={(e) => e.stopPropagation()}>
      <div className="flex flex-row-reverse">
        <button className="flex justify-center items-center text-2xl font-bold cursor-pointer rounded-full w-10 h-10 hover:bg-gray-200" onClick={onClose}>
          &times;
        </button>
        <button className="flex justify-center items-center text-2xl font-bold cursor-pointer rounded-full w-10 h-10 hover:bg-gray-200" onClick={handleCopyLink}>
          <Image src={"/assets/link.png"} width={20} height={20} alt="link" />
        </button>
        </div>
        <div className="flex-1 overflow-y-auto mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
