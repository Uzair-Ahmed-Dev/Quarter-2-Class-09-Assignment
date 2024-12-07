import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex w-full gap-5 p-10">
        <div className="w-1/2 ">
        <Image
          src="/slideShow1.jpg"
          alt="Hero Image"
          width={1280}
          height={809}
          className="w-full h-[500px] rounded-xl"
        />
        </div>
        <div className="w-1/2 ">
        <Image
          src="/slideShow2.jpg"
          alt="Students Image"
          width={1600}
          height={900}
          className="w-full h-[500px] rounded-xl"
        />
        </div>
      </section>

      <section className=" flex justify-around gap-5 p-10">
        <div className="w-1/3  ">
          <Image 
          src="/imageWebsite.jpg"
          alt="card 1 Image"
          width={500}
          height={500}
          className="w-[450px] h-[300px] rounded-xl"
          />
        </div>

        <div className="w-1/3 ">
          <Image 
          src="/imageWebsite2.jpg"
          alt="card 2 Image"
          width={500}
          height={500}
          className="w-[450px] h-[300px] rounded-xl"
          />
        </div>

        <div className="w-1/3 ">
          <Image 
          src="/imageWebsite3.jpg"
          alt="card 3 Image"
          width={500}
          height={500}
          className="w-[450px] h-[300px] rounded-xl"
          />
        </div>

      </section>
    </main>
  );
}
