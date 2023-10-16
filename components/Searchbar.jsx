"use client";
import { scrapeAndStoreProduct } from "@/lib/actions";
import { useState } from "react";

const isValidAmazonProductURL = (url) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidLink = isValidAmazonProductURL(search);
    if (!isValidLink) return alert("Please provide a valid Amazon link");
    try {
      setIsLoading(true);
      // Scrape the product page
      const product = await scrapeAndStoreProduct(search);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className="mt-10">
        <div className="container mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Enter Product Link"
              value={search}
              className="py-2 px-3 border-[1px] rounded-lg w-full"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-black  text-white"
              disabled={search === ""}
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Searchbar;
