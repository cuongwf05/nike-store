import Image from "next/image";

type SpotlightCardProps = {
    image: string;
    name: string;
};

export default function SpotlightCard({ image, name }: SpotlightCardProps) {
    return (
        <div className="flex flex-col items-center group cursor-pointer">
            <Image
                src={image}
                alt={name}
                width={150}
                height={50}
                className="transition duration-300 group-hover:scale-110"
            />

            <p className="mt-4 text-sm font-medium text-center">
                {name}
            </p>
        </div>
    );
}