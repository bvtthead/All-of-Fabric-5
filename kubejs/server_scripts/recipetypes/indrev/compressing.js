////////////////////////
/// Made by Team AOF ///
////////////////////////

onEvent('recipes', (event) => {

    event.recipes.indrev.compress({

        type: "indrev:compress",
        ingredients: {
            item: "modern_industrialization:tin_curved_plate",
            count: 4
        },
        output: {
            item: "indrev:empty_enhancer",
            count: 1
        },
        processTime: 300

    });

    event.recipes.indrev.compress({

        type: "indrev:compress",
        ingredients: {
            tag: "c:tin_plates",
            count: 1
        },
        output: {
            item: "modern_industrialization:tin_curved_plate",
            count: 1
        },
        processTime: 300

    });

    const mi_plates_compat = [
        'aluminum',
        'carbon',
        'chromium',
        'diamond',
        'emerald',
        'invar',
        'platinum',
        'silicon',
        'titanium'
    ];

    const tr_plates_compat = [
        'advanced_alloy',
        'brass',
        'refined_iron',
        'tungstensteel'
    ];

    mi_plates_compat.forEach((mi_plates_compat) => {
        event.recipes.indrev.compress({

            type: 'indrev:compress',
            ingredients: {
                tag: 'c:' + mi_plates_compat + '_ingots',
                count: 1
            },
            output: {
                item: 'modern_industrialization:' + mi_plates_compat + '_plate',
                count: 1
            },
            processTime: 300

        });
    });

    tr_plates_compat.forEach((tr_plates_compat) => {
        event.recipes.indrev.compress({

            type: 'indrev:compress',
            ingredients: {
                tag: 'c:' + tr_plates_compat + '_ingots',
                count: 1
            },
            output: {
                item: 'techreborn:' + tr_plates_compat + '_plate',
                count: 1
            },
            processTime: 300

        });
    });

    event.recipes.indrev.compress({

        type: 'indrev:compress',
        ingredients: {
            tag: 'c:peridot_dusts',
            count: 1
        },
        output: {
            item: 'techreborn:peridot_plate',
            count: 1
        },
        processTime: 300

    });

    event.recipes.indrev.compress({

        type: 'indrev:compress',
        ingredients: {
            tag: 'c:lazurite_dusts',
            count: 1
        },
        output: {
            item: 'techreborn:lazurite_plate',
            count: 1
        },
        processTime: 300

    });
});