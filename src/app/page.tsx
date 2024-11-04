import Image from "next/image";
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="h-screen flex flex-col md:flex-row items-center justify-between p-8">
        <div className="md:w-1/2 p-20">
          <h1 className="text-5xl font-bold mb-10">IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-2xl text-gray-700 mb-10">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] hover:bg-[#ac9f71] text-white font-bold py-2 px-5 rounded">
            Explore Now
          </button>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/download.png" // Correct path
            alt="Landing Illustration"
            width={450}
            height={500}
            className="h-auto rounded-md"
          />
        </div>
      </main>
    </div>
  );
}
