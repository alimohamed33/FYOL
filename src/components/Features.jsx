import { useState } from "react";
import { featuresList } from "../../public/data";
import Feature from "./Feature";

function Features() {
  const [features] = useState(featuresList);

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 gap-[50px] md:gap-[100px] md:grid-cols-2 w-[860px] max-w-full mx-auto">
          {features.map((feature) => (
            <Feature key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
