export default {
  editor: {
    label: {
      en: "Calendar"
    },
    icon: 'calendar'
  },
  options: {
    sizeOptions: true
  },
  settingsOptions: {
    text: true,
    colors: true,
    padding: true,
    border: true,
    background: true
  },
  properties: {
    firstDayOfWeek: {
      label: {
        en: "First day of week"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: 0, label: { en: "Sunday" } },
          { value: 1, label: { en: "Monday" } }
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