export default function Page({ params }: { params: { slug: string } }) {
    return <div style={{marginTop: '10rem'}}>Project - {params.slug}</div>;
}
