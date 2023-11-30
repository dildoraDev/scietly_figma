export const Footer = () => {
  return (
    <>
      <div className="bg-[#4579CB] flex justify-around align-center pt-[28px] pl-[135px] pr-[210px] pb-[40px]">
        <div>
          <h6 className="text-[#fff] text-[26px] leading-[48px] font-[700] mb-[31px]">Socielity</h6>
          <div className="text-[#fff] text-[16px] leading-[24px] font-[400]">
            <p>
              Your private online marketplace where <br />
              you can trade goods and services with <br />
              family, friends, neighbors, classmates, <br />
              co-workers, and members of the many <br /> other
              Socielities that comprise your <br /> personal world.
            </p>
          </div>
        </div>
        <div>
          <h6 className="text-[#fff] text-[20px] leading-[28px] font-[700] mb-[31px]">Company</h6>
          <div className="text-[#fff] text-[14px] leading-[24px] font-[400] mb-[8px]">
            <p>Help Center</p>
            <p>About</p>
            <p>Press</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>FAQs</p>
          </div>
        </div>
        <div>
          <h6 className="text-[#fff] text-[20px] leading-[28px] font-[700] mb-[31px]">Sociality</h6>
          <div className="text-[#fff] text-[14px] leading-[24px] font-[400] mb-[8px]">
            <p>User  Agreement</p>
            <p>Privacy Policy</p>
            <p>Sociality Guidelines</p>
            <p>Cookie Policy</p>
            <p>My Account</p>
          </div>
        </div>
        <div>
          <h6 className="text-[#fff] text-[20px] leading-[28px] font-[700] mb-[31px]">Contact us</h6>
          <div className="flex">
            <img src="/public/mock-imges/icon/message.svg" alt="" />
            <p className="text-[16px] font-[400] leading-[24px] text-[#fff] mb-[8px] ml-[18px]">contact@example.com</p>
          </div>
          <div className="flex">
            <img src="/public/mock-imges/icon/phone.svg" alt="" />
            <p className="text-[16px] font-[400] leading-[24px] text-[#fff] mb-[8px] ml-[18px]">+152 534-468-854</p>
          </div>
          <div className="flex mb-[30px]">
            <img src="/public/mock-imges/icon/location.svg" alt="" />
            <p className="text-[16px] font-[400] leading-[24px] text-[#fff] mb-[8px] ml-[18px]">View on Google map</p>
          </div>
          <div className="flex gap-[18px]">
            <div>
              <img src="/public/mock-imges/icon/f.svg" alt="" />
            </div>
            <div>
              <img src="/public/mock-imges/icon/in.svg" alt="" />
            </div>
            <div>
              <img src="/public/mock-imges/icon/twitter.svg" alt="" />
            </div>
            <div>
              <img src="/public/mock-imges/icon/p.svg" alt="" />
            </div>
            <div>
              <img src="/public/mock-imges/icon/camera.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};