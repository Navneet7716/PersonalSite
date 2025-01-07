import { IconEye, IconMessage, IconHeart } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

function MyBlogsSection() {
  return (
    <div>
      <h1 className="text-center underline text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold py-10">
        My Blogs 📝
      </h1>
      <section className="flex flex-col items-center justify-center">
        <div className="w-full border-2 flex flex-col sm:flex-row md:flex-row lg:flex-row hover:bg-green-200 dark:hover:bg-green-950 lg:w-2/3 transition-colors">
          <Image
            src={"/blog1.jpg"}
            alt="blog image"
            width={300}
            height={500}
            className="object-fill flex-1 w-full"
          />
          <article className="p-3 flex flex-col gap-3">
            <a
              className="text-2xl font-bold hover:underline"
              target="_blank"
              href="https://dev.to/navneet7716/optimizing-sql-queries-h9j"
            >
              Optimizing SQL Queries by 23x!!!
            </a>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <IconEye />
                <span>32K+</span>
              </div>
              <div className="flex gap-1">
                <IconMessage />
                <span>30+</span>
              </div>
              <div className="flex gap-1">
                <IconHeart />
                <span>300+</span>
              </div>
            </div>
            <p>
              Our submissions table which has more than 700k records was
              performing horribly. The maximum time to just fetch the data from
              the table was more than 6 seconds. The query was rather simple.
              All we had in there were 4 joins, a couple of where clauses (about
              4), sorting read more by clicking on the title..
            </p>
            <span className="text-gray-400 mt-auto">Written on: 15th Jan 2024</span>
          </article>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-5">
        <div className="w-full border-2 flex flex-col sm:flex-row md:flex-row lg:flex-row hover:bg-green-200 dark:hover:bg-green-950 lg:w-2/3 transition-colors">
          <Image
            src={"/blog2.png"}
            alt="blog image"
            width={300}
            height={500}
            className="object-fill flex-1 w-full"
          />
          <article className="p-3 flex flex-col gap-3">
            <a
              className="text-2xl font-bold hover:underline"
              target="_blank"
              href="https://dev.to/navneet7716/optimizing-react-table-rendering-by-160x--5g3c"
            >
              Optimizing React Table Rendering By 160x !!!
            </a>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <IconEye />
                <span>18K+</span>
              </div>
              <div className="flex gap-1">
                <IconMessage />
                <span>25+</span>
              </div>
              <div className="flex gap-1">
                <IconHeart />
                <span>90+</span>
              </div>
            </div>
            <p>
            React is {"\"generally\""} a performant framework.. notice the {"\"\""} on generally, Yeah that is because at times in react land you do feel very limited because of all the re-rendering which leads to performance issues when you are trying to create a large/complicated component where there is a lot of moving parts...
            </p>
            <span className="text-gray-400 mt-auto">Written on: 9th May 2024</span>
          </article>
        </div>
      </section>
    </div>
  );
}

export default MyBlogsSection;
