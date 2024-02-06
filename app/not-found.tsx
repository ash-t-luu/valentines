import Image from "next/image";

export default function notFound() {
    return (
        <div className="container">
            <section>
                <h1>Page Not Found</h1>
                <Image src="/sadge.gif" alt="cute cat crying gif" width={350} height={300} />
            </section>
        </div>
    )
}