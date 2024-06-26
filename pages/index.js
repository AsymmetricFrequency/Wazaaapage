import FrameComponent from "../components/frame-component";

const Presale = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-16 pb-32 px-5 box-border gap-14 opacity-99 leading-normal tracking-normal">
      
      <main className="w-full max-w-6xl flex items-center justify-center pt-0 px-0 pb-11 box-border lg:pb-7">
        <img
          className="w-full h-auto object-cover"
          alt="Presale Image"
          src="/whatsapp-image-20240625-at-72450-pm-1@2x.png"
        />
      </main>
      <div className="w-56 h-18 hidden" />
      <FrameComponent />
    </div>
  );
};

export default Presale;
