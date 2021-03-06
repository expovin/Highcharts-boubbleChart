function singleDimension(layout,dimensionLabels,measureLabels,app) {

	var newMatrix = [];
	var singlePoint = {};
	var data = [];
	var series = [];
	serie = {}

//		console.log(layout.qHyperCube.qDataPages[0].qMatrix);
//		console.log(layout.qHyperCube.qEffectiveInterColumnSortOrder);

	if(dimensionLabels.length == 1){
		serie['name'] = dimensionLabels[0];

		//console.log("Single Dimension");
        $.each(layout.qHyperCube.qDataPages[0].qMatrix, function(key, row){
        	singlePoint['name']=row[0].qText;
            singlePoint['x']=row[1].qNum;
        	singlePoint['y']=row[2].qNum;
            if(measureLabels.length == 3)
                singlePoint['z']=row[3].qNum;

        	newMatrix.push(singlePoint);
        	singlePoint = {};

        });
        serie['data'] = newMatrix;
        serie['colorByPoint'] ="true";
        series.push(serie);
    }
    else {
    	dim1Point = {};
    	dim2Point = {};
    	mySeries = {};
    	myData = {}
    	count = 0;
    	// Loop su tutte la matrice
    	//console.log(layout.qHyperCube.qDataPages[0].qMatrix);
        console.log(dimensionLabels);
        console.log(measureLabels);

    	$.each(layout.qHyperCube.qDataPages[0].qMatrix, function(key, row){

    		mySortOrder = [];
    		for(i=0; i<layout.qHyperCube.qEffectiveInterColumnSortOrder.length; i++ )
    			if(layout.qHyperCube.qEffectiveInterColumnSortOrder[i] != 2)
    				mySortOrder.push(layout.qHyperCube.qEffectiveInterColumnSortOrder[i]);
    		
    		//console.log(mySortOrder);
    		innerDim = row[mySortOrder[1]].qText;
    		outerDim = row[mySortOrder[0]].qText;
    		measure1 = row[2].qNum;
            measure2 = row[3].qNum;
            console.log(row);
            if(measureLabels.length == 3)
                measure3 = row[4].qNum;

    		count++;

    		//console.log(count+") "+innerDim+" "+outerDim+" "+measure);

    		// Costruisco la serie di punti per la dimensione interna
    		dim1Point['name'] = innerDim;
    		dim1Point['x'] = measure1;
            dim1Point['y'] = measure2;
            if(measureLabels.length == 3)
                dim1Point['z'] = measure3;

    		//console.log(dim1Point);

    		// Mi creo l'array data per la dimensione piu esterna
    		if(dim2Point[outerDim]== undefined)
    			dim2Point[outerDim] = [];
    		
    		dim2Point[outerDim].push(dim1Point);			// Costruisco l'Array di punti per la Dimensione esterna
    		dim1Point = {};									// Ripulisto il punto interno pronto per il prossimo loop


    		//console.log(dim2Point);

    	});

    	$.each(dim2Point, function(key, row){
    		mySeries = {};
    		mySeries['name'] = key;
    		mySeries['data'] = row;
    		series.push(mySeries);
    	});


    	//console.log(series);

    }
    //console.log(JSON.stringify(series));

	return series;
}


