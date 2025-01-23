import { BiHomeAlt2 } from "react-icons/bi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { PiGitBranchThin } from "react-icons/pi";
import { GoFileDirectory } from "react-icons/go";
import { TbCircleTriangle } from "react-icons/tb";
import { CiCircleList } from "react-icons/ci";
import { SlCalender } from "react-icons/sl"; 
import { CiViewBoard } from "react-icons/ci";
import { LuFileSearch } from "react-icons/lu";

export const sidebarItems = [
    {
        name: "Home",
        href: "/",
        icon: "RiDashboardLine",
    },
    {
        name: "My task",
        href: "/",
        icon: "MdContentPaste",
    },
    {
        name: "Inbox",
        href: "/",
        icon: "BsCartCheck",
    },
];

export const insights = [
    {
        name: "Reporting",
        href: "/dashboard",
        icon: "RiDashboardLine",
    },
    {
        name: "Portfolios",
        href: "/",
        icon: "MdContentPaste",
    },
    {
        name: "Goals",
        href: "/",
        icon: "BsCartCheck",
    },
];

export const ListItems = [
    {
        name: "List",
        href: "/",
        icon: "RiDashboardLine",
    },
    {
        name: "Board",
        href: "/",
        icon: "MdContentPaste",
    },
    {
        name: "Calender",
        href: "/",
        icon: "BsCartCheck",
    },
    {
        name: "Files",
        href: "/",
        icon: "BsCartCheck",
    },
];

export const iconMap = {
    RiDashboardLine: <BiHomeAlt2 />,
    MdContentPaste: <IoIosCheckmarkCircleOutline />,
    BsCartCheck: <FiBell />,
};

export const insightsicons = {
    RiDashboardLine: <PiGitBranchThin />,
    MdContentPaste: <GoFileDirectory />,
    BsCartCheck: <TbCircleTriangle />,
};

export const listIcons = {
    RiDashboardLine: <CiCircleList />,
    MdContentPaste: <CiViewBoard />,
    BsCartCheck: <SlCalender />,
    BsCartCheck: <LuFileSearch />,

};

