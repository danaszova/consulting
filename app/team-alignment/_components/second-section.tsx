import Image from "next/image";

const SecondSection = () => {
  return (
    <div>
      <div className="items-center justify-center flex md:space-x-20">
        <div className="w-full bg-[#eff0ff]">
          <div className="md:py-40 py-16">
            <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
              <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                <div className="flex">
                  <div className="space-y-10">
                    <div className="space-y-1 md:text-md">
                      <div className="text-[#2b1c50] font-medium md:leading-normal md:text-4xl">
                      Skilled Talent, Ready to Drive Your Vision Forward
                      </div>
                      <div
                        className="
                                        pt-4
                                         text-sm 
                                         md:text-md
                                          text-[#3d2e7c] 
                                          leading-6
                                           md:leading-10
                                           font-light
                                           md:w-4/5
                                           "
                      >
                        Finding skilled technical talent can be tough. 
                        We simplify the process with flexible staffing 
                        solutions tailored to your needs, specializing 
                        in programmers, DevOps, and other technical roles.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Direct Sourcing
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      For companies that prefer to handle the interview and hiring process directly, 
                      we provide a list of qualified candidates ready for your review. We take care 
                      of sourcing and initial vetting, giving you access to top talent from the Philippines 
                      known for technical excellence and reliability. This model offers a cost-effective, 
                      straightforward hiring approach.
                      </div>
                    </div>
                   <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Full-Service Staffing
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      In this comprehensive option, we handle everything from sourcing to 
                      onboarding and ongoing guidance. We interview and hire candidates on 
                      your behalf, ensuring they align with your company’s values and goals. 
                      Our team manages their work, freeing you to focus on higher-level priorities 
                      while benefiting from reliable, AI-optimized staffing support.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       


                <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 mt-10">
            <Image 
            src="/images/undraw-2.svg"
            alt="image"
            width={1920}
            height={1080}
            className="
                object-cover
                md:rounded-[60px]
                rounded-[40px]
                w-full
                p-10
                "
            />

                </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
