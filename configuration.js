export const getConfiguration = (content) => {
  return {
    options: {
      sizeOptions: true,
    },
    settingsOptions: {
      text: true,
      colors: true,
      padding: true,
      border: true,
      background: true,
    },
    properties: {
      firstDayOfWeek: {
        label: 'First day of week',
        type: 'TextSelect',
        options: {
          options: [
            { value: 0, label: 'Sunday' },
            { value: 1, label: 'Monday' }
          ]
        },
        defaultValue: 0,
        bindable: true,
      }
    }
  }
} 