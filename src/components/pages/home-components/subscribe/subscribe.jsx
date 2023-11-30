export const Subscribe = () => {
  return (
    <>
      <div className="mb-[80px]">
        <h2 className="text-center text-[26px] font-[700] leading-[48px] mb-[24px] text-[#474747]">Subscribe to get the latest news about us</h2>
        <p className="text-center text-[16px] font-[400] leading-[24px] mb-[33px] text-[#666]">
          Socielity offers insured and non-insured
          individuals access to affordable, convenient,
          and personalized care <br /> for urgent and ongoing
          medical conditions.
        </p>
        <div className="flex justify-center">
          <div className="flex gap-[329px] w-[770px] rounded-[16px] bg-[#e6e6e6] pt-[28px] pl-[34px] pb-[24px]">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-[#e6e6e6]"
            />
            <button className="text-[16px] font-[700] leading-[24px] text-center text-[#FFF] pt-[11px] pb-[11px] pl-[25px] pr-[26px] bg-[#4579CB] rounded-[8px]">Subscribe Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
