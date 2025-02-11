
'use client'

import Slider from 'react-infinite-logo-slider';

import Image from 'next/image';

const SliderOne = () => {
    return ( <div>
        <Slider
        width='200px'
        duration={60}
        >
      <Slider.Slide>
        <Image src="/logos/logoipsum-211.svg" alt="logo" width={100} height={100}  className=" md:w-20 h-20 text-gray-500"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/onlinejobsph.webp" alt="logo" width={100} height={100}  style={{ height: '100px', width: 'auto' }}   />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-224.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-225.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-226.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-273.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-274.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-292.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-293.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-296.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-300.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-317.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-323.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-327.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-329.svg" alt="logo" width={100} height={100}  className="w-16 h-16"  />
        </Slider.Slide>
       
        </Slider>
    </div> );
}
 
export default SliderOne;