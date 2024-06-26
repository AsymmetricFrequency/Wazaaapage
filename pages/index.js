import FrameComponent from "../components/frame-component";

const Presale = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-[61px] pb-[121px] pr-5 pl-[22px] box-border gap-[54px] opacity-[0.99] leading-[normal] tracking-[normal] mq750:gap-[27px]">
      <header className="w-full max-w-[1168px] flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border text-left text-[128px] text-white font-space-grotesk">
        <h1 className="m-0 h-[90px] relative text-inherit leading-[48px] uppercase font-bold font-inherit flex items-center z-[1]">
          wazaaa
        </h1>
      </header>
      <main className="w-full max-w-[1168px] flex flex-row items-start justify-start pt-0 px-0 pb-11 box-border lg:pb-[29px] lg:box-border mq750:pb-5 mq750:box-border">
        <img
          className="w-full h-auto object-cover"
          alt=""
          src="/whatsapp-image-20240625-at-72450-pm-1@2x.png"
        />
      </main>
      <div className="w-[230px] h-[72px] hidden" />
      <FrameComponent />
    </div>
  );
};

export default Presale;
