export default {
  items: [
    {
      name: "Patient BHT Options",
      url: "/ward/admission",
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
      name: "Patient Profile",
      url: "/ward/admission",
      icon: "icon-drop"
    },
    {
      name: "Prescription",
      url: "/bht/prescriptions",
      icon: "icon-drop"
    },


    {
      name: "Laboratory Test",
      icon: "icon-drop",

            children: [
        {
          name: "View Test Results",
          url: "/bht/viewtests",
          
        },
        {
          name: "New Test Request",
          url: "/bht/newtests",
          
        },
     
      ]

    },



    {
      name: "Patient Allergies",
      url: "/patien Allergies",
      icon: "icon-drop",

      children: [
        {
          name: "View Allergies",
          url: "/viewtests",
          
        },
        {
          name: "Add New Allergy",
          url: "/newtests",
          
        },
     
      ]

    },



    {
      name: "Charts",
      url: "/theme/colors",
      icon: "icon-drop",

      children: [
        {
          name: "Fever Chart",
          url: "/viewtests",
          
        },
        {
          name: "Diabetic Chart",
          url: "/newtests",
          
        },

          {
          name: "Liquid Balance Chart",
          url: "/newtests",
          
        },
     
      ]

    },



    {
      name: "Patient Transfer",
      url: "/theme/colors",
      icon: "icon-drop",

     children: [
        {
          name: "Internal Transfer",
          url: "/viewtests",
          
        },
        {
          name: "External Transfer",
          url: "/newtests",
          
        },
     
      ]

    },
    {
      name: "Discharge Patient",
      url: "/theme/colors",
      icon: "icon-drop"
    },

    {
      name: "Patient Diets",
      icon: "icon-star",
      children: [
        {
          name: "Patient Diets",
          url: "/login",

        },
        {
          name: "View Patient Diets",
          url: "/register",

        },
     
      ]
    }
  ]
};