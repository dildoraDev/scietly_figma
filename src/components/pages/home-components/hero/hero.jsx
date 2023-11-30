import Button from "../../../common/button/Button";

export const Hero = () => {
  return (
    <>
      <div className="mb-[114px]">
        <h2 className="text-center text-[56px] text-[#474747] font-[700] mb-[38px]">
          Your Private Online Marketplace <br />
          Where Socielities That Comprise Your <br />
          Personal World
        </h2>
        <p className="text-center text-[16px] font-[400] mb-[38px] text-[#666] leading-[24px]">
          Your private online marketplace where you can
          trade goods and services with family, friends,
          neighbors, classmates, <br /> co-workers, and
          members of the many other communities that comprise
          your personal world.
        </p>
        <div className="flex justify-center mb-[21px]"><Button /></div>
        <div className="flex justify-center">
          <img src="/public/mock-imges/youtube.svg" alt="" className="mr-[11px]" />
          <span className="font-[400] underline"><a href="https://www.youtube.com/">Let's have a look</a> </span>
        </div>
      </div>
    </>
  );
};