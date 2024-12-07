import Image from "next/image";

const FifthSection = () => {
  return (
    <div className="bg-[#ffedec] mx-auto">
      <div className="py-4">
        <div className="md:flex md:space-y-0 items-center md:p-40">
          <div className="md:order-1 md:pr-0">
            <div className="flex flex-col space-y-10 md:flex-row md:items-center md:space-x-40">
              <div className="order-2 md:order-1 w-full md:w-1/2">
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

              <div className="order-1 md:order-2 md:flex-1 px-10 md:px-0 space-y-10">
                <div className="space-y-1 text-md">
                  <div className="text-[#6f1f1d] font-medium leading-normal text-2xl md:text-4xl pb-4">
                  Focus on Core Business and Minimize Risk
                  </div>
                  <div className="text-md text-[#6f1f1d] md:leading-8 font-light">
                  Stay focused on growing your business while we handle hiring and workforce management. We ensure smooth operations and full compliance, so you can work smarter, not harder.
                  </div>
                </div>

                <div className="space-y-1 text-[#6f1f1d]">
                    <div className="text-xl font-medium leading-normal">
                    Free Up Valuable Time and Resources
                    </div>
                    <div className="text-sm md:text-md leading-6 md:leading-10 font-light">
                    Let us handle the complexities of recruitment, payroll, and compliance, so your team can concentrate on driving innovation and growth. By outsourcing staffing to experts, you gain the bandwidth to focus on your core operations and strategic goals.

                    </div>

                </div>

                <div className="space-y-1 text-[#6f1f1d]">
                    <div className="text-xl font-medium leading-normal">
                    Reduce Liability and Ensure Compliance
                    </div>
                    <div className="text-sm md:text-md leading-6 md:leading-10 font-light">
                    We take the stress out of staying compliant with labor laws and regulations. From payroll taxes to workers' compensation, we manage the risks associated with hiring, giving you peace of mind and reducing potential legal exposure.
                    </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
