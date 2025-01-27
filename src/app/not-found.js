import Link from "next/link";

export default function NotFound() {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-center font-bold mt-9 text-6X1">404 - Page Not Found</h1>
            <Link href="/">
                <a>Volte para home</a>
            </Link>
        </div>
    );
}