module.exports = {
  device: null,
  vacuumAddress: {
    name: "Xiaomi_Vacuum_Address",
    value: "Replace this by your vacuum address"
  },
  vacuumToken: {
    name: "Xiaomi_Vacuum_Token",
    value: "Replace this by your vacuum token"
  },
  allProperties: [
    "error_code",
    "state",
    "battery",
    "clean_time",
    "clean_area",
    "fan_power",
    "in_cleaning",
    "main_brush_work_time",
    "side_brush_work_time",
    "filter_work_time",
    "sensor_dirty_time"
  ],
  usefulProperties: [
    "battery",
    "fan_power",
    "main_brush_work_time",
    "side_brush_work_time",
    "filter_work_time",
    "sensor_dirty_time"
  ],
  careTime: {
    filter: 540000,
    sideBrush: 720000,
    mainBrush: 1080000,
    sensors: 108000
  },
  deviceToInstall: {
    device: {
      name: `Xiaomi Vacuum`,
      protocol: `xiaomi-vacuum`,
      service: `xiaomi-vacuum`,
      identifier: `xiaomi-vacuum`
    },
    types: [
      {
        name: "Start",
        type: "push",
        identifier: "start",
        sensor: false,
        min: 1,
        max: 1
      },
      {
        name: "Stop",
        type: "push",
        identifier: "stop",
        sensor: false,
        min: 1,
        max: 1
      },
      {
        name: "Pause",
        type: "push",
        identifier: "pause",
        sensor: false,
        min: 1,
        max: 1
      },
      {
        name: "Start current spot",
        type: "push",
        identifier: "start_current_spot",
        sensor: false,
        min: 1,
        max: 1
      },
      {
        name: "Find",
        type: "push",
        identifier: "find",
        sensor: false,
        min: 1,
        max: 1
      },
      {
        name: "Fan speed",
        type: "multilevel",
        identifier: "fan_speed",
        sensor: false,
        min: 30,
        max: 80
      },
      {
        name: "Battery level",
        type: "multilevel",
        identifier: "battery",
        sensor: true,
        min: 0,
        max: 100,
        unit: "%"
      },
      {
        name: "Filter",
        type: "multilevel",
        identifier: "filter",
        sensor: true,
        min: 0,
        max: 100,
        unit: "%"
      },
      {
        name: "Main brush",
        type: "multilevel",
        identifier: "main_brush",
        sensor: true,
        min: 0,
        max: 100,
        unit: "%"
      },
      {
        name: "Side brush",
        type: "multilevel",
        identifier: "side_brush",
        sensor: true,
        min: 0,
        max: 100,
        unit: "%"
      },
      {
        name: "Sensors",
        type: "multilevel",
        identifier: "sensors",
        sensor: true,
        min: 0,
        max: 100,
        unit: "%"
      }
    ]
  }
};
