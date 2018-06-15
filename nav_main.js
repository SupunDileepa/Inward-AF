export default {
    items: [
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
            url: "#",
            icon: "icon-drop"
        },
        {
            name: "New Admission",
            url: "#",
            icon: "icon-pencil"
        },
        {
            name: "Transfer Admission",
            url: "#",
            icon: "icon-puzzle",
        },
        {
            name: "My Wards ",
            url: "#",
            icon: "icon-cursor",
            children: [
                {
                    name: "Ward1",
                    url: "#",
                    icon: "icon-cursor"
                }
            ]
        },
        {
            name: "Patient Archived details ",
            url: "#",
            icon: "icon-pie-chart"
        }

    ]
};
