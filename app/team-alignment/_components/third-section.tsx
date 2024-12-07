import Image from "next/image";


const ThirdSection = () => {
  return (
    <div className="bg-[#e3f2ff] mx-auto">
      <div className="py-10 md:p-40">
        <div className="md:flex px-10 md:space-y-0 md:space-x-20 items-center">
          <div className="flex space-x-10">
            <div className="space-y-10">
              <div className="space-y-1 text-md">
                <div className="text-[#1c2850] font-medium leading-normal text-3xl md:text-4xl pb-4">
                Reclaim Your Day               </div>
                <div className="text-xl text-[#1f3575] leading-8 font-light">
                Spend less time sorting resumes and more time growing your business. With us in your corner, you’ll have expert support every step of the way.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                  Streamlined Hiring Processes
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                Our proven strategies and tools ensure a smooth, efficient recruiting process, cutting down the time it takes to fill a role.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                Expert Screening and Vetting
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                We thoroughly assess candidates, so you only spend time interviewing those who truly fit your needs.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                Faster Access to Qualified Talent
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                Our expertise and network of top-tier candidates mean you’ll spend less time searching and more time onboarding the right people.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 pt-10 md:pt-0">
         
            <Image
            src={"/images/undraw-2.svg"}
            alt="image"
            width={700}
            height={700}
            className="
                object-cover
                rounded-md
                w-full
                p-10      
                "
            />



          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
