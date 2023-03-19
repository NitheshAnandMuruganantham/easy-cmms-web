export const schema = {
  type: "object",
  properties: {
    line_1_running_hours: {
      type: "integer",
      description: "running hours of line 1.",
    },
    line_2_running_hours: {
      type: "integer",
      description: "running hours of line 2.",
    },
    line_1_target: {
      type: "integer",
      description: "line 1 target in tons.",
    },
    line_2_target: {
      type: "integer",
      description: "line 2 target in tons.",
    },
    line_1_actual: {
      type: "integer",
      description: "line 1 target in tons.",
    },
    line_2_actual: {
      type: "integer",
      description: "line 2 target in tons.",
    },
    line_1_stoppage_hours: {
      type: "integer",
      description: "stoppage hours of line 1.",
    },
    line_1_stoppage_reason: {
      type: "array",
      items: {
        type: "object",
        properties: {
          stoppage_reason: {
            type: "string",
            description: "stoppage reason",
          },
          stoppage_hours: {
            type: "integer",
            description: "stoppage hours of line 2.",
          },
        },
      },
    },
    line_2_stoppage_hours: {
      type: "integer",
      description: "stoppage hours of line 2.",
    },
    line_2_stoppage_reason: {
      type: "array",
      items: {
        type: "object",
        properties: {
          stoppage_reason: {
            type: "string",
            description: "stoppage reason",
          },
          stoppage_hours: {
            type: "integer",
            description: "stoppage hours of line 2.",
          },
        },
      },
    },
  },
  required: [
    "line_1_running_hours",
    "line_2_running_hours",
    "line_1_target",
    "line_2_target",
    "line_1_actual",
    "line_2_actual",
    "line_1_stoppage_hours",
    "line_2_stoppage_hours",
  ],
};

export const uiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      label: "line 1 running hours",
      scope: "#/properties/line_1_running_hours",
    },
    {
      type: "Control",
      label: "line 2 running hours",
      scope: "#/properties/line_2_running_hours",
    },
    {
      type: "Control",
      label: "line 1 target",
      scope: "#/properties/line_1_target",
    },
    {
      type: "Control",
      label: "line 2 target",
      scope: "#/properties/line_2_target",
    },
    {
      type: "Control",
      label: "line 1 actual",
      scope: "#/properties/line_1_actual",
    },
    {
      type: "Control",
      label: "line 2 actual",
      scope: "#/properties/line_2_actual",
    },
    {
      type: "Control",
      label: "line 1 stoppage hours",
      scope: "#/properties/line_1_stoppage_hours",
    },
    {
      type: "Control",
      label: "line 2 stoppage hours",
      scope: "#/properties/line_2_stoppage_hours",
    },
    {
      type: "Control",
      label: "line 1 stoppage reason",
      scope: "#/properties/line_1_stoppage_reason",
    },
    {
      type: "Control",
      label: "line 2 stoppage reason",
      scope: "#/properties/line_2_stoppage_reason",
    },
  ],
};
