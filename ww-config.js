export default {
  editor: {
    label: {
      en: "Calendar"
    },
    icon: 'calendar',
  },
  properties: {
    firstDayOfWeek: {
      label: {
        en: "First day of week"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: 0, label: "Sunday" },
          { value: 1, label: "Monday" }
        ]
      },
      defaultValue: 0,
      bindable: true
    },
    showWeekNumbers: {
      label: {
        en: "Show week numbers"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true
    }
  }
} 