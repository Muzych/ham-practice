export default function MainLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className="container grid itmes-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex flex-col items-center gap-2">
                <p className="text-4xl font-bold">业余无线电考试练习</p>
                {children}
            </div>
        </section>
    )
}