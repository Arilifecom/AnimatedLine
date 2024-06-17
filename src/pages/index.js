import Head from "next/head";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LineAnimation from "@/compornents/LineAnimation";

const Details = ({
  cityname,
  country,
  countryLink,
  time,
  address,
  article,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LineAnimation reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ms:text-2xl">
          {cityname}&nbsp;
          <a
            href={countryLink}
            target="_blank"
            className="text-primary capitalize"
          >
            | {country}
          </a>
        </h3>
        <span className="capitalize font-medium w-full text-dark/75 sm:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full sm:text-sm">{article}</p>
      </motion.div>
    </li>
  );
};

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <>
      <Head>
        <title>Animated Line</title>
        <meta name="description" content="Animated Line" />
      </Head>
      <h1 className="grid items-center font-bold text-8xl mb-16 w-full text-center h-screen">
        Animated Line
      </h1>

      <h2 className="font-semibold text-3xl mb-16 w-full text-center">
        Travel Recoad
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            cityname="cityname"
            country="country"
            countryLink="countryLink@mail.com"
            time="2024.6.1"
            address="address"
            article="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
          <Details
            cityname="cityname"
            country="country"
            countryLink="countryLink@mail.com"
            time="2024.6.1"
            address="address"
            article="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
          <Details
            cityname="cityname"
            country="country"
            countryLink="countryLink@mail.com"
            time="2024.6.1"
            address="address"
            article="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
          <Details
            cityname="cityname"
            country="country"
            countryLink="countryLink@mail.com"
            time="2024.6.1"
            address="address"
            article="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
          <Details
            cityname="cityname"
            country="country"
            countryLink="countryLink@mail.com"
            time="2024.6.1"
            address="address"
            article="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
        </ul>
        <div className="mt-[400px]">end</div>
      </div>
    </>
  );
}
