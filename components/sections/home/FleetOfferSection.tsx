import Image from "next/image";
import { fleetOfferCards } from "@/constants";

export default function FleetOfferSection() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto grid w-full max-w-6xl items-stretch gap-4 px-4 sm:grid-cols-2 sm:px-6 md:px-8 lg:grid-cols-4 lg:px-10 xl:px-14">
        {fleetOfferCards.map((card) => (
          <article
            key={card.title}
            className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl bg-[#F4F4F4] px-5 py-9 text-center text-[#1A1A1A] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white motion-reduce:transition-none"
          >
            <div
              className="absolute inset-0 origin-center scale-110 bg-cover bg-center opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              aria-hidden="true"
              style={{ backgroundImage: `url("${card.imageSrc}")` }}
            />
            <div
              className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 motion-reduce:transition-none"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col items-center">
              <Image
                src="/service/traffic-jam.svg"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:brightness-0 group-hover:invert motion-reduce:transition-none"
              />
              <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5C5C5C] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/90 motion-reduce:transition-none">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
