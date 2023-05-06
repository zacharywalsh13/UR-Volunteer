
export default function OurMission() {
  return (
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
  <div className="flex flex-wrap -mx-4 items-center">
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 flex flex-col justify-center">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-1">Our Mission</h1>
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-4 sm:mb-1">Morning, Noon, and Night</h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Lorum ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.</p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-2/3 px-4">
      <img src={'/images/Volunteer7.jpg'} alt="" className="img-fluid w-full h-auto"/>
    </div>
  </div>
</div>
  );
}

