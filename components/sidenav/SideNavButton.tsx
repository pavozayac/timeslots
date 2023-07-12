export default function SideNavButton({ name, iconComponent }: { name: string, iconComponent: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center bg-purple-300 px-10 py-5 mx-5 my-3 rounded-xl">
            <div className="flex-1 mr-auto">{iconComponent}</div>
            <span className="flex-1">{name}</span>
        </div>
    )

}