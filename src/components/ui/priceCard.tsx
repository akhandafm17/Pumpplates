export default function PriceCard() {
    return (
        <>
        <div className="flex justify-center items-center w-full pt-20">
        <div className="space-x-6 flex items-start">
            
            <div className="flex flex-row">
             {/* 1-month trainingsplan card */}
                <div className="w-96 p-8 bg-black text-center rounded-3xl pr-16 shadow-xl">
                    <h1 className="text-white font-semibold text-2xl">1-month Trainingsplan</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">€ </span>
                        <span className="text-3xl text-white font-semibold">5</span>
                        <span className="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr className="mt-4 border-1"></hr>
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                Get started with <span className="text-white">messaging</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                Flexible <span className="text-white">team meetings</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                <span className="text-white">5 TB</span> cloud storage
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-yellow-400 mt-8 rounded-xl text-black">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                                <span className="pl-2 material-icons align-middle text-sm">
                                    east
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
             {/* 3-month trainingsplan card */}
                <div className="w-80 p-8 bg-black text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                    <h1 className="text-white font-semibold text-2xl pt-2">3-month Trainingsplan</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">€ </span>
                        <span className="text-3xl font-semibold">15</span>
                        <span className="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr className="mt-4 border-1 border-gray-600"></hr>
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                All features in <span className="text-white">Basic</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                Flexible <span className="text-white">call scheduling</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                <span className="text-white">15 TB</span> cloud storage
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-yellow-400 mt-8 rounded-xl text-black">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                                <span className="pl-2 material-icons align-middle text-sm">
                                    east
                                </span>
                            </p>
                        </a>
                    </div>
                    <div className="absolute top-4 right-4">
                        <p className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                    </div>
                </div>
              {/* Full trainingsplan card */}
                <div className="w-96 p-8 bg-black text-center rounded-3xl pl-16 shadow-xl">
                    <h1 className="text-white font-semibold text-2xl">Full Trainingsplan</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">€ </span>
                        <span className="text-3xl font-semibold">25</span>
                        <span className="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr className="mt-4 border-1"></hr>
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                All features in <span className="text-white">Startup</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                Growth <span className="text-white">oriented</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                <span className="text-white">Unlimited</span> cloud storage
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-yellow-400 mt-8 rounded-xl text-black">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                                <span className="pl-2 material-icons align-middle text-sm">
                                    east
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}