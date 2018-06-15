export default {
    items: [
        {
            title: true,
            name: "PATIENT BHT OPTIONS",
            wrapper: {
                // optional wrapper object
                element: "", // required valid HTML5 element tag
                attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
            },
            class: "" // optional class names space delimited list for title item ex: "text-center"
        },
        {
            name: "Patient Profile",
            url: "#",
            icon: "icon-drop"
        },
        {
            name: "Prescription ",
            url: "#",
            icon: "icon-pencil"
        },

        {
            name: "Patient Allergies",
            url: "#",
            icon: "icon-puzzle",
            children: [
                {
                    name: "View allergies",
                    url: "#",
                    icon: "icon-puzzle"
                },
                {
                    name: "Add new allergy",
                    url: "#",
                    icon: "icon-puzzle"
                },

            ]
        },
        {
            name: "Charts",
            url: "#",
            icon: "icon-cursor",
            children: [
                {
                    name: "Fever Chart",
                    url: "#",
                    icon: "icon-cursor"
                },
                {
                    name: "Diabetic chart",
                    url: "#",
                    icon: "icon-cursor"
                },
                {
                    name: "Liquid balance chart",
                    url: "#",
                    icon: "icon-cursor"
                }
            ]
        },
        {
            name: "Patient Transfer",
            url: "#",
            icon: "icon-pie-chart",
            children: [
                {
                    name: "Internal Transfer",
                    url: "#",
                    icon: "icon-star"
                },
                {
                    name: "External Transfer",
                    url: "#",
                    icon: "icon-star"
                },

            ]
        },
        {
            name: "Discharge Patient",
            url: "#",
            icon: "icon-star"
        },
        {
            name: "Patient Diets ",
            url: "#",
            icon: "icon-bell"
        }

    ]
};
