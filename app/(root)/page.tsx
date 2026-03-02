import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full  lg:py-12 h-full  flex flex-col ">
      <section className="h-full px-6  w-full  xl:flex flex-col items-center">
        <div className="flex  flex-col md:max-w-lg lg:max-w-5xl mx-auto   gap-10">
          <div className=" group mx-auto gap-6 flex flex-col max-lg:flex-col-reverse lg:flex-row items-center ">
            <div className="flex-1 group-hover:cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 text-sm rounded-md bg-red-100 text-red-600 font-medium">
                  Business
                </span>
                <span className="text-sm text-gray-500">Sep 25, 2024</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-extralight leading-tight text-gray-900 group-hover:underline underline-offset-4 decoration-1">
                Small Businesses Flourish as US Government Expands Loan Access
                and Support
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                In a year filled with economic challenges, small businesses
                across the United States are finding new opportunities for
                growth and expansion, thanks to the U.S....
              </p>
            </div>

            <div className="flex-1 lg:flex-2 w-full h-full group-hover:cursor-pointer">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/market.avif"
                  height={600}
                  width={600}
                  alt="Small business owner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <Title title="Latest News" />

            <div className="flex flex-col lg:flex-row gap-8 w-full">
              <Card
                description="The Future of Healthcare Workforce Shines Bright as Non-Clinical Roles
          Evolve"
              />
              <Card description="Bold and Beautiful: Fall 2024 Fashion Trends to Watch" />
              <Card description="  Mixed-Use Developments, The Future of Urban Living" />
            </div>
          </div>
          <div className="h-full  w-full bg-[#f7fafc] p-6 rounded-sm">
            <Title title="Top Stories" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Link
                href="/"
                className="relative w-full col-span-1 lg:col-span-2 h-full rounded-xl overflow-hidden group"
              >
                <Image
                  src="/market.avif"
                  width={800}
                  height={800}
                  alt="Small business owner"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-xs opacity-80 mb-2">
                    Politics · Sep 22, 2024
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold leading-snug max-w-xl">
                    Amber Hightower’s Message of Unity Gains Momentum Ahead of
                    Election
                  </h2>
                </div>
              </Link>
              <div className="bg-white w-full   flex flex-col gap-5 h-full p-5 rounded-sm">
                <Heading description="AI Revolution Drives Tech Innovation in 2024" />
                <Heading description="Celebrity Collaborations Heat Up: Stars Team Up for Groundbreaking Projects" />
                <Heading description="Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act, Paving Way for a Sustainable Future" />
                <Heading description="Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act, Paving Way for a Sustainable Future" />
                <Heading description="Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act, Paving Way for a Sustainable Future" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex"></div>
      </section>
      <div className="p-8 shadow-2xs mt-8 border-y w-full border-neutral-100 h-full">
        <Title title="Politics" />
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <Card description="Rising Candidate Advocates Bold Vision Amid Economic Challenges" />
          <Card description="Senator Grace Hamilton Gains Momentum as Youth Support Surges" />
          <Card description="Melissa Kent’s Resilient Campaign Rebounds Amid Challenging Polls" />
          <Card description="Ava Mitchell’s Bold Economic Vision Resonates with Voters" />
          <Card description="Kamala Harris Gains Ground as the 2024 Election Heats Up" />
          <Card description="Republicans and Democrats Strike Historic Deal on Infrastructure" />
        </div>
      </div>
      <>
        <div className="h-full  w-full bg-[#f7fafc] p-6 rounded-sm">
          <Title title="Health" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:max-w-5xl mx-auto">
            <div className="bg-white w-full   flex flex-col gap-5 h-full p-5 rounded-sm">
              <Heading description="AI Revolution Drives Tech Innovation in 2024" />
              <Heading description="Celebrity Collaborations Heat Up: Stars Team Up for Groundbreaking Projects" />
              <Heading description="Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act, Paving Way for a Sustainable Future" />
              <Heading description="Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act, Paving Way for a Sustainable Future" />
              <Heading description="Congress Unites Across the Aisle to Pass Landmark Green Infrastructure Act, Paving Way for a Sustainable Future" />
            </div>
            <Link
              href="/"
              className="relative w-full col-span-1 lg:col-span-2 h-full rounded-xl overflow-hidden group"
            >
              <Image
                src="/market.avif"
                width={800}
                height={800}
                alt="Small business owner"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs opacity-80 mb-2">
                  Politics · Sep 22, 2024
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug max-w-xl">
                  Amber Hightower’s Message of Unity Gains Momentum Ahead of
                  Election
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </>
      <div className="p-8 shadow-2xs mt-8 border-y w-full border-neutral-100 h-full">
        <Title title="Election" />
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <Card description="Rising Candidate Advocates Bold Vision Amid Economic Challenges" />
          <Card description="Senator Grace Hamilton Gains Momentum as Youth Support Surges" />
          <Card description="Melissa Kent’s Resilient Campaign Rebounds Amid Challenging Polls" />
          <Card description="Ava Mitchell’s Bold Economic Vision Resonates with Voters" />
          <Card description="Kamala Harris Gains Ground as the 2024 Election Heats Up" />
          <Card description="Republicans and Democrats Strike Historic Deal on Infrastructure" />
        </div>
      </div>
      <div className="p-8 shadow-2xs mt-8 border-y w-full border-neutral-100 h-full">
        <Title title="Economy & Society" />
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <Card description="Rising Candidate Advocates Bold Vision Amid Economic Challenges" />
          <Card description="Senator Grace Hamilton Gains Momentum as Youth Support Surges" />
          <Card description="Melissa Kent’s Resilient Campaign Rebounds Amid Challenging Polls" />
          <Card description="Ava Mitchell’s Bold Economic Vision Resonates with Voters" />
          <Card description="Kamala Harris Gains Ground as the 2024 Election Heats Up" />
          <Card description="Republicans and Democrats Strike Historic Deal on Infrastructure" />
        </div>
      </div>
      <div className="p-8 shadow-2xs mt-8 border-y w-full border-neutral-100 h-full">
        <Title title="Youth Sportlight" />
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <Card description="Rising Candidate Advocates Bold Vision Amid Economic Challenges" />
          <Card description="Senator Grace Hamilton Gains Momentum as Youth Support Surges" />
          <Card description="Melissa Kent’s Resilient Campaign Rebounds Amid Challenging Polls" />
          <Card description="Ava Mitchell’s Bold Economic Vision Resonates with Voters" />
          <Card description="Kamala Harris Gains Ground as the 2024 Election Heats Up" />
          <Card description="Republicans and Democrats Strike Historic Deal on Infrastructure" />
        </div>
      </div>
    </div>
  );
}

const Card = ({ description }: { description: string }) => {
  return (
    <div className="h-full w-full  flex flex-row gap-3 lg:flex-col">
      <div className="h-full w-full flex-1">
        <Image
          src="/market.avif"
          alt="market"
          width={800}
          height={800}
          className="object-cover w-full h-full rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1  flex-2">
        <div className="font-inter space-x-1 text-gray-600 text-xs">
          <span>Health</span>- <span>Sep 23, 2024</span>
        </div>
        <p className="md:text-lg/tight text-sm font-extralight text-[#020a1c]">
          {description}
        </p>
      </div>
    </div>
  );
};
const Heading = ({ description }: { description: string }) => {
  return (
    <div className="group space-y-2">
      <div className="flex flex-col gap-1  flex-2">
        <div className="font-inter space-x-1 text-gray-600 text-xs">
          <span>Health</span>- <span>Sep 23, 2024</span>
        </div>
        <p className="text-sm group-hover:underline font-medium text-gray-800 leading-snug group-hover:text-red-600 transition">
          {description}
        </p>
      </div>
    </div>
  );
};

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex relative  items-center gap-5 w-full pb-5 justify-between">
      <p className="text-nowrap  capitalize pl-4  relative before:content-[''] before:absolute before:left-0 before:h-full before:w-1 before:bg-red-600 text-sm text-gray-600">
        {title}
      </p>
      <div className="w-full  h-0.5 bg-neutral-100" />
      <Link href="/" className="text-sm flex items-center gap-2">
        <p className="text-nowrap text-gray-600">view all</p>
        <IconArrowRight className="size-4 text-red-600" />
      </Link>
    </div>
  );
};
