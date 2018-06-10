export default {
    items: [
        {
            name: "Dashboard",
            url: "/dashboard",
            icon: "icon-speedometer",
            badge: {
                variant: "info"
            }
        },
        {
            title: true,
            name: "Main Navigation",
            wrapper: {
                // optional wrapper object
                element: "", // required valid HTML5 element tag
                attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
            },
            class: "" // optional class names space delimited list for title item ex: "text-center"
        },
        {
            name: "Ward Admision",
            url: "/theme/colors",
            icon: "icon-drop"
        },
        {
            name: "New Admission",
            url: "/theme/typography",
            icon: "icon-pencil"
        },
        {
            name: "Transfer Admission",
            url: "/base",
            icon: "icon-puzzle",
        },
        {
            name: "My Wards ",
            url: "/buttons",
            icon: "icon-cursor",
            children: [
                {
                    name: "Ward1",
                    url: "/buttons/buttons",
                    icon: "icon-cursor"
                }
            ]
        },
        {
            name: "Patient Archived details ",
            url: "/charts",
            icon: "icon-pie-chart"
        }

    ]
};
