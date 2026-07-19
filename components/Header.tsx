import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black text-white">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-8">
                <Link href="/" className="text-4xl font-black italic tracking-tight">
                    NIKE
                </Link>

                <nav>
                    <ul className="flex items-center gap-14 text-sm font-medium uppercase">
                        <li>
                            <Link href="/collection" className="transition hover:text-gray-300">
                                Bộ sưu tập
                            </Link>
                        </li>

                        <li>
                            <Link href="/lookbook" className="font-bold transition hover:text-gray-300">
                                Lookbook
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact" className="transition hover:text-gray-300">
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button className="transition hover:text-gray-300">
                    <ShoppingBag size={28} strokeWidth={2} />
                </button>
            </div>
        </header>
    );
}