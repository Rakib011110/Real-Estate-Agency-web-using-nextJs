"use client";

import Navbar from "../Navbar";

export default function Banner() {
  return (
    <div>
      <section
        className="
          relative
          w-full              
          lg:max-w-[1422px]   
          mx-auto              
          bg-cover
          bg-center
          h-[500px]            
          sm:h-[558px]          
          md:h-[700px]          
          lg:h-[871px]        
        "
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/8cbe/59e0/78210bb6def98c76b53af705e4f2b254?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T39iNDEyds4Am84EmHJr5lrL3KFaqoa-N~hAJLXdhwQtJUvJtgoKc0o6lE8VC0m9q4b~H9AU5vB~QjJXjkc5lHKdKckV4noCYLuunsmS~kWnMQ27XHzyDghKsCHofTDfVKrgHzQwIN3~HdZAqya2l0vA1ZbQan7iPEtP0-ksGqmH9bBU-RpnecMmnbMEWQxZimr2AbFN85GbHOcPfuWrQ145-MDwhy7DtZRxqL2RvxTu5WR8Gk3KpK0dd2FrOMZklYQolWbqADjM9wjbaauBz2imAy89FxCbI3XsxfG7VHQsLDCsTYv85e8s~V31wKaKKoCLWaj6JVOrahPAKH2Zfg__')",
        }}>
        {/* Navbar at the top */}
        <Navbar />

        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <p className="text-sm md:text-lg">Real Estate Agency</p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2">
            Miami Real Estate Specialists
          </h1>

          <p className="mt-4 text-sm md:text-lg max-w-[600px]">
            Your specialists in residential and commercial properties. From
            dream homes to prime business spaces, trust our unique expertise to
            guide you in Miami/South Florida’s dynamic market.
          </p>
        </div>
      </section>
    </div>
  );
}
