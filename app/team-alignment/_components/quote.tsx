
import Image from "next/image";

const Quote = () => {
    return ( 
    <div className="py-10">
            <div className="
            rounded-[80px]
             p-10
              md:p:20
               flex 
               flex-col
                items-center
                 space-y-10
                 
                 ">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="md:text-3xl font-medium md:w-3/5 text-center">
              &quot;Working with a staffing partner simplified our hiring process and provided access to top talent quickly. It allowed us to focus on our core operations without worrying about compliance or recruitment challenges—a true game-changer for our growth.&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">

              <div className="text-[#6c6684] text-center">
                <div className="font-medium">Jason S</div>
                <div className="text-sm">Chief Executive Officer</div>
              </div>
            </div>
          </div>



  

    </div> );
}
 
export default Quote;