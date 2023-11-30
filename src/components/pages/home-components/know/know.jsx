export const Know = () => {
  return (
    <>
      <div>
        <h4 className="text-center text-[26px] leading-[48px] mb-[24px] font-[700] text-[#474747]">They love us! Do you know why?</h4>
        <p className="text-center text-[16px] leading-[24px] mb-[16px] font-[400] text-[#666]">
          The following videos are currently in production.
          In the meantime, please use our Help Center.
        </p>
        <div className="flex justify-between align-center mb-[99.74px]">
          <div className="relative">
            <img src="/public/mock-imges/know1.png" alt="" className="w-[648px] h-[397px]" /> 
            <img src="/public/mock-imges/icon/Ellipse.svg" alt="" className="absolute top-[100px] left-[210px]"/>
            <img src="/public/mock-imges/icon/Polygon.svg" alt="" className="absolute top-[130px] left-[250px]"/>
          </div>
          <div className="relative">
            <img src="/public/mock-imges/know2.png" alt="" className="w-[648px] h-[397px]" /> 
            <img src="/public/mock-imges/icon/Ellipse.svg" alt="" className="absolute top-[100px] left-[210px]"/>
            <img src="/public/mock-imges/icon/Polygon.svg" alt="" className="absolute top-[130px] left-[250px]"/>
          </div>
        </div>
      </div>
    </>
  )
}
