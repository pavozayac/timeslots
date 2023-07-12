import { IconContext } from "react-icons"
import SideNavButton from "./SideNavButton"
import { MdCalendarToday } from "react-icons/md"

const iconSize = "22"

const buttons = [
    { name: 'Bruh', iconComponent: <MdCalendarToday size={iconSize} /> },
    { name: 'Bruh', iconComponent: <MdCalendarToday size={iconSize} /> },
    { name: 'Bruh', iconComponent: <MdCalendarToday size={iconSize} /> },
    { name: 'Bruh', iconComponent: <MdCalendarToday size={iconSize} /> },
    { name: 'Bruh', iconComponent: <MdCalendarToday size={iconSize} /> },
]

export default function SideNav() {
    return (
        <div className="fixed top-0 left-0 w-64 h-screen flex-col bg-light-500">
            {buttons.map(button => (
                <SideNavButton name={button.name} iconComponent={button.iconComponent} />
            ))}
        </div>
    )
}