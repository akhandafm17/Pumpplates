import PriceCard from "../../../components/ui/priceCard";

export default function Pricing() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center font-semibold mb-12">
                <h1 className="text-5xl">
                    <span className="text-yellow-400 tracking-wide">Flexible </span>
                    <span className="text-black">Plans</span>
                </h1>
                <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                    Choose a plan that works best for you.
                </p>
            </div>
            <PriceCard />
        </div>
    );
}
