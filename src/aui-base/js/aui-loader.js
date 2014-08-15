/* This file is auto-generated by (yogi loader --yes --mix --js js/aui-loader.js --json js/aui-loader.json --start ../) */

/*jshint maxlen:900, eqeqeq: false */

/**
 * YUI 3 module metadata
 * @module loader
 * @submodule loader-yui3
 */
YUI.Env[Y.version].modules = YUI.Env[Y.version].modules || {};
Y.mix(YUI.Env[Y.version].modules, {
    "aui-ace-autocomplete-base": {
        "requires": [
            "aui-ace-editor"
        ]
    },
    "aui-ace-autocomplete-freemarker": {
        "requires": [
            "aui-ace-autocomplete-templateprocessor"
        ]
    },
    "aui-ace-autocomplete-list": {
        "requires": [
            "aui-ace-autocomplete-base",
            "overlay",
            "widget-autohide"
        ],
        "skinnable": true
    },
    "aui-ace-autocomplete-plugin": {
        "requires": [
            "aui-ace-autocomplete-list",
            "plugin"
        ]
    },
    "aui-ace-autocomplete-templateprocessor": {
        "requires": [
            "aui-ace-autocomplete-base"
        ]
    },
    "aui-ace-autocomplete-velocity": {
        "requires": [
            "aui-ace-autocomplete-templateprocessor"
        ]
    },
    "aui-ace-editor": {
        "requires": [
            "aui-node",
            "aui-component"
        ]
    },
    "aui-aria": {
        "requires": [
            "plugin",
            "aui-component"
        ]
    },
    "aui-arraysort": {
        "requires": [
            "arraysort"
        ]
    },
    "aui-audio": {
        "requires": [
            "aui-node",
            "aui-component",
            "querystring-stringify-simple"
        ],
        "skinnable": true
    },
    "aui-autocomplete-deprecated": {
        "requires": [
            "aui-base-deprecated",
            "aui-overlay-base-deprecated",
            "datasource",
            "dataschema",
            "aui-form-combobox-deprecated"
        ],
        "skinnable": true
    },
    "aui-autosize": {
        "use": [
            "aui-autosize-iframe"
        ]
    },
    "aui-autosize-deprecated": {
        "requires": [
            "event-valuechange",
            "plugin",
            "aui-base-deprecated"
        ],
        "skinnable": true
    },
    "aui-autosize-iframe": {
        "requires": [
            "plugin",
            "aui-component",
            "aui-timer",
            "aui-node-base"
        ]
    },
    "aui-base": {
        "use": [
            "oop",
            "yui-throttle",
            "aui-classnamemanager",
            "aui-debounce",
            "aui-base-core",
            "aui-base-lang",
            "aui-node-base"
        ]
    },
    "aui-base-core": {},
    "aui-base-deprecated": {
        "use": [
            "aui-base",
            "aui-node",
            "aui-component",
            "aui-delayed-task-deprecated",
            "aui-selector",
            "aui-event-base"
        ]
    },
    "aui-base-html5-shiv": {
        "condition": {
            "name": "aui-base-html5-shiv",
            "trigger": "node-base",
            "ua": "ie"
        }
    },
    "aui-base-lang": {},
    "aui-button": {
        "use": [
            "aui-button-core"
        ]
    },
    "aui-button-core": {
        "requires": [
            "button",
            "button-group",
            "button-plugin",
            "aui-component",
            "aui-widget-cssclass",
            "aui-widget-toggle"
        ]
    },
    "aui-button-item-deprecated": {
        "requires": [
            "aui-base-deprecated",
            "aui-state-interaction-deprecated",
            "widget-child"
        ],
        "skinnable": true
    },
    "aui-button-search-cancel": {
        "requires": [
            "array-invoke",
            "base",
            "base-build",
            "event-focus",
            "node-screen",
            "node-event-delegate",
            "aui-node-base",
            "aui-classnamemanager",
            "aui-event-input"
        ]
    },
    "aui-carousel": {
        "requires": [
            "anim",
            "node-event-delegate",
            "aui-component"
        ],
        "skinnable": true
    },
    "aui-char-counter": {
        "requires": [
            "aui-node",
            "aui-event-input",
            "aui-component"
        ]
    },
    "aui-chart-deprecated": {
        "requires": [
            "datasource",
            "json",
            "aui-swf-deprecated"
        ]
    },
    "aui-classnamemanager": {
        "requires": [
            "classnamemanager"
        ]
    },
    "aui-collection": {
        "use": [
            "aui-map",
            "aui-set",
            "aui-linkedset"
        ]
    },
    "aui-color-palette": {
        "requires": [
            "array-extras",
            "aui-palette",
            "color-base",
            "node-core",
            "aui-widget-cssclass",
            "aui-widget-toggle"
        ],
        "skinnable": true
    },
    "aui-color-picker-base": {
        "requires": [
            "aui-color-palette",
            "aui-hsva-palette-modal",
            "event-outside"
        ],
        "skinnable": true
    },
    "aui-color-picker-base-deprecated": {
        "requires": [
            "dd-drag",
            "slider",
            "aui-button-item-deprecated",
            "aui-color-util-deprecated",
            "aui-form-base-deprecated",
            "aui-overlay-context-deprecated",
            "aui-panel-deprecated"
        ],
        "skinnable": true
    },
    "aui-color-picker-deprecated": {
        "use": [
            "aui-color-picker-base-deprecated",
            "aui-color-picker-grid-plugin-deprecated"
        ]
    },
    "aui-color-picker-grid-plugin-deprecated": {
        "requires": [
            "plugin",
            "aui-color-picker-base-deprecated"
        ],
        "skinnable": true
    },
    "aui-color-picker-popover": {
        "requires": [
            "aui-color-picker-base",
            "aui-popover",
            "aui-widget-cssclass",
            "aui-widget-toggle"
        ],
        "skinnable": true
    },
    "aui-color-util-deprecated": {
        "requires": []
    },
    "aui-component": {
        "requires": [
            "aui-classnamemanager",
            "aui-widget-cssclass",
            "aui-widget-toggle",
            "base-build",
            "widget-base"
        ]
    },
    "aui-data-set-deprecated": {
        "requires": [
            "oop",
            "collection",
            "base"
        ]
    },
    "aui-datasource-control-base-deprecated": {
        "requires": [
            "datasource",
            "dataschema",
            "aui-base-deprecated"
        ]
    },
    "aui-datasource-control-deprecated": {
        "use": [
            "aui-datasource-control-base-deprecated",
            "aui-input-text-control-deprecated"
        ]
    },
    "aui-datatable": {
        "use": [
            "aui-datatable-edit",
            "aui-datatable-highlight",
            "aui-datatable-selection",
            "aui-datatable-property-list"
        ]
    },
    "aui-datatable-core": {
        "requires": [
            "datatable-base",
            "event-key",
            "aui-event-base"
        ],
        "skinnable": true
    },
    "aui-datatable-edit": {
        "requires": [
            "datatable-base",
            "calendar",
            "escape",
            "overlay",
            "sortable",
            "aui-datatype",
            "aui-toolbar",
            "aui-form-validator",
            "aui-datatable-core"
        ],
        "skinnable": true
    },
    "aui-datatable-highlight": {
        "requires": [
            "aui-datatable-selection"
        ],
        "skinnable": true
    },
    "aui-datatable-property-list": {
        "requires": [
            "datatable-scroll",
            "datatable-sort",
            "aui-datatable-core",
            "aui-datatable-edit",
            "aui-datatable-highlight",
            "aui-datatable-selection",
            "aui-widget-cssclass",
            "aui-widget-toggle"
        ],
        "skinnable": true
    },
    "aui-datatable-selection": {
        "requires": [
            "aui-datatable-core"
        ],
        "skinnable": true
    },
    "aui-datatype": {
        "requires": [
            "datatype",
            "aui-datatype-date-parse"
        ]
    },
    "aui-datatype-date-parse": {
        "requires": [
            "aui-base-lang",
            "datatype-date-format",
            "datatype-date-parse",
            "intl"
        ]
    },
    "aui-datepicker": {
        "requires": [
            "calendar",
            "base",
            "base-build",
            "aui-datepicker-delegate",
            "aui-datepicker-popover"
        ],
        "skinnable": true
    },
    "aui-datepicker-base-deprecated": {
        "requires": [
            "calendar",
            "aui-datatype",
            "aui-overlay-context-deprecated"
        ],
        "skinnable": true
    },
    "aui-datepicker-delegate": {
        "requires": [
            "node-event-delegate",
            "event-focus",
            "aui-event-input",
            "aui-datatype-date-parse"
        ]
    },
    "aui-datepicker-deprecated": {
        "skinnable": true,
        "use": [
            "aui-datepicker-base-deprecated",
            "aui-datepicker-select-deprecated"
        ]
    },
    "aui-datepicker-native": {
        "requires": [
            "base",
            "base-build",
            "aui-node-base",
            "aui-datepicker-delegate"
        ]
    },
    "aui-datepicker-popover": {
        "requires": [
            "aui-classnamemanager",
            "aui-popover"
        ]
    },
    "aui-datepicker-select-deprecated": {
        "requires": [
            "aui-datepicker-base-deprecated",
            "aui-button-item-deprecated"
        ],
        "skinnable": true
    },
    "aui-debounce": {},
    "aui-delayed-task-deprecated": {
        "requires": [
            "yui-base"
        ]
    },
    "aui-diagram-builder": {
        "use": [
            "aui-diagram-builder-base",
            "aui-diagram-builder-connector",
            "aui-diagram-builder-impl"
        ]
    },
    "aui-diagram-builder-base": {
        "requires": [
            "dd",
            "collection",
            "aui-tabview",
            "aui-datatable-property-list"
        ],
        "skinnable": true
    },
    "aui-diagram-builder-connector": {
        "requires": [
            "arraylist-add",
            "arraylist-filter",
            "json",
            "graphics",
            "dd"
        ],
        "skinnable": true
    },
    "aui-diagram-builder-impl": {
        "requires": [
            "overlay",
            "aui-map",
            "aui-diagram-builder-base",
            "aui-diagram-builder-connector"
        ],
        "skinnable": true
    },
    "aui-dialog-iframe-deprecated": {
        "requires": [
            "plugin",
            "aui-base-deprecated",
            "aui-loading-mask-deprecated"
        ],
        "skinnable": true
    },
    "aui-editable-deprecated": {
        "requires": [
            "aui-base-deprecated",
            "aui-form-combobox-deprecated"
        ],
        "skinnable": true
    },
    "aui-event": {
        "use": [
            "aui-event-base"
        ]
    },
    "aui-event-base": {
        "requires": [
            "event-base"
        ]
    },
    "aui-event-delegate-change": {
        "condition": {
            "name": "aui-event-delegate-change",
            "trigger": "event-base-ie",
            "ua": "ie"
        },
        "requires": [
            "aui-event-base",
            "event-delegate",
            "event-synthetic"
        ]
    },
    "aui-event-delegate-submit": {
        "condition": {
            "name": "aui-event-delegate-submit",
            "trigger": "event-base-ie",
            "ua": "ie"
        },
        "requires": [
            "aui-event-base",
            "event-delegate",
            "event-synthetic"
        ]
    },
    "aui-event-input": {
        "condition": {
            "name": "aui-event-input",
            "test": function(A) {
    var supportsDOMEvent = A.supportsDOMEvent,
        testFeature = A.Features.test,
        addFeature = A.Features.add;

    if (testFeature('event', 'input') === undefined) {
        addFeature('event', 'input', {
            test: function() {
                return supportsDOMEvent(document.createElement('textarea'), 'input');
            }
        });
    }

    return !testFeature('event', 'input');
},
            "trigger": "aui-event-base"
        },
        "requires": [
            "aui-event-base",
            "event-delegate",
            "event-synthetic"
        ]
    },
    "aui-form-base-deprecated": {
        "requires": [
            "io-form",
            "querystring-parse",
            "aui-base-deprecated",
            "aui-data-set-deprecated",
            "aui-form-field-deprecated"
        ]
    },
    "aui-form-builder": {
        "skinnable": true,
        "use": [
            "aui-form-builder-base",
            "aui-form-builder-field-base",
            "aui-form-builder-field-button",
            "aui-form-builder-field-checkbox",
            "aui-form-builder-field-fieldset",
            "aui-form-builder-field-file-upload",
            "aui-form-builder-field-multiple-choice",
            "aui-form-builder-field-radio",
            "aui-form-builder-field-select",
            "aui-form-builder-field-text",
            "aui-form-builder-field-textarea",
            "aui-tooltip-base"
        ]
    },
    "aui-form-builder-base": {
        "requires": [
            "escape",
            "transition",
            "aui-button",
            "aui-collection",
            "aui-diagram-builder-base",
            "aui-sortable-list",
            "aui-tabview"
        ],
        "skinnable": true
    },
    "aui-form-builder-field-base": {
        "requires": [
            "panel",
            "aui-datatype"
        ],
        "skinnable": true
    },
    "aui-form-builder-field-button": {
        "requires": [
            "aui-form-builder-field-base"
        ]
    },
    "aui-form-builder-field-checkbox": {
        "requires": [
            "aui-form-builder-field-base"
        ]
    },
    "aui-form-builder-field-fieldset": {
        "requires": [
            "aui-form-builder-field-base"
        ]
    },
    "aui-form-builder-field-file-upload": {
        "requires": [
            "aui-form-builder-field-base"
        ]
    },
    "aui-form-builder-field-multiple-choice": {
        "requires": [
            "aui-form-builder-field-base"
        ]
    },
    "aui-form-builder-field-radio": {
        "requires": [
            "aui-form-builder-field-base"
        ]
    },
    "aui-form-builder-field-select": {
        "requires": [
            "aui-form-builder-field-base"
        ]
    },
    "aui-form-builder-field-text": {
        "requires": [
            "aui-form-builder-field-base"
        ]
    },
    "aui-form-builder-field-textarea": {
        "requires": [
            "aui-form-builder-field-base"
        ]
    },
    "aui-form-combobox-deprecated": {
        "requires": [
            "aui-form-textarea-deprecated",
            "aui-toolbar"
        ],
        "skinnable": true
    },
    "aui-form-deprecated": {
        "use": [
            "aui-form-base-deprecated",
            "aui-form-combobox-deprecated",
            "aui-form-field-deprecated",
            "aui-form-select-deprecated",
            "aui-form-textarea-deprecated",
            "aui-form-textfield-deprecated"
        ]
    },
    "aui-form-field-deprecated": {
        "requires": [
            "aui-base-deprecated",
            "aui-component"
        ]
    },
    "aui-form-select-deprecated": {
        "requires": [
            "aui-form-field-deprecated"
        ]
    },
    "aui-form-textarea-deprecated": {
        "requires": [
            "node-pluginhost",
            "aui-autosize-deprecated",
            "aui-form-textfield-deprecated"
        ]
    },
    "aui-form-textfield-deprecated": {
        "requires": [
            "aui-form-field-deprecated"
        ]
    },
    "aui-form-validator": {
        "requires": [
            "escape",
            "selector-css3",
            "node-event-delegate",
            "aui-node",
            "aui-component",
            "aui-event-input"
        ]
    },
    "aui-hsv-palette": {
        "requires": [
            "aui-classnamemanager",
            "aui-widget-cssclass",
            "aui-widget-toggle",
            "aui-event-input",
            "base-build",
            "clickable-rail",
            "color-hsv",
            "dd-constrain",
            "slider",
            "widget"
        ],
        "skinnable": true
    },
    "aui-hsva-palette": {
        "requires": [
            "aui-hsv-palette"
        ],
        "skinnable": true
    },
    "aui-hsva-palette-modal": {
        "requires": [
            "aui-hsva-palette",
            "aui-modal"
        ],
        "skinnable": true
    },
    "aui-image-cropper": {
        "requires": [
            "resize-base",
            "resize-constrain",
            "dd-constrain",
            "aui-node-base",
            "aui-component"
        ],
        "skinnable": true
    },
    "aui-image-viewer": {
        "use": [
            "aui-image-viewer-base",
            "aui-image-viewer-gallery",
            "aui-image-viewer-media"
        ]
    },
    "aui-image-viewer-base": {
        "requires": [
            "anim",
            "widget",
            "widget-modality",
            "widget-position",
            "widget-position-align",
            "widget-position-constrain",
            "widget-stack",
            "widget-stdmod",
            "aui-event",
            "aui-node-base",
            "aui-widget-cssclass",
            "aui-widget-toggle"
        ],
        "skinnable": true
    },
    "aui-image-viewer-gallery": {
        "requires": [
            "aui-image-viewer-base",
            "aui-pagination",
            "aui-toolbar"
        ],
        "skinnable": true
    },
    "aui-image-viewer-media": {
        "requires": [
            "plugin",
            "aui-image-viewer-base",
            "aui-pagination",
            "aui-toolbar"
        ]
    },
    "aui-input-text-control-deprecated": {
        "requires": [
            "aui-base-deprecated",
            "aui-datasource-control-base-deprecated",
            "aui-form-combobox-deprecated"
        ]
    },
    "aui-io": {
        "use": [
            "aui-io-request"
        ]
    },
    "aui-io-deprecated": {
        "use": [
            "aui-io-request",
            "aui-io-plugin-deprecated"
        ]
    },
    "aui-io-plugin-deprecated": {
        "requires": [
            "aui-overlay-base-deprecated",
            "aui-parse-content",
            "aui-io-request",
            "aui-loading-mask-deprecated"
        ]
    },
    "aui-io-request": {
        "requires": [
            "io-base",
            "json",
            "plugin",
            "querystring-stringify",
            "aui-component"
        ]
    },
    "aui-io-request-deprecated": {
        "requires": [
            "io-base",
            "json",
            "plugin",
            "querystring-stringify",
            "aui-base-deprecated"
        ]
    },
    "aui-linkedset": {
        "requires": [
            "aui-set"
        ]
    },
    "aui-live-search-deprecated": {
        "requires": [
            "aui-base-deprecated"
        ]
    },
    "aui-loading-mask-deprecated": {
        "requires": [
            "plugin",
            "aui-overlay-mask-deprecated"
        ],
        "skinnable": true
    },
    "aui-map": {
        "requires": [
            "base-build"
        ]
    },
    "aui-messaging": {
        "requires": [
            "querystring",
            "aui-timer"
        ]
    },
    "aui-modal": {
        "requires": [
            "widget",
            "widget-autohide",
            "widget-buttons",
            "widget-modality",
            "widget-position",
            "widget-position-align",
            "widget-position-constrain",
            "widget-stack",
            "widget-stdmod",
            "dd-plugin",
            "dd-constrain",
            "resize-plugin",
            "aui-classnamemanager",
            "aui-widget-cssclass",
            "aui-widget-toggle",
            "aui-widget-toolbars"
        ]
    },
    "aui-node": {
        "use": [
            "aui-node-base"
        ]
    },
    "aui-node-base": {
        "requires": [
            "array-extras",
            "aui-base-lang",
            "aui-classnamemanager",
            "aui-debounce",
            "node"
        ]
    },
    "aui-node-html5": {
        "condition": {
            "name": "aui-node-html5",
            "trigger": "aui-node",
            "ua": "ie"
        },
        "requires": [
            "collection",
            "aui-node-base"
        ]
    },
    "aui-overlay-base-deprecated": {
        "requires": [
            "widget-position",
            "widget-stack",
            "widget-position-align",
            "widget-position-constrain",
            "widget-stdmod",
            "aui-component"
        ]
    },
    "aui-overlay-context-deprecated": {
        "requires": [
            "aui-overlay-manager-deprecated",
            "aui-delayed-task-deprecated",
            "aui-aria"
        ]
    },
    "aui-overlay-context-panel-deprecated": {
        "requires": [
            "anim",
            "aui-overlay-context-deprecated"
        ],
        "skinnable": true
    },
    "aui-overlay-deprecated": {
        "use": [
            "aui-overlay-base-deprecated",
            "aui-overlay-context-deprecated",
            "aui-overlay-context-panel-deprecated",
            "aui-overlay-manager-deprecated",
            "aui-overlay-mask-deprecated"
        ]
    },
    "aui-overlay-manager-deprecated": {
        "requires": [
            "overlay",
            "plugin",
            "aui-base-deprecated",
            "aui-overlay-base-deprecated"
        ]
    },
    "aui-overlay-mask-deprecated": {
        "requires": [
            "event-resize",
            "aui-base-deprecated",
            "aui-overlay-base-deprecated"
        ],
        "skinnable": true
    },
    "aui-pagination": {
        "requires": [
            "node-event-delegate",
            "aui-node",
            "aui-component",
            "widget-htmlparser"
        ]
    },
    "aui-palette": {
        "requires": [
            "base-build",
            "event-hover",
            "widget",
            "aui-classnamemanager",
            "aui-base",
            "aui-widget-cssclass",
            "aui-widget-toggle"
        ],
        "skinnable": true
    },
    "aui-parse-content": {
        "requires": [
            "async-queue",
            "plugin",
            "io-base",
            "aui-component",
            "aui-node-base"
        ]
    },
    "aui-popover": {
        "requires": [
            "transition",
            "widget",
            "widget-autohide",
            "widget-buttons",
            "widget-modality",
            "widget-position",
            "widget-position-align",
            "widget-position-constrain",
            "widget-stack",
            "widget-stdmod",
            "aui-classnamemanager",
            "aui-widget-cssclass",
            "aui-widget-toggle",
            "aui-widget-toolbars",
            "aui-widget-trigger",
            "aui-widget-position-align-suggestion",
            "aui-component",
            "aui-node-base"
        ]
    },
    "aui-progressbar": {
        "requires": [
            "aui-node",
            "aui-component",
            "aui-aria"
        ]
    },
    "aui-rating": {
        "use": [
            "aui-rating-base",
            "aui-rating-thumb"
        ]
    },
    "aui-rating-base": {
        "requires": [
            "widget-htmlparser",
            "widget-uievents",
            "aui-component",
            "aui-node-base"
        ],
        "skinnable": true
    },
    "aui-rating-thumb": {
        "requires": [
            "aui-rating-base"
        ]
    },
    "aui-resize-base-deprecated": {
        "requires": [
            "dd-drag",
            "dd-delegate",
            "dd-drop",
            "aui-base-deprecated"
        ],
        "skinnable": true
    },
    "aui-resize-constrain-deprecated": {
        "requires": [
            "dd-constrain",
            "plugin",
            "aui-resize-base-deprecated"
        ]
    },
    "aui-resize-deprecated": {
        "skinnable": true,
        "use": [
            "aui-resize-base-deprecated",
            "aui-resize-constrain-deprecated"
        ]
    },
    "aui-scheduler": {
        "use": [
            "aui-scheduler-base",
            "aui-scheduler-event-recorder",
            "aui-scheduler-view-agenda",
            "aui-scheduler-view-day",
            "aui-scheduler-view-month",
            "aui-scheduler-view-table-dd",
            "aui-scheduler-view-table",
            "aui-scheduler-view-week"
        ]
    },
    "aui-scheduler-base": {
        "requires": [
            "model",
            "model-list",
            "widget-stdmod",
            "color-hsl",
            "aui-event-base",
            "aui-node-base",
            "aui-component",
            "aui-datatype",
            "aui-button"
        ],
        "skinnable": true
    },
    "aui-scheduler-event-recorder": {
        "requires": [
            "querystring",
            "io-form",
            "overlay",
            "aui-scheduler-base",
            "aui-popover"
        ],
        "skinnable": true
    },
    "aui-scheduler-view-agenda": {
        "requires": [
            "aui-scheduler-base"
        ],
        "skinnable": true
    },
    "aui-scheduler-view-day": {
        "requires": [
            "dd-drag",
            "dd-delegate",
            "dd-drop",
            "dd-constrain",
            "aui-scheduler-view-table"
        ],
        "skinnable": true
    },
    "aui-scheduler-view-month": {
        "requires": [
            "aui-scheduler-view-table"
        ],
        "skinnable": true
    },
    "aui-scheduler-view-table": {
        "requires": [
            "overlay",
            "aui-scheduler-base"
        ],
        "skinnable": true
    },
    "aui-scheduler-view-table-dd": {
        "requires": [
            "dd-drag",
            "dd-delegate",
            "dd-drop",
            "aui-scheduler-view-table"
        ]
    },
    "aui-scheduler-view-week": {
        "requires": [
            "aui-scheduler-view-day"
        ],
        "skinnable": true
    },
    "aui-scroller-deprecated": {
        "requires": [
            "event-mouseenter",
            "aui-base-deprecated",
            "aui-simple-anim-deprecated"
        ],
        "skinnable": true
    },
    "aui-search": {
        "use": [
            "aui-search-tst"
        ]
    },
    "aui-search-tst": {
        "requires": [
            "aui-component"
        ]
    },
    "aui-selector": {
        "requires": [
            "selector-css3",
            "aui-classnamemanager"
        ]
    },
    "aui-set": {
        "requires": [
            "aui-map"
        ]
    },
    "aui-simple-anim-deprecated": {
        "requires": [
            "aui-base-deprecated"
        ]
    },
    "aui-skin-deprecated": {
        "type": "css"
    },
    "aui-sortable": {
        "use": [
            "aui-sortable-layout",
            "aui-sortable-list"
        ]
    },
    "aui-sortable-layout": {
        "requires": [
            "dd-delegate",
            "dd-drag",
            "dd-drop",
            "dd-proxy",
            "aui-node",
            "aui-component"
        ],
        "skinnable": true
    },
    "aui-sortable-list": {
        "requires": [
            "dd-drag",
            "dd-drop",
            "dd-proxy",
            "aui-node",
            "aui-component"
        ]
    },
    "aui-state-interaction-deprecated": {
        "requires": [
            "aui-base-deprecated",
            "plugin"
        ]
    },
    "aui-swf-deprecated": {
        "requires": [
            "querystring-parse-simple",
            "querystring-stringify-simple",
            "aui-base-deprecated"
        ]
    },
    "aui-tabview": {
        "requires": [
            "selector-css3",
            "tabview",
            "aui-component"
        ]
    },
    "aui-template-deprecated": {
        "requires": [
            "aui-base-deprecated"
        ]
    },
    "aui-text-data-unicode": {
        "requires": [
            "text"
        ]
    },
    "aui-text-unicode": {
        "requires": [
            "aui-text-data-unicode"
        ]
    },
    "aui-textboxlist-deprecated": {
        "requires": [
            "anim-node-plugin",
            "aui-autocomplete-deprecated",
            "aui-button-item-deprecated",
            "aui-data-set-deprecated",
            "escape",
            "node-focusmanager"
        ],
        "skinnable": true
    },
    "aui-timepicker": {
        "requires": [
            "autocomplete",
            "aui-datepicker-delegate",
            "aui-datepicker-popover"
        ],
        "skinnable": true
    },
    "aui-timepicker-native": {
        "requires": [
            "base",
            "base-build",
            "aui-node-base",
            "aui-datepicker-delegate",
            "aui-datepicker-native"
        ]
    },
    "aui-timer": {
        "requires": [
            "oop"
        ]
    },
    "aui-toggler": {
        "use": [
            "aui-toggler-base",
            "aui-toggler-delegate"
        ]
    },
    "aui-toggler-base": {
        "requires": [
            "transition",
            "aui-selector",
            "aui-event-base",
            "aui-node",
            "aui-component"
        ],
        "skinnable": true
    },
    "aui-toggler-delegate": {
        "requires": [
            "array-invoke",
            "node-event-delegate",
            "aui-toggler-base"
        ]
    },
    "aui-toolbar": {
        "requires": [
            "arraylist",
            "arraylist-add",
            "aui-component",
            "aui-button-core"
        ]
    },
    "aui-tooltip": {
        "use": [
            "aui-tooltip-base",
            "aui-tooltip-delegate"
        ]
    },
    "aui-tooltip-base": {
        "requires": [
            "escape",
            "event-hover",
            "transition",
            "widget",
            "widget-autohide",
            "widget-position",
            "widget-position-align",
            "widget-position-constrain",
            "widget-stack",
            "widget-stdmod",
            "aui-classnamemanager",
            "aui-component",
            "aui-widget-cssclass",
            "aui-widget-toggle",
            "aui-widget-trigger",
            "aui-widget-position-align-suggestion",
            "aui-node-base"
        ]
    },
    "aui-tooltip-delegate": {
        "requires": [
            "node-event-delegate",
            "aui-tooltip-base"
        ]
    },
    "aui-tooltip-deprecated": {
        "requires": [
            "aui-overlay-context-panel-deprecated"
        ],
        "skinnable": true
    },
    "aui-tpl-snippets-base-deprecated": {
        "requires": [
            "aui-template-deprecated"
        ]
    },
    "aui-tpl-snippets-checkbox-deprecated": {
        "requires": [
            "aui-tpl-snippets-base-deprecated"
        ]
    },
    "aui-tpl-snippets-deprecated": {
        "use": [
            "aui-tpl-snippets-base-deprecated",
            "aui-tpl-snippets-checkbox-deprecated",
            "aui-tpl-snippets-input-deprecated",
            "aui-tpl-snippets-select-deprecated",
            "aui-tpl-snippets-textarea-deprecated"
        ]
    },
    "aui-tpl-snippets-input-deprecated": {
        "requires": [
            "aui-tpl-snippets-base-deprecated"
        ]
    },
    "aui-tpl-snippets-select-deprecated": {
        "requires": [
            "aui-tpl-snippets-base-deprecated"
        ]
    },
    "aui-tpl-snippets-textarea-deprecated": {
        "requires": [
            "aui-tpl-snippets-base-deprecated"
        ]
    },
    "aui-tree": {
        "use": [
            "aui-tree-data",
            "aui-tree-io",
            "aui-tree-node",
            "aui-tree-paginator",
            "aui-tree-view"
        ]
    },
    "aui-tree-data": {
        "requires": [
            "aui-base-core",
            "aui-base-lang",
            "aui-node-base",
            "aui-timer",
            "aui-component"
        ]
    },
    "aui-tree-io": {
        "requires": [
            "aui-component",
            "aui-io"
        ]
    },
    "aui-tree-node": {
        "requires": [
            "json",
            "querystring-stringify",
            "aui-tree-data",
            "aui-tree-io",
            "aui-tree-paginator"
        ]
    },
    "aui-tree-paginator": {
        "requires": [
            "yui-base"
        ]
    },
    "aui-tree-view": {
        "requires": [
            "dd-delegate",
            "dd-proxy",
            "aui-tree-node",
            "aui-tree-paginator",
            "aui-tree-io"
        ],
        "skinnable": true
    },
    "aui-url": {
        "requires": [
            "oop",
            "querystring-parse",
            "querystring-stringify"
        ]
    },
    "aui-video": {
        "requires": [
            "querystring-stringify-simple",
            "aui-node",
            "aui-component",
            "aui-debounce"
        ],
        "skinnable": true
    },
    "aui-viewport": {
        "requires": [
            "aui-node",
            "aui-component"
        ]
    },
    "aui-widget": {
        "use": [
            "aui-widget-cssclass",
            "aui-widget-toolbars"
        ]
    },
    "aui-widget-core": {
        "use": [
            "aui-widget-cssclass"
        ]
    },
    "aui-widget-cssclass": {
        "requires": [
            "widget-base"
        ]
    },
    "aui-widget-position-align-suggestion": {
        "requires": [
            "widget-position-align",
            "widget-stdmod"
        ]
    },
    "aui-widget-toggle": {},
    "aui-widget-toolbars": {
        "requires": [
            "widget-stdmod",
            "aui-toolbar"
        ]
    },
    "aui-widget-trigger": {
        "requires": [
            "node"
        ]
    }
});
YUI.Env[Y.version].md5 = '7b0c35381c38b5d9703281a5a053d1cb';
