import Button from "../../../common/button/Button";

export const Services = () => {
  return (
    <>
      <div>
        <div className="flex justify-between mb-[120px]">
          <div>
            <img src="/public/mock-imges/service1.png" alt="" />
          </div>
          <div>
            <h4 className="text-[26px] leading-[48px] font-[700] mb-[24px] text-[#474747]">
              You want to strengthen more of communities <br />
              or groups you are associated with.
            </h4>
            <p className="text-[16px] leading-[24px] font-[400] mb-[30px]">
              A simple definition is that leadership
              is the art of motivating a group of <br /> people
              to act towards achieving a common goal. In
              a business setting, this <br /> can mean directing
              workers and colleagues with a strategy to
              meet the <br /> company's needs.
            </p>
            <Button/>
          </div>
        </div>
        <div className="flex justify-between mb-[120px]">
          
          <div>
            <h4 className="text-[26px] leading-[48px] font-[700] mb-[24px] text-[#474747]">
            You want to strengthen more of Socialities or <br /> groups you are associated with.
            </h4>
            <p className="text-[16px] leading-[24px] font-[400] mb-[30px]">
              A simple definition is that leadership
              is the art of motivating a group of <br /> people
              to act towards achieving a common goal. In
              a business setting, this <br /> can mean directing
              workers and colleagues with a strategy to
              meet the <br /> company's needs.
            </p>
            <Button/>
          </div>
          <div>
            <img src="/public/mock-imges/service2.png" alt="" />
          </div>
        </div>
        <div className="flex justify-between mb-[120px]">
          <div>
            <img src="/public/mock-imges/service3.png" alt="" />
          </div>
          <div className="ml-[53px]">
            <h4 className="text-[26px] leading-[48px] font-[700] mb-[24px] text-[#474747]">
              You want to strengthen more of communities <br />
              or groups you are associated with.
            </h4>
            <p className="text-[16px] leading-[24px] font-[400] mb-[30px]">
              A simple definition is that leadership
              is the art of motivating a group of <br /> people
              to act towards achieving a common goal. In
              a business setting, this <br /> can mean directing
              workers and colleagues with a strategy to
              meet the <br /> company's needs.
            </p>
            <Button/>
          </div>
        </div>
      </div>
    </>
  );
};
