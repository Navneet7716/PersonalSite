import Image from "next/image";
import React from "react";

function Blogs() {
  return (
    <div>
      <h1 className="text-center underline text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold py-10 transition">
        My Blogs 📝
      </h1>
      <section className="flex flex-col items-center justify-center">
        <div className="w-full border-2 flex flex-col sm:flex-row md:flex-row lg:flex-row hover:bg-green-950 lg:w-2/3 transition">
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
            <p>
              Our submissions table which has more than 700k records was
              performing horribly. The maximum time to just fetch the data from
              the table was more than 6 seconds. The query was rather simple.
              All we had in there were 4 joins, a couple of where clauses (about
              4), sorting read more by clicking on the title..
            </p>
            <span className="text-gray-400">Written on: 15th Jan 2024</span>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
