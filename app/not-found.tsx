import Image from "next/image";

export default function notFound() {
    return (
        <div className="container">
            <section>
                <p>Page Not Found</p>
                <Image src="/sadge.gif" alt="cute cat crying gif" width={340} height={300} />
            </section>
        </div>
    )
}