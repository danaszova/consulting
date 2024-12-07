import {
  Lock,
  MessageCircle,
  MousePointerSquare,
  Leaf,
  Lightbulb,
  PencilLine,
  Medal,
  GraduationCap
} from "lucide-react";

const Features = () => {
  return (
    <div className="py-20">
      <div className="text-center text-4xl md:text-6xl font-medium pb-16">
      How Our Staffing Stands Out
      </div>
      <div className="md:flex px-10 md:px-0 md:space-y-0 items-center justify-center md:space-x-10">


        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <GraduationCap className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Rigorous Skill Verification</div>
          </div>
          <div className="w-full h-20">
          We meticulously interview, assess, and verify each candidate 
          to ensure they meet the highest technical standards.
          </div>
        </div>


        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <Leaf className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Character-Driven Selection</div>
          </div>
          <div className="w-full h-20">
          Our candidates embody integrity, teamwork, and exceptional 
          communication, bringing a positive impact to your team.
          </div>
        </div>


        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <Lightbulb className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Technologically Advanced</div>
          </div>
          <div className="w-full h-20">
          We source talent skilled in AI and rapid development, 
          ready to deliver fast, smart results that save you time.
          </div>
        </div>


        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <Medal className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Performance and Results Focused</div>
          </div>
          <div className="w-full h-20">
          Our consultants prioritize business outcomes, committed to bringing 
          projects to completion and driving real value.
          </div>
        </div>


      </div>
    </div>
  );
};

export default Features;
