import PropTypes from "prop-types";
import { useState } from "react";

const FrameComponent = ({ className = "" }) => {
  const [isClicked, setIsClicked] = useState(false);

  const copyToClipboard = () => {
    const tokenAddress = "wazaAgCz4feA4LsQk28ooqHQnDGNhjoShd2njMcoinu";
    navigator.clipboard.writeText(tokenAddress).then(
      () => {
        console.log("Copied to clipboard successfully!");
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300); // Reset the state after 300ms
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div
      className={`w-[1168px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full text-left text-17xl text-dark-grey font-space-grotesk ${className}`}
    >
      <div className="rounded-25xl bg-green flex flex-row items-start justify-start pt-8 pb-9 pr-0.5 pl-[19px] box-border gap-[17.5px] max-w-full mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <div
            className={`relative leading-[16px] cursor-pointer mq450:text-3xl mq450:leading-[10px] mq1050:text-10xl mq1050:leading-[13px] ${
              isClicked ? "bg-yellow-300" : ""
            }`}
            onClick={copyToClipboard}
            title="Click to copy"
          >
            wazaAgCz...jMcoinu
          </div>
        </div>
        <div
          className={`h-9 w-9 rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 box-border gap-[10px] ${
            isClicked ? "bg-yellow-300" : ""
          }`}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/arrow-outward.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
            loading="lazy"
            alt="Copy to clipboard"
            src="/content-copy.svg"
            onClick={copyToClipboard}
            title="Click to copy"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
