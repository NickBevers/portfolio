export default function Page({ params }: { params: { slug: string } }) {
    return <div>Project - {params.slug}</div>;
}
