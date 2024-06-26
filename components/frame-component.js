import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[1168px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full text-left text-17xl text-dark-grey font-space-grotesk ${className}`}
    >
      <div className="rounded-25xl bg-green flex flex-row items-start justify-start pt-8 pb-9 pr-0.5 pl-[19px] box-border gap-[17.5px] max-w-full mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <div className="relative leading-[16px] mq450:text-3xl mq450:leading-[10px] mq1050:text-10xl mq1050:leading-[13px]">
            0x532f...B142E4
          </div>
        </div>
        <div className="h-9 w-9 rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 box-border gap-[10px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/arrow-outward.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/content-copy.svg"
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
