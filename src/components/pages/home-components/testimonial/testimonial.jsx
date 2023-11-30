export const Testimonial = () => {
  return (
    <>
      <div className="flex justify-between mt-[90px] mb-[120px]">
        <div>
          <img src="/public/mock-imges/testimonial.png" alt="" />
        </div>
        <div>
          <h6 className="text-[16px] leading-[24px] font-[700] mb-[4px] text-[#474747]">Skylar George</h6>
          <p className="text-[14px] leading-[24px] font-[400] mb-[19px] text-[#474747]" >Managing Director, Lovgency Company</p>
          <p className="text-[20px] leading-[28px] font-[700] mb-[34px] text-[#474747]">
            “You'll want to use a format that's viewable
            for your <br /> potential leads and aligns closely
            with their values. To <br /> give you an idea of how
            testimonials can be portrayed, <br /> below are the
            different testimonial types that you can use <br />
            to show off your customers' stories”
          </p>
        </div>
      </div>
    </>
  );
};
