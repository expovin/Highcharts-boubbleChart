var title =  {
					type: "items",
					label: "Title",
					items : {
						enableCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Enable Title",
							ref: "settings.yAxis.title.enable",
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
							ref: "settings.yAxis.title.align" ,
							show : function(data) {
								return data.settings && data.settings.yAxis && data.settings.yAxis.title && data.settings.yAxis.title.enable;
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
							ref: "settings.yAxis.title.margin",
							show : function(data) {
								return data.settings && data.settings.yAxis && data.settings.yAxis.title && data.settings.yAxis.title.enable;
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
							ref: "settings.yAxis.title.offset",
							show : function(data) {
								return data.settings && data.settings.yAxis && data.settings.yAxis.title && data.settings.yAxis.title.enable;
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
							ref: "settings.yAxis.title.rotation",
							show : function(data) {
								return data.settings && data.settings.yAxis && data.settings.yAxis.title && data.settings.yAxis.title.enable;
							}
						},
						text: {
							type: "string",
							expression: "optional",
							label: "Text",
							defaultValue:undefined,
							ref: "settings.yAxis.labels.text",
							show : function(data) {
								return data.settings && data.settings.yAxis && data.settings.yAxis.title && data.settings.yAxis.title.enable;
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
							ref: "settings.yAxis.labels.enable",
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
							ref: "settings.yAxis.labels.align" ,
							show : function(data) {
								return data.settings && data.settings.yAxis && data.settings.yAxis.labels && data.settings.yAxis.labels.enable;
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
							ref: "settings.yAxis.labels.autoRotation",
							show : function(data) {
								return data.settings && data.settings.yAxis && data.settings.yAxis.labels && data.settings.yAxis.labels.enable;
							}
						},
						format: {
							type: "string",
							expression: "optional",
							label: "Format",
							defaultValue:'{value}',
							ref: "settings.yAxis.labels.format",
							show : function(data) {
								return data.settings && data.settings.yAxis && data.settings.yAxis.labels && data.settings.yAxis.labels.enable;
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
			                            ref: "settings.yAxis.plotBands",
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
					ref: "settings.yAxis.allowDecimals",
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
							ref: "settings.yAxis.alternateGridColor"
						},
						startOnTickCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Start On Tick",
							ref: "settings.yAxis.startOnTick",
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
							ref: "settings.yAxis.endOnTick",
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
							ref: "settings.yAxis.gridLineColor"
						},
						gridLineDashStyle: {
							type: "string",
							component: "dropdown",
							label: "Grid Line Dash Style",
							options: dashStyle,
							defaultValue: "Solid",
							ref: "settings.yAxis.gridLineDashStyle"
						},
						gridLineWidth: {
							type: "number",
							component: "slider",
							label: "Grid Line Width",
							min: 0,
							max: 15,
							step: 1,
							defaultValue: 0,
							ref: "settings.yAxis.gridLineWidth"
						},
						lineColor: {
							type: "integer",
							component: "color-picker",
							//expression: "optional",
							label: "Line Color",
							defaultValue:4,
							ref: "settings.yAxis.lineColor"
						},
						lineWidth: {
							type: "number",
							component: "slider",
							label: "Line Width",
							min: 0,
							max: 10,
							step: 1,
							defaultValue: 1,
							ref: "settings.yAxis.lineWidth"
						},
						maxPadding: {
							type: "number",
							component: "slider",
							label: "Max Padding",
							min: 0,
							max: 5,
							step: 0.1,
							defaultValue: 0.2,
							ref: "settings.yAxis.maxPadding"
						},
		    }

};




// Questa è la sezione di mapping dell'intera Plot Option
var yAxisSettings = {

    component: "expandable-items",
    label: "yAxis",
    items:{
    	GeneralSettings: { },
		plotBands : {},
		labels : {},
		title : {}
	}
};


// Mapping variabili su PlotOption
yAxisSettings.items.GeneralSettings = GeneralSection;
yAxisSettings.items.plotBands = plotBands;
yAxisSettings.items.labels = labels;
yAxisSettings.items.title = title;