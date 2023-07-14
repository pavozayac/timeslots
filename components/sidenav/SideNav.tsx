import { IconContext } from "react-icons"
import SideNavButton from "./SideNavButton"
import { MdCalendarToday, MdGroup, MdLockClock, MdOutlineCalendarToday, MdOutlineGroup, MdOutlineLockClock, MdOutlineRule, MdOutlineSettings, MdPerson, MdPerson2, MdPerson3, MdRule, MdSettings } from "react-icons/md"

const iconSize = "22"

const buttons = [
    { name: 'Bruh1', iconComponent: <MdOutlineCalendarToday size={iconSize} /> },
    { name: 'Bruh2', iconComponent: <MdOutlineGroup size={iconSize} /> },
    { name: 'Bruh3', iconComponent: <MdOutlineLockClock size={iconSize} /> },
    { name: 'Bruh4', iconComponent: <MdOutlineRule size={iconSize} /> },
    { name: 'Bruh5', iconComponent: <MdOutlineSettings size={iconSize} /> },
]

export default function SideNav() {
    return (
        <div className="fixed top-0 left-0 h-screen flex-col bg-light-500 w-56">
            {buttons.map(button => (
                <SideNavButton key={button.name} name={button.name} iconComponent={button.iconComponent} />
            ))}
        </div>
    )
}