import React from "react";
import Image from "next/image";
function Sponsor() {
  return (
    <main className="mx-10 my-10">
      <div className="flex justify-center items-center gap-24">
        <Image
          src={"/samsung-logo.png"}
          width={100}
          height={100}
          alt="samsung"
        />
        <Image src={"/apple-logo.png"} width={100} height={100} alt="samsung" />
        <Image
          src={"/amazon-logo.png"}
          width={100}
          height={100}
          alt="samsung"
        />

        <Image
          src={"/spotify-logo.png"}
          width={100}
          height={100}
          alt="samsung"
        />
        <Image
          src={"/openai-logo.png"}
          width={100}
          height={100}
          alt="samsung"
        />
      </div>
    </main>
  );
}

export default Sponsor;
