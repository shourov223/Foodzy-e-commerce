import Link from "next/link"

const ComonHeader = ({ title, link, pageName }) => {
    return (
        <section className="bg-[#F53E32] py-[25px]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <h2 className="text-[19px] font-bold leading-[19px] text-white">{title}</h2>
                    <div className="flex items-centers gap-1 text-white font-bold">
                        <Link className="text-[14px] font-medium text-white tracking-common" href={link}>Home</Link> /
                        <p className="text-[14px] font-medium text-white tracking-common">{pageName}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComonHeader
