'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  return (
    <>
      <main>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_1.jpg"
                  alt=""
                ></Image>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_2.jpg"
                  alt=""
                ></Image>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_3.jpg"
                  alt=""
                ></Image>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_4.jpg"
                  alt=""
                ></Image>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_1.jpg"
                  alt=""
                ></Image>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_6.jpg"
                  alt=""
                ></Image>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_8.jpg"
                  alt=""
                ></Image>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_7.jpg"
                  alt=""
                ></Image>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_9.jpg"
                  alt=""
                ></Image>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_10.jpg"
                  alt=""
                ></Image>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_12.jpg"
                  alt=""
                ></Image>
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/carousel_11.jpg"
                  alt=""
                ></Image>
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-col items-center justify-center overflow-hidden p-6 gap-4 rounded-lg"
            style={{
              marginRight: "20px",
              marginBottom: "20px",
              maskImage: "radial-gradient(circle, white 100%, black 100%)",
            }}
          >
            <video
              className="absolute z-0 w-full h-full object-cover rounded-lg"
              src="/videos/weights_video.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
            <div className="relative z-10 text-center">
              <h1 className="text-6xl font-bold text-white mb-4">
                Generate a personalized Trainings plan
              </h1>
              <button onClick={() =>
                router.push('/question')
              } className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Generate
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
     
    </>
  );
}
