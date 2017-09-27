function loadSystems() {

    var firstSystem = new System({
        rate: 0,
        name: "firstSystem",
        background: true
    });

    firstSystem.addFlock({
        type: "vehicles",
        color: [0, 255, 0],
        dots: {
            name: "dot",
            amount: 4,
            displayRate: 1
        },
        vehicleVariables: {
            maxSpeed: 150,
            maxForce: 10,
            desiredSeparation: 150
        },
        graph: fetchJSON("wed-sep-27-2017-014236")
    });
    firstSystem.addFlock({
        type: "static",
        color: [255, 0, 0],
        graph: fetchJSON("wed-sep-27-2017-014506")
    });
    firstSystem.flocks[0].addAttractors(firstSystem.flocks[1], 0.0015);
    firstSystem.flocks[0].addRepellers(firstSystem.flocks[0], 0.05);

    return firstSystem;
}