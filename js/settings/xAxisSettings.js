var title =  {
					type: "items",
					label: "Title",
					items : {
						enableCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Enable Title",
							ref: "settings.xAxis.title.enable",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false
						},
						AlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Align",
							options: alignOption,
							defaultValue: "center",
							ref: "settings.xAxis.title.align" ,
							show : function(data) {
								return data.settings && data.settings.xAxis && data.settings.xAxis.title && data.settings.xAxis.title.enable;
							}
						},
						margin: {
							type: "number",
							component: "slider",
							label: "Margin",
							min: 0,
							max: 100,
							step: 5,
							defaultValue: undefined,
							ref: "settings.xAxis.title.margin",
							show : function(data) {
								return data.settings && data.settings.xAxis && data.settings.xAxis.title && data.settings.xAxis.title.enable;
							}
						},
						offset: {
							type: "number",
							component: "slider",
							label: "Offset",
							min: 0,
							max: 90,
							step: 1,
							defaultValue: undefined,
							ref: "settings.xAxis.title.offset",
							show : function(data) {
								return data.settings && data.settings.xAxis && data.settings.xAxis.title && data.settings.xAxis.title.enable;
							}
						},
						rotation: {
							type: "number",
							component: "slider",
							label: "Rotation",
							min: 0,
							max: 90,
							step: 1,
							defaultValue: 0,
							ref: "settings.xAxis.title.rotation",
							show : function(data) {
								return data.settings && data.settings.xAxis && data.settings.xAxis.title && data.settings.xAxis.title.enable;
							}
						},
						text: {
							type: "string",
							expression: "optional",
							label: "Text",
							defaultValue:undefined,
							ref: "settings.xAxis.labels.text",
							show : function(data) {
								return data.settings && data.settings.xAxis && data.settings.xAxis.title && data.settings.xAxis.title.enable;
							}
						}
					}

};


var labels = {

					type: "items",
					label: "Labels",
					items : {
						enableCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Enable Labels",
							ref: "settings.xAxis.labels.enable",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false
						},
						AlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Align",
							options: alignOption,
							defaultValue: "center",
							ref: "settings.xAxis.labels.align" ,
							show : function(data) {
								return data.settings && data.settings.xAxis && data.settings.xAxis.labels && data.settings.xAxis.labels.enable;
							}
						},
						autoRotation: {
							type: "number",
							component: "slider",
							label: "Auto Rotation",
							min: -90,
							max: 90,
							step: 1,
							defaultValue: -45,
							ref: "settings.xAxis.labels.autoRotation",
							show : function(data) {
								return data.settings && data.settings.xAxis && data.settings.xAxis.labels && data.settings.xAxis.labels.enable;
							}
						},
						format: {
							type: "string",
							expression: "optional",
							label: "Format",
							defaultValue:'{value}',
							ref: "settings.xAxis.labels.format",
							show : function(data) {
								return data.settings && data.settings.xAxis && data.settings.xAxis.labels && data.settings.xAxis.labels.enable;
							}
						}
					}

}

// Sezione Marker
var plotBands = {

			type: "items",
			label: "Plot Bands",
					items: {
						general: {
							type: "items",
							label: "General",
							items : {
								MyList: {
										type: "array",
			                            ref: "settings.xAxis.plotBands",
			                            //ref: "listItems",
			                            label: "plotBands",
			                            itemTitleRef: "label",
			                            allowAdd: true,
			                            allowRemove: true,
			                            addTranslation: "Add Item",
			                            items: {
			
											borderColor: {
												type: "integer",
												component: "color-picker",
												//expression: "optional",
												label: "Border Color",
												defaultValue:undefined,
												ref: "borderColor"
											},
											borderWidth: {
												type: "number",
												component: "slider",
												label: "Border Width",
												min: 0,
												max: 15,
												step: 1,
												defaultValue: 0,
												ref: "borderWidth"
											},
											plotBandsColor: {
												type: "string",
												expression: "optional",
												label: "Color",
												defaultValue:undefined,
												ref: "color"
											},
											plotBandsFrom: {
												type: "integer",
												expression: "optional",
												label: "From",
												defaultValue:undefined,
												ref: "from"
											},
											plotBandsTo: {
												type: "integer",
												expression: "optional",
												label: "To",
												defaultValue:undefined,
												ref: "to"
											}
			    						}
									}
								}
							}
						}
					};



//Sezione General
var GeneralSection = {
			type: "items",
			label: "General Settings",
		    items : {
				allowDecimalsCheckbox: {
					type: "boolean",
					component: "switch",
					label: "Allow Decimals",
					ref: "settings.xAxis.allowDecimals",
                         options: [{
                                    value: true,
                                    label: "On"
								}, {
                                    value: false,
                                    label: "Off"
						        }],
					defaultValue: true
				},
				alternateGridColor: {
							type: "string",
							expression: "optional",
							label: "Alternate color Grid",
							defaultValue:undefined,
							ref: "settings.xAxis.alternateGridColor"
						},
						startOnTickCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Start On Tick",
							ref: "settings.xAxis.startOnTick",
		                         options: [{
		                                    value: true,
		                                    label: "On"
										}, {
		                                    value: false,
		                                    label: "Off"
								        }],
							defaultValue: false
						},
						endOnTickCheckbox: {
							type: "boolean",
							component: "switch",
							label: "End On Tick",
							ref: "settings.xAxis.endOnTick",
		                         options: [{
		                                    value: true,
		                                    label: "On"
										}, {
		                                    value: false,
		                                    label: "Off"
								        }],
							defaultValue: false
						},
						gridLineColor: {
							type: "string",
							expression: "optional",
							label: "Grid Line Color",
							defaultValue:undefined,
							ref: "settings.xAxis.gridLineColor"
						},
						gridLineDashStyle: {
							type: "string",
							component: "dropdown",
							label: "Grid Line Dash Style",
							options: dashStyle,
							defaultValue: "Solid",
							ref: "settings.xAxis.gridLineDashStyle"
						},
						gridLineWidth: {
							type: "number",
							component: "slider",
							label: "Grid Line Width",
							min: 0,
							max: 15,
							step: 1,
							defaultValue: 0,
							ref: "settings.xAxis.gridLineWidth"
						},
						lineColor: {
							type: "integer",
							component: "color-picker",
							//expression: "optional",
							label: "Line Color",
							defaultValue:4,
							ref: "settings.xAxis.lineColor"
						},
						lineWidth: {
							type: "number",
							component: "slider",
							label: "Line Width",
							min: 0,
							max: 10,
							step: 1,
							defaultValue: 1,
							ref: "settings.xAxis.lineWidth"
						},
						maxPadding: {
							type: "number",
							component: "slider",
							label: "Max Padding",
							min: 0,
							max: 5,
							step: 0.1,
							defaultValue: 0.2,
							ref: "settings.xAxis.maxPadding"
						},
		    }

};




// Questa è la sezione di mapping dell'intera Plot Option
var xAxisSettings = {

    component: "expandable-items",
    label: "xAxis",
    items:{
    	GeneralSettings: { },
		plotBands : {},
		labels : {},
		title : {}
	}
};


// Mapping variabili su PlotOption
xAxisSettings.items.GeneralSettings = GeneralSection;
xAxisSettings.items.plotBands = plotBands;
xAxisSettings.items.labels = labels;
xAxisSettings.items.title = title;