export default function SideNavButton({ name, iconComponent }: { name: string, iconComponent: React.ReactNode }) {
    return (
        <div className="flex hover:cursor-pointer hover:bg-purple-200 text-gray-700 hover:text-black px-10 py-5 mx-5 my-0 rounded-full">
            <div>{iconComponent}</div>
            <span className="font-medium ml-4">{name}</span>
        </div>
    )

}